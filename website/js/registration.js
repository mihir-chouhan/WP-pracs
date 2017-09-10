function myFunction(){
		bg();
		// emailid();
		var x = document.getElementById("pass");
		var y = document.getElementById("pass2");
		if(x.value!=y.value){
			alert("Confirm password again");
			return false;
		}
		var z = document.getElementById("nam");
			if(z.value == ""){
			alert("Please fill the name");
			return false;
		}
		var a = document.getElementById("pass");
		if(a.value == ""){
			alert("Please enter password");
			return false;
		}
		var d = document.getElementById("phone");
			if(d.value == ""){
			alert("Please fill your phone number");
			return false;
		} else if(d.value < 1000000000){
			alert("Your phone number should atleast be 10 digits");
			return false;
		}
		else if(d.value > 9999999999){
			alert("Your number cannot exceed 10 digits");
			return false;
		}
		var f = document.getElementById("mail").value;
    	var g = f.indexOf("@");
    	var h = f.lastIndexOf(".");
    		if (g<1 || h<g+2 || h+2>=f.length) {
        		alert("Not a valid e-mail address");
        		return false;
    		}
    		var j = document.getElementById("address");
			if(j.value == ""){
			alert("Please fill your address");
			return false;
		}
		var k = document.getElementById("descript");
		if(k.value == ""){
			alert("No description? really?");
			return false;
		}
		var q = document.getElementById("mal");
		var t = document.getElementById("femal");
		if(q.checked==false && t.checked==false){
			alert("thoda gender bata de");
			return false;
		}
		var s = document.getElementById("chck");
		if(s.checked == false){
			alert("Please select atleast one option");
			return false;
		}
		var m = confirm("Are you sure?");
		if(m == true){
			var n = document.getElementById("sub");
			n.href = "login.html";
			return false;
		}
	}
function bg(){
	var c = document.getElementById("color");
	document.getElementById("body").style.backgroundColor = c.value;
}
// function emailid(){
// 							var c = document.getElementById("mail").value;
// 							var d = c.includes("@");
// 							if (c==""){
// 								alert("Please fill your email id");
// 							}
// 							else if(d==false){
// 								alert("Your email id must contain @ ");
// 							}
// 			}