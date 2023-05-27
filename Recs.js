//** HALAL SPOT MATCHER PAGE JAVASCRIPT **//

// Declaring an object that will hold the amount of points allocated to each of the three categories shown on screen
let factorpoints = {
  spicy: 0,
  calories: 0,
  vegan: 0,
};

// querying the Recs.html document for all elements with the tag name button
let buttons = document.getElementsByTagName("button");

// Iterating through the HTML collection returned by the query above and adding a click event listener to each, which will then record the user's answers, and if the user follows the input instructions, then each of the three categories will be incremented based on the user's answers (after each answer, the buttons are disabled to prevent the user from trying to break the website)
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    if (button.id === "button-0") {
      let answer = prompt("Do you like your food spicy or not spicy? (Input 1 for spicy or 0 for not spicy");
      if (answer === "1") {
        factorpoints.spicy = 2;
      }
      else if (answer === "0") {
        factorpoints.spicy = 1;
      };
      button.setAttribute("disabled", true);
    }
    else if (button.id === "button-1") {
      let answer = prompt("Do you prefer lower-calorie food or higher-calorie food? (Input either lower or higher)");
      if (answer.toUpperCase() === "HIGHER") {
        factorpoints.calories = 2;
      }
      else if (answer.toUpperCase() === "LOWER") {
        factorpoints.calories = 1;
      };
      button.setAttribute("disabled", true);
    }
    else if (button.id === "button-2") {
      let answer = prompt("Do you eat meat or not? (Input either yes or no)");
      if (answer.toUpperCase() === "NO") {
        factorpoints.vegan = 2;
      }
      else if (answer.toUpperCase() === "YES") {
        factorpoints.vegan = 1;
      };
      button.setAttribute("disabled", true);
    };
    
    // If the user has answered all questions, then based on their answers, they will be given a recommendation, which will be based on the amount of points allocated to each of the properties in the factorpoints object declared all the way above
    if (buttons[0].hasAttribute("disabled") === true && buttons[1].hasAttribute("disabled") === true && buttons[2].hasAttribute("disabled") === true) {
      let recommendation;
      if (factorpoints.spicy === 2) {
        recommendation = "#spicy-";
      }
      else if (factorpoints.spicy === 1) {
        recommendation = "#notspicy-";
      };
      if (factorpoints.calories === 2) {
        recommendation += "highcalorie-";
      }
      else if (factorpoints.calories === 1) {
        recommendation += "lowcalorie-";
      };
      if (factorpoints.vegan === 2) {
        recommendation = "#vegan";
      }
      else if (factorpoints.vegan === 1) {
        recommendation += "meat";
      };
      if (factorpoints.spicy === 0 || factorpoints.calories === 0 || factorpoints.vegan === 0) {
        recommendation = "";
        document.querySelector("#norec").classList.toggle("hidden");
      }
      // The placeholdertext is hidden from the screen and the food spot + food recommendation is revealed to the user
      document.querySelector("#placeholdertext").classList.add("hidden");
      document.querySelector("#bodypic").style = "height: 280vh;";
      document.querySelector(recommendation).classList.toggle("hidden");
    };
  });
};
