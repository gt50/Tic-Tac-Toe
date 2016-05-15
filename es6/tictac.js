function main() {

const tiles = [$("#1"), $("#2"), $("#3"), $("#4"), $("#5"), $("#6"), $("#7"), $("#8"), $("#9")];


for (let i = 0; i < tiles.length; i++) {

$(tiles[i]).on("click", function() {

  const redWin = () => {
 if ($(tiles[0]).css("background-color") === "rgb(255, 0, 0)" && ($(tiles[1]).css("background-color")) === "rgb(255, 0, 0)" && ($(tiles[2]).css("background-color") === "rgb(255, 0, 0)")) {
   alert("red wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
   counter = 0;

}

 if ($(tiles[3]).css("background-color") === "rgb(255, 0, 0)" && ($(tiles[4]).css("background-color")) === "rgb(255, 0, 0)" && ($(tiles[5]).css("background-color") === "rgb(255, 0, 0)")) {
   alert("red wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
  counter = 0;

}

 if ($(tiles[6]).css("background-color") === "rgb(255, 0, 0)" && ($(tiles[7]).css("background-color")) === "rgb(255, 0, 0)" && ($(tiles[8]).css("background-color") === "rgb(255, 0, 0)")) {
   alert("red wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
   counter = 0;

}

 if ($(tiles[0]).css("background-color") === "rgb(255, 0, 0)" && ($(tiles[3]).css("background-color")) === "rgb(255, 0, 0)" && ($(tiles[6]).css("background-color") === "rgb(255, 0, 0)")) {
   alert("red wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
  counter = 0;

}

 if ($(tiles[1]).css("background-color") === "rgb(255, 0, 0)" && ($(tiles[4]).css("background-color")) === "rgb(255, 0, 0)" && ($(tiles[7]).css("background-color") === "rgb(255, 0, 0)")) {
   alert("red wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
   counter = 0;
 
}

 if ($(tiles[2]).css("background-color") === "rgb(255, 0, 0)" && ($(tiles[5]).css("background-color")) === "rgb(255, 0, 0)" && ($(tiles[8]).css("background-color") === "rgb(255, 0, 0)")) {
   alert("red wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
   counter = 0;

}

 if ($(tiles[0]).css("background-color") === "rgb(255, 0, 0)" && ($(tiles[4]).css("background-color")) === "rgb(255, 0, 0)" && ($(tiles[8]).css("background-color") === "rgb(255, 0, 0)")) {
   alert("red wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
    counter = 0;

}

 if ($(tiles[2]).css("background-color") === "rgb(255, 0, 0)" && ($(tiles[4]).css("background-color")) === "rgb(255, 0, 0)" && ($(tiles[6]).css("background-color") === "rgb(255, 0, 0)")) {
   alert("red wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
    counter = 0;

}


};

const blueWin = () => {
 if ($(tiles[0]).css("background-color") === "rgb(0, 0, 255)" && ($(tiles[1]).css("background-color")) === "rgb(0, 0, 255)" && ($(tiles[2]).css("background-color") === "rgb(0, 0, 255)")) {
   alert("blue wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
   counter = 0;

}

 if ($(tiles[3]).css("background-color") === "rgb(0, 0, 255)" && ($(tiles[4]).css("background-color")) === "rgb(0, 0, 255)" && ($(tiles[5]).css("background-color") === "rgb(0, 0, 255)")) {
   alert("blue wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
    counter = 0;

}

 if ($(tiles[6]).css("background-color") === "rgb(, 0, 255)" && ($(tiles[7]).css("background-color")) === "rgb(0, 0, 255)" && ($(tiles[8]).css("background-color") === "rgb(0, 0, 255)")) {
   alert("blue wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
    counter = 0;

}

 if ($(tiles[0]).css("background-color") === "rgb(0, 0, 255)" && ($(tiles[3]).css("background-color")) === "rgb(0, 0, 255)" && ($(tiles[6]).css("background-color") === "rgb(0, 0, 255)")) {
   alert("blue wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
    counter = 0;

}

 if ($(tiles[1]).css("background-color") === "rgb(0, 0, 255)" && ($(tiles[4]).css("background-color")) === "rgb(0, 0, 255)" && ($(tiles[7]).css("background-color") === "rgb(0, 0, 255)")) {
   alert("blue wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
   counter = 0;

}

 if ($(tiles[2]).css("background-color") === "rgb(0, 0, 255)" && ($(tiles[5]).css("background-color")) === "rgb(0, 0, 255)" && ($(tiles[8]).css("background-color") === "rgb(0, 0, 255)")) {
   alert("blue wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
   counter = 0;

}

 if ($(tiles[0]).css("background-color") === "rgb(0, 0, 255)" && ($(tiles[4]).css("background-color")) === "rgb(0, 0, 255)" && ($(tiles[8]).css("background-color") === "rgb(0, 0, 255)")) {
   alert("blue wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
   counter = 0;

}

 if ($(tiles[2]).css("background-color") === "rgb(0, 0, 255)" && ($(tiles[4]).css("background-color")) === "rgb(0, 0, 255)" && ($(tiles[6]).css("background-color") === "rgb(0, 0, 255)")) {
   alert("blue wins!");
   $("div").css("background-color", "white");
   $(tiles[i]).css("background-color", "rgb(255, 255, 255)");
    counter = 0;
}

};

	if ($(tiles[i]).css("background-color") === "rgb(255, 255, 255)") {

if (getPlayer() % 2 === 0) {
  
 $(tiles[i]).css("background-color", "red");
 redWin();
 
 }
 
  else {
   $(tiles[i]).css("background-color", "blue");
   blueWin();
   
   }
}
});

}

let counter = -1;

$("div").on("click", getPlayer());


function getPlayer() {

  // error somewhere in here, can tell due to player 1 showing up 1st 2 turns 2nd round


const nums = [1, 2, 1, 2, 1, 2, 1, 2, 1];

  $("p").text("Player " + nums[counter]);
  counter++;
  if (counter === nums.length) {
  counter = 0;
   alert("draw!");
  $("div").css("background-color", "white");
  $(tiles[i]).css("background-color", "white");
  return counter;
  }
return counter; 
}

}


main();