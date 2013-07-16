// JavaScript Document
//Cassandra Morath
//VFW Project 2
//Jan 8, 2013

//Write a function that saves all data input into the form into 
//Local Storage when the form's submit button is clicked.

//This means the values for your input, select, radio or 
//checkboxes etc.

//You should also save a key(random number) for your 
//values(array or object). Each saved entry will be a key:value pair.

//The key should be a random number which will create a unique id.

//The value should be an array or object that contains all the 
//values of your form field data.

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){
//Get elementById function
	function $(x){
		var elementId = document.getElementById(x);
		return elementId;
	}
	
//create select field element and populate with options
	function chooseBreed(){ 
		var formTag = document.getElementsByTagName("form"), 
			selectLi = $('breed'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id" ,"breed");
		for(var i=0 , j=storeBreed.length; i<j; i++) {
			var pickOption = document.createElement("option");
			var optionText = storeBreed[i];
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
//Variable defaults
	var storeInfo = ["--Choose A Breed--", "Dogs", "Cats" ],
		sexValue;
	chooseBreed();
/*Set link and submit click events
	var dbutton = $("dbutton");
		dbutton.addEventListener("click", getData);
	var rbutton = $("rbutton");
		rbutton.addEventListener("click" , clearLocal);*/
	var sbutton = $("sbutton");
		sbutton.addEventListener("click" , storeInfo);
		

});