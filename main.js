// JavaScript Document
//Cassandra Morath
//VFW Project 2
//Jan 8, 2013
window.addEventListener("DOMContentLoaded", function(){
//Get elementById function
	function $(x){
		var elementId = document.getElementById(x);
		return elementId;
	}
	
//create select field element and populate with options
	function chooseBreed(){ 
		var formTag = document.getElementsByTagName("form"), 
			selectLi = $('breed');
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id" ,"breed");
		for(var i=0 , j=storeInfo.length; i<j; i++) {
			var pickOption = document.createElement("option");
			var optionText = storeInfo[i];
			pickOption.setAttribute("value", optionText);
			pickOption.innerHTML = optionText;
			makeSelect.appendChild(pickOption);
		
	}
	selectLi.appendChild(makeSelect);
}

function getSelectedRadio(){
	var radios = document.forms[0].sex;
	for(var i=0; i<radios.length; i++){
		if(radios[i].checked){
			sexValue = radios[i].value;
		}
	}
}

function toggleControls(n){
	switch(n){
		case "on":
			$("contactForm").style.display = "none";
			$("clear").style.display = "inline";
			$("displayLink").style.display = "none";
			$("addNew").style.display = "inline";
			break;
		case "off":
			e "on":
			$("contactForm").style.display = "block";
			$("clear").style.display = "inline";
			$("displayLink").style.display = "inline";
			$("addNew").style.display = "none";
			$("items").style.display = "none";
			break;
		default:
			return false;
		
	}
	
}

function storeInfo(){
	var id = Math.floor(Math.random()*100000000001);
	var item = {};
		item.breed = ["Breeds:", $("breed").value];
		item.oname = ["Owner's Name:", $("oname").value];
		item.onotes = ["Owner's Notes:", $("onotes").value];
		item.pname = ["Pet's Name:", $("pname").value];
		item.gdate = ["Groom Date:", $("gdate").value];
		item.slider = ["Difficulty:", $("slider").value];
		item.gnotes = ["Grooming Notes:", $("gnotes").value];
		item.pnotes = ["Pet Notes:", $("pnotes").value];
		item.sex = ["Sex:", sexValue]; 
		//Save data into local storage: use Stringify to convert object to a string. 
		
    localStorage.setItem(id, JSON.stringify(item));
	alert("Pet saved!");		
}

function getData(){
	//Write data from local storage
	var makeDiv = document.createElement("div");
	makeDiv.setAttribute("id","items");
	var makeList = document.createElement("ul");
	makeDiv.appendChild(makeList);
	document.body.appendChild(makeDiv);
	$("items").style.display = "block";
	for(var i=0, len=localStorage.length; i<len; i++){
		var makeli = document.createElement("li");
		makeList.appendChild(makeli);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		//convert the string from local storage valyue back to an oblect by using JSON.parse()
		var obj = JSON.parse(value); //I knew this!
		var makeSubList = document.createElement("ul")
		makeli.appendChild(makeSubList);
		for (var n in obj){
			var makeSubli = document.createElement("li");
			makeSubList.appendChild(makeSubli);
			var optSubText = obj[n][0]+ " "+obj[n][1];
			makeSubli.innerHTML = optSubText;
		}
	}
}

//Variable defaults
	var breedInfo = ["--Choose A Breed--", "Dogs", "Cats" ],
		sexValue;
	chooseBreed();
/*Set link and submit click events
	var rbutton = $("rbutton");
		rbutton.addEventListener("click" , clearLocal);*/
	var dbutton = $("dbutton");
		dbutton.addEventListener("click", getData);
	var sbutton = $("sbutton");
		sbutton.addEventListener("click" , storeInfo);
		

});