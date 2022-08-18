function updateUI(GivenQuote) {
    let QuoteHeading1 = document.querySelector("#RandomQuote");
    QuoteHeading1.innerHTML = `Quote: ` + `${GivenQuote.Quote}`;
}

function updateUI2(GivenQuote2) {
    let QuoteHeading2 = document.querySelector("#RandomQuote2");
    QuoteHeading2.innerHTML = `Quote: ` + `${GivenQuote2.Quote}`;
}

function updateUI3(GivenQuote3) {
    let QuoteHeading3 = document.querySelector("#RandomQuote3");
    QuoteHeading3.innerHTML = `Quote: ` + `${GivenQuote3.Quote}`;
}

function updateUI4(GivenQuote4) {
    let QuoteHeading4 = document.querySelector("#RandomQuote4");
    QuoteHeading4.innerHTML = `Quote: ` + `${GivenQuote4.Quote}`;
}

function loadTextForQuotes() {
    //load API url as a const
    const url = `https://zenquotes.io/api/quotes`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response) {
            return response.json()
        })

        .then(function (jsonData) {
            console.log(jsonData);

            let x = Math.random() * jsonData.length;
            let y = Math.floor(x);

            let GivenQuote = {
                Quote: jsonData[y].q
            };

            console.log(GivenQuote);

            //call update UI function
            updateUI(GivenQuote);
        });
}

function loadTextForQuotes2() {
    //load API url as a const
    const url = `https://api.quotable.io/random`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response) {
            return response.json()
        })

        .then(function (jsonData) {
            console.log(jsonData);

            let GivenQuote2 = {
                Quote: jsonData.content
            };

            console.log(GivenQuote2);

            //call update UI function
            updateUI2(GivenQuote2);
        });
}

function loadTextForQuotes3() {
    //load API url as a const
    const url = `https://type.fit/api/quotes`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response) {
            return response.json()
        })

        .then(function (jsonData) {
            console.log(jsonData);

            let x = Math.random() * jsonData.length;
            let y = Math.floor(x);

            let GivenQuote3 = {
                Quote: jsonData[y].text
            };

            console.log(GivenQuote3);

            //call update UI function
            updateUI3(GivenQuote3);
        });
}

function loadTextForQuotes4() {
    //load API url as a const
    const url = `https://api.themotivate365.com/stoic-quote`;

    fetch(url)
        //use a callback function when the async code is done
        .then(function (response) {
            return response.json()
        })

        .then(function (jsonData) {
            console.log(jsonData);

            let GivenQuote4 = {
                Quote: jsonData.data.quote
            };

            console.log(GivenQuote4);

            //call update UI function
            updateUI4(GivenQuote4);
        });
}


// function RandomNeko() {
//     //load API url as a const
//     const url = `https://nekos.best/api/v2/neko`;

//     fetch(url)
//         //use a callback function when the async code is done
//         .then(function (response) {
//             return response.json()
//         })

//         .then(function (jsonData) {
//             console.log(jsonData);
//             let GivenNeko = {
//                 NekoImage: jsonData.results[0].url
//             };

//             console.log(GivenNeko);

//             //call update UI function
//             updateUI2(GivenNeko);
//         });
// }

let randomBtn = document.querySelector("#random_btn");
randomBtn.onclick = function (event) {
    //prevent default form behavior
    event.preventDefault();

    loadTextForQuotes()
}

let randomBtn2 = document.querySelector("#random_btn2");
randomBtn2.onclick = function (event) {
    //prevent default form behavior
    event.preventDefault();

    loadTextForQuotes2()
}

let randomBtn3 = document.querySelector("#random_btn3");
randomBtn3.onclick = function (event) {
    //prevent default form behavior
    event.preventDefault();

    loadTextForQuotes3()
}

let randomBtn4 = document.querySelector("#random_btn4");
randomBtn4.onclick = function (event) {
    //prevent default form behavior
    event.preventDefault();

    loadTextForQuotes4()
}