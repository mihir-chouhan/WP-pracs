function func(){
			//Username
			var q = document.getElementById("nam");
			if(q.value == ""){
			alert("Please fill your username");
			return false;
			}

			//Email-id
			var f = document.getElementById("mail").value;
    		var g = f.indexOf("@");
    		var h = f.lastIndexOf(".");
    		if(f == ""){
    			alert("Please fill your email");
    			return false;
    		}
    		if (g<1 || h<g+2 || h+2>=f.length) {
        		alert("Please enter a valid email address");
        		return false;
    		}

    		//Password
    		var a = document.getElementById("pass1");
			if(a.value == ""){
			alert("Please enter password");
			return false;
			}
			if(a.value.length < 8){
				alert("At least 8 charaters");
				return false;
			}
			if(a.value.includes("1")==false && a.value.includes("2")==false && a.value.includes("3")==false && a.value.includes("4")==false && a.value.includes("5")==false && a.value.includes("6")==false && a.value.includes("7")==false && a.value.includes("8")==false && a.value.includes("9")==false && a.value.includes("0")==false){
				alert("Password must be alpha numeric");
				return false;
			}

    		//Confirm password
    		var x = document.getElementById("pass1");
			var y = document.getElementById("pass2");
			if(x.value!=y.value){
			alert("Confirm password again");
			return false;
			}

			//Gender
			var w = document.getElementById("mal");
			var r = document.getElementById("femal");
				if(w.checked==false && r.checked==false){
					alert("Please select an option for gender");
					return false;
				}
				if(w.checked==true && r.checked==true){
					alert("You can select only single option");
					return false;
				}

			//Phone number
			var m = document.getElementById("phone").value;
			if(m==""){
				alert("Please enter your phone number");
				return false;
			}
			if(isNaN(m)==true){
				alert("Please enter digits only in your phone number");
				return false;
			}
			if(m.length != 10){
				alert("Please enter 10 digits only");
				return false;
			}

			//checkboxes
			var p = document.getElementById("c1");
			var i = document.getElementById("c2");
			var s = document.getElementById("c3");
			var t = document.getElementById("c4");
			if(p.checked==false && i.checked==false && s.checked==false && t.checked==false){
				alert("You must tick atleast one checkbox");
				return false;
			}

			//Next page
			var z = confirm("Are you sure?");
			if(z == true){
				var b = document.getElementById("01");
				b.href = "home.html";
				return false;
			}
	}
	function test(){
		var a = document.getElementById("pass1");
		var b = document.getElementById("pass2");
		if(a.value != b.value){
			b.style.borderColor="red";
			return false;
		}
		else{
			b.style.borderColor="green";
			return true; 
		}
	}