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
		var formTag = document.getElementsByTagName("form"), //form tag is an array of all the form tags.
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.selectAttribute("id" ,"breed");
		for(var i=0 , j=aBreed.length; i<j; i++) {
		var pickOption = document.createElement("option");
		var optionText = aBreed[i];
			pickOption.setAttribute("value", optionText);
			pickOption.innerHTML = optionText;
			makeSelect.appendChild(pickOption)
	}
selectLi.appendChild(makeSelect);
}

function sbutton(){
	localStorage.setItem("test" , "hello");
}
//Variable defaults
	var aBreed = ["--Choose A Breed--", "Dogs", "Cats" ];
		chooseBreeds();
//Set link and submit click events
	var sbutton = $("dbutton");
		sbutton.addEventListener("click", getData);
	var rbutton = $("rbutton");
		rbutton.addEventListener("click" , clearLocal);
	var sbutton = $("sbutton");
		sbutton.addEventListener("click" , storeData);
});