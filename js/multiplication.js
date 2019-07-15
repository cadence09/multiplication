var num1;
			var num2;
			function integer(x, y){
				var a = Math.floor(x/ y);
				return a;
			}
			function check(){
				var product = parseInt(document.getElementById("product").value);
				if (product == num1 * num2){
					document.getElementById("product").value = "";
					document.getElementById("result").innerHTML  = "Very good!" + num1 + " * " + num2 + " = " + product;
					calculation();
				}
				else
					document.getElementById("result").innerHTML  = "No. Please try again.";
			}
			function calculation(){
				document.getElementById("getanswer").style.visibility = 'visible';
				num1 = Math.floor((Math.random()*20));
				num2 = Math.floor((Math.random()*20));
				document.getElementById("question").innerHTML  = "How much is " + num1 + " times " + num2 + "?";
				document.getElementById("product").focus();
			}
			function begin(){
				document.getElementById("getanswer").style.visibility = 'hidden'; 
				calculation();
			}