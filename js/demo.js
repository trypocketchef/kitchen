//permuatation values for GET request
var eggs = "eggs";
var eggsApple = "eggs,%20apple";
var eggsBroccoli = "eggs,%20broccoli";
var eggsChicken = "eggs,%20chicken";
var eggsAppleBroccoli = "eggs,%20apple,%20broccoli";
var eggsAppleChicken = "eggs,%20apple,%20chicken";
var eggsChickenBroccoli = "eggs,%20broccoli,%20chicken";
var apples = "apple";
var appleBroccoli = "apple,%20broccoli";
var appleChicken = "apple,%20chicken";
var appleBroccoliChicken = "apple,%20broccoli,%20chicken";
var broccoli = "broccoli";
var broccoliChicken = "broccoli,%20chicken";
var chicken = "chicken";
var eggsAppleBroccoliChicken = "eggs,%20apple,%20broccoli,%20chicken";

//empty array for adding in ingredients
var ingredientsArray = [];

function ocurrence(array) {
    var result = {};
    if (array instanceof Array) { // Check if input is array.
        array.forEach(function (v, i) {
            if (!result[v]) { // Initial object property creation.
                result[v] = [i]; // Create an array for that property.
            } else { // Same occurrences found.
                result[v].push(i); // Fill the array.
            }
        });
    }
    return result;
}

function prepareContent(item) {
    if (ingredientsArray.includes(item) && ingredientsArray.length >1) {
        console.log(ingredientsArray);
        removeItem(item);
        console.log(ingredientsArray);
        switchEndpoint();
        console.log("removed item");
    }
    else if (ingredientsArray.includes(item) && ingredientsArray.length == 1) {
        console.log(ingredientsArray);
        emptyContent();
        console.log("removed content");
        removeItem(item);
        console.log(ingredientsArray);
    }
    else {
        ingredientsArray.push(item);
        console.log(ingredientsArray);
        switchEndpoint();
        console.log("added item");
    }
}

function removeItem(elem) {
    var index = ingredientsArray.indexOf(elem);
    if (index > -1) {
        ingredientsArray.splice(index,1);
    }
} 

function removeColor(elem) {
    var index = colorArray.indexOf(elem);
    if (index > -1) {
        colorArray.splice(index,1);
    }
} 

var colorArray = [];
function buttonState(id) {
    console.log(id, "Button Id");
    var property = document.getElementById(id);
    console.log(colorArray.includes(id));
    if (colorArray.includes(id)) {
        property.style.backgroundColor = "#ffffff";
        property.style.color = "#d0d6d9";
        console.log(colorArray);
        removeColor(id);
        console.log(colorArray, "color removed");
    }
    else {
        property.style.backgroundColor = "#29c59e";
        property.style.color = "#ffffff";
        console.log(colorArray);
        colorArray.push(id);
        console.log(colorArray, "color changed");
        console.log(colorArray);
    }
}

//count occurences of a value in array
function ocurrence(array) {
    var result = {};
    if (array instanceof Array) { // Check if input is array.
        array.forEach(function (v, i) {
            if (!result[v]) { // Initial object property creation.
                result[v] = [i]; // Create an array for that property.
            } else { // Same occurrences found.
                result[v].push(i); // Fill the array.
            }
        });
    }
    return result;
};

function switchEndpoint() {
    switch (true) {
        case ingredientsArray.indexOf("eggs")>-1 && ingredientsArray.indexOf("apples")>-1 && ingredientsArray.indexOf("broccoli")>-1 && ingredientsArray.indexOf("chicken")>-1:
            loadContent(eggsAppleBroccoliChicken);
            break;
        case ingredientsArray.indexOf("eggs")>-1 && ingredientsArray.indexOf("apples")>-1 && ingredientsArray.indexOf("broccoli")>-1:
            loadContent(eggsAppleBroccoli);
            break;
        case ingredientsArray.indexOf("eggs")>-1 && ingredientsArray.indexOf("apples")>-1 && ingredientsArray.indexOf("chicken")>-1:
            loadContent(eggsAppleChicken);
            break;
        case ingredientsArray.indexOf("eggs")>-1 && ingredientsArray.indexOf("chicken")>-1 && ingredientsArray.indexOf("broccoli")>-1:
            loadContent(eggsChickenBroccoli);
            break;
        case ingredientsArray.indexOf("apples")>-1 && ingredientsArray.indexOf("broccoli")>-1 && ingredientsArray.indexOf("chicken")>-1:
            loadContent(appleBroccoliChicken);
            break;
        case ingredientsArray.indexOf("eggs")>-1 && ingredientsArray.indexOf("apples") >-1: 
            loadContent(eggsApple);
            break;
        case ingredientsArray.indexOf("eggs")>-1 && ingredientsArray.indexOf("broccoli")>-1: 
            loadContent(eggsBroccoli);
            break;
        case ingredientsArray.indexOf("eggs")>-1 && ingredientsArray.indexOf("chicken")>-1:
            loadContent(eggsChicken);
            break;
        case ingredientsArray.indexOf("broccoli")>-1 && ingredientsArray.indexOf("chicken")>-1:
            loadContent(broccoliChicken);
            break;
        case ingredientsArray.indexOf("apples")>-1 && ingredientsArray.indexOf("broccoli")>-1:
            loadContent(appleBroccoli);
            break;
        case ingredientsArray.indexOf("apples")>-1 && ingredientsArray.indexOf("chicken")>-1:
            loadContent(appleChicken);
            break;
        case ingredientsArray.indexOf("eggs")>-1:
            loadContent(eggs);
            break;
        case ingredientsArray.indexOf("broccoli")>-1:
            loadContent(broccoli);
            break;
        case ingredientsArray.indexOf("chicken")>-1:
            loadContent(chicken);
            break;
        case ingredientsArray.indexOf("apples")>-1:
            loadContent(apples);
            break;
    }
};

function emptyContent() {
    document.getElementById("card1mealrecipe").innerHTML = "";
    document.getElementById("card2mealrecipe").innerHTML = "";
    document.getElementById("card3mealrecipe").innerHTML = "";
    document.getElementById("card1ingredients").innerHTML = "";
    document.getElementById("card2ingredients").innerHTML = "";
    document.getElementById("card3ingredients").innerHTML = "";
    document.getElementById("card3ingredients").innerHTML = "";
    document.getElementById("card1kcal").innerHTML = "";
    document.getElementById("card2kcal").innerHTML = "";
    document.getElementById("card3kcal").innerHTML = "";
    document.getElementById("card1preptime").innerHTML = "";
    document.getElementById("card2preptime").innerHTML = "";
    document.getElementById("card3preptime").innerHTML = "";
    document.getElementById('card1image').src = "";
    document.getElementById("card2image").src = "";
    document.getElementById("card3image").src = "";
};

function loadContent(endpoint) {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            for (var items in json) {
                mealrecipe = json[items].mealtitle;
                ingredients = json[items].mealingredients;
                kcal = json[items].mealkcalserving;
                preptime = json[items].mealprepdurationmins;
                document.getElementById("card1mealrecipe").innerHTML = json[0].mealtitle;
                document.getElementById("card2mealrecipe").innerHTML = json[1].mealtitle;
                document.getElementById("card3mealrecipe").innerHTML = json[2].mealtitle;
                document.getElementById("card1ingredients").innerHTML = "Ingredients: " + json[0].mealingredients;
                document.getElementById("card2ingredients").innerHTML = "Ingredients: " + json[1].mealingredients;
                document.getElementById("card3ingredients").innerHTML = "Ingredients: " + json[2].mealingredients;
                document.getElementById("card1kcal").innerHTML = "Calories: " + json[0].mealkcalserving + " kcal";
                document.getElementById("card2kcal").innerHTML = "Calories: " + json[1].mealkcalserving + " kcal";
                document.getElementById("card3kcal").innerHTML = "Calories: " + json[2].mealkcalserving + " kcal";
                document.getElementById("card1preptime").innerHTML = "Prep Duration: " + json[0].mealprepdurationmins + " mins";
                document.getElementById("card2preptime").innerHTML = "Prep Duration: " + json[1].mealprepdurationmins + " mins";
                document.getElementById("card3preptime").innerHTML = "Prep Duration: " + json[2].mealprepdurationmins + " mins";
                document.getElementById('card1image').src = json[0].mealimageurlhighresifpossible;
                document.getElementById("card2image").src = json[1].mealimageurlhighresifpossible;
                document.getElementById("card3image").src = json[2].mealimageurlhighresifpossible;
            }
            console.log(json[0].mealtitle);
        }
    };
    xhttp.open("GET", "https://sheetlabs.com/POCK/getRecipes?mealingredients=" + endpoint, true);
    console.log("https://sheetlabs.com/POCK/getRecipes?mealingredients=" + endpoint);
    xhttp.send();
  };