var inquirer = require('inquirer');
var mysql = require('mysql');

// MySQL connection 
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: "root",
	database: 'bamazon'
});

function start(){
	//showing the list of all the items
	connection.query('SELECT * FROM Products', function(err, res){
	  if(err) throw err;
	
	  console.log('This is Bamazon')
	  console.log('----------------------------------------------------------------------------------------------------')
	
	  for(var i = 0; i<res.length;i++){
		console.log("ID: " + res[i].id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
		console.log('--------------------------------------------------------------------------------------------------')
	  }
	  //prompt user to choose am item
	  console.log(' ');
	  inquirer.prompt([
		{
		  type: "input",
		  name: "id",
		  message: "Choose the ID number of the item you wish to buy?",
		  //validates the ID
		  validate: function(value){
			if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
			  return true;
			} else{
			  return false;
			}
		  }
		},
		//asks user how many items to buy and validates number
		{
		  type: "input",
		  name: "qty",
		  message: "How many would you like to buy?",
		  validate: function(value){
			if(isNaN(value)){
			  return false;
			} else{
			  return true;
			}
		  }
		}
		]).then(function(ans){
		  var itemToBuy = (ans.id)-1;
		  var amountToBuy = parseInt(ans.qty);
		  var total = parseFloat(((res[itemToBuy].price)*amountToBuy).toFixed(2));
	
		  //checks if enough items are in stock
		  if(res[itemToBuy].stock_quantity >= amountToBuy){
			//updates quantity in Products
			connection.query("UPDATE Products SET ? WHERE ?", [
			{stock_quantity: (res[itemToBuy].stock_quantity - amountToBuy)},
			{id: ans.id}
			], function(err, result){
				if(err) throw err;
				console.log("Thanks for your purchase! Your total is $" + total.toFixed(2));
			reprompt();
			});
			
	
			connection.query("SELECT * FROM Products", function(err, deptRes){
			  if(err) throw err;
			  var index;
			  for(var i = 0; i < deptRes.length; i++){
				if(deptRes[i].department_name === res[itemToBuy].department_name){
				  index = i;
				}
			  
			 else{
				console.log("We're sorry, there is an insufficient quantity of the item");
				reprompt();
				}
			}
			  
			});
	
		 //} else{
			//console.log("We're sorry, there is an insufficient quantity of the item");
		//	reprompt();
		  //}
	
		  
		
	
	}
	
	//asks if they would like to purchase another item
	function reprompt(){
	  inquirer.prompt([{
		type: "confirm",
		name: "reply",
		message: "Would you like to purchase another item?"
	  }]).then(function(ans){
		if(ans.reply){
		  start();
		} else{
		  console.log("See you soon!");
		}
		});
	}
	});

	
	 start();
