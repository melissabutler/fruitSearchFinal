const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


//Create list from results
function createLi(results){
	const newLi = document.createElement("li")

	newLi.innerText = results;
	newLi.classList.add("suggestion");
	newLi.setAttribute('id', results);

	suggestions.append(newLi);
}

//delete all lists except for current argument
function removeList(){
	const suggestion = document.querySelectorAll(".suggestion")
	suggestion.forEach(item => item.remove())
}

//compare str to Fruit List, return matching fruit
function search(str) {
	let results = [];
	let lowercaseStr = str.toLowerCase();
	for(let i = 0; i< fruit.length; i++){
		let lowercaseFruit = fruit[i].toLowerCase();
		if(lowercaseFruit.match(lowercaseStr)){
			results.push(fruit[i])
		}
	}
	return results;
}

//handles the event listener for search
//When someone is typing...
function searchHandler(e) {
	removeList();
	e.preventDefault();
	let pastList = [];
	let currentList = [];
	let searchResults = search(input.value);
	//if input value is not zero
	
	 if (input.value !== ""){
		//if input has changed, update list
		currentList = searchResults;
		if(pastList !== currentList){
			// console.log("list has changed");
			removeList();
			showSuggestions(searchResults);
			// console.log(searchResults);
		}
	return searchResults;
		}
	
	}


//creates and populates list when results are given from input
function showSuggestions(results) {
	//loop over results array
	for(let i =0; i< results.length; i++){
	//if value exists,
		if(results[i] != null){
		//create list with said value
			createLi(results[i])}
		}
	// TODO
}

function useSuggestion(e) {
	//change input based on clicked option
	let fruitID = e.target.id;
	input.value = fruitID
	removeList()
}

//listens for typing in the form
input.addEventListener('keyup', searchHandler);

//listens for a click on the suggested list
suggestions.addEventListener('click', useSuggestion);