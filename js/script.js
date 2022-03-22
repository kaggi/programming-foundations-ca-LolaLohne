//Question 1
var outOfStock = true;

if (outOfStock) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

//Question 2

for (var i = 15; i <= 25; i++) {
  if (i === 17 || i === 20) {
    console.log(i);
  }
}

//Question 3

var games = [
  {
    title: "Grand Theft Auto",
    rating: 4.48,
  },
  {
    title: "Portal 2",
    rating: 3.5,
  },
  {
    title: "Team Fortress",
    rating: null,
  },
  {
    title: "The Witcher",
    rating: 3.0,
  },
  {
    title: "The Elder Scrolls",
    rating: 2.9,
  },
];

var gameList = document.querySelector("ul");

for (var i = 0; i < games.length; i++) {
  if (games[i].rating !== null && games[i].rating < 3.5) {
    gameList.innerHTML +=
      "<li>" + games[i].title + ": " + games[i].rating + "</li>";
  }
}

//Question 4

function whatIDontLike(testValue) {
  if (typeof testValue === "string") {
    console.log("I don't like " + testValue);
  } else {
    console.log("Please send in a string");
  }
}

whatIDontLike("carrots");
whatIDontLike(4);
whatIDontLike(5.5);
whatIDontLike(true);
whatIDontLike(null);

//Question 5

function subtraction(value1, value2) {
  var minuend = parseFloat(value1);
  var subtrahend = parseFloat(value2);
  var errorMessage = "Invalid argument(s)";

  if (!isNaN(minuend) && !isNaN(subtrahend)) {
    return minuend - subtrahend;
  } else {
    return errorMessage;
  }
}

var subtractionResult = document.querySelector("#subtraction");

subtractionResult.innerHTML = subtraction(1, 42);
//subtractionResult.innerHTML = subtraction(200, 150);
//subtractionResult.innerHTML = subtraction(10, "50");
//subtractionResult.innerHTML = subtraction("100", "400");
//subtractionResult.innerHTML = subtraction("Ten", "One Hundred");
//subtractionResult.innerHTML = subtraction(null, 123);

//Question 6