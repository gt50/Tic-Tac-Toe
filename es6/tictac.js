function main() {

    const tiles = [$("#one1"), $("#one2"), $("#one3"), $("#two1"), $("#two2"), $("#two3"), $("#three1"), $("#three2"), $("#three3")];
    const letters = [$("#p1"), $("#p2"), $("#p3"), $("#p4"), $("#p5"), $("#p6"), $("#p7"), $("#p8"), $("#p9")];

    $("p").text("");


    for (let i = 0; i < tiles.length; i++) {


        $(tiles[i]).on("click", function() {

            const xWin = () => {
                if ($(letters[0]).text() === "X" && $(letters[1]).text() === "X" && $(letters[2]).text() === "X") {
                    alert("X Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[3]).text() === "X" && $(letters[4]).text() === "X" && $(letters[5]).text() === "X") {
                    alert("X Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[6]).text() === "X" && $(letters[7]).text() === "X" && $(letters[8]).text() === "X") {
                    alert("X Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[0]).text() === "X" && $(letters[3]).text() === "X" && $(letters[6]).text() === "X") {
                    alert("X Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[1]).text() === "X" && $(letters[4]).text() === "X" && $(letters[7]).text() === "X") {
                    alert("X Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[2]).text() === "X" && $(letters[5]).text() === "X" && $(letters[8]).text() === "X") {
                    alert("X Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[0]).text() === "X" && $(letters[4]).text() === "X" && $(letters[8]).text() === "X") {
                    alert("X Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[2]).text() === "X" && $(letters[4]).text() === "X" && $(letters[6]).text() === "X") {
                    alert("X Wins!");
                    $("p").text("");
                    counter = 0;
                }

            }

            const oWin = () => {
                if ($(letters[0]).text() === "O" && $(letters[1]).text() === "O" && $(letters[2]).text() === "O") {
                    alert("O Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[3]).text() === "O" && $(letters[4]).text() === "O" && $(letters[5]).text() === "O") {
                    alert("O Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[6]).text() === "O" && $(letters[7]).text() === "O" && $(letters[8]).text() === "O") {
                    alert("O Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[0]).text() === "O" && $(letters[3]).text() === "O" && $(letters[6]).text() === "O") {
                    alert("O Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[1]).text() === "O" && $(letters[4]).text() === "O" && $(letters[7]).text() === "O") {
                    alert("O Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[2]).text() === "O" && $(letters[5]).text() === "O" && $(letters[8]).text() === "O") {
                    alert("O Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[0]).text() === "O" && $(letters[4]).text() === "O" && $(letters[8]).text() === "O") {
                    alert("O Wins!");
                    $("p").text("");
                    counter = 0;
                }

                if ($(letters[2]).text() === "O" && $(letters[4]).text() === "O" && $(letters[6]).text() === "O") {
                    alert("O Wins!");
                    $("p").text("");
                    counter = 0;
                }

            }

            if ($(letters[i]).text() === "") {


                if (getPlayer() % 2 === 0) {
                    $(letters[i]).css("color", "red");
                    $(letters[i]).text("X");
                    xWin();
                } else {
                    $(letters[i]).css("color", "blue");
                    $(letters[i]).text("O");
                    oWin();
                }

            }

        });
    }

    let counter = -1;
    $("table").on("click", getPlayer());

    function getPlayer() {
        const nums = [1, 2, 1, 2, 1, 2, 1, 2, 1];

        // fixes issue for player number at start of game

        if (counter === -1) {
            $("#pp").text("");
        } else {
            $("#pp").text("Player " + nums[counter]);
        }
        counter++;
        if (counter === nums.length) {

            alert("draw");
            counter = 0;
            $("p").text("");
            $(letters[i]).text("");
            return counter;
        }
        return counter;
    }

}


main();
