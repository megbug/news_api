/*Anforderungen:

Suche über ein Schlüsselwort - check
Einstellung der Sprache - check
Weiterleitung auf den Original-Artikel - check
Gestalte ein ansprechendes Design

*/


// Variablen für innerHTML
let page = document.querySelector('#showArticle');


// Variablen für fetch
let inputSearch = document.querySelector('#searchbar');
let lang = document.querySelector('input[name="language"]:checked')

search = () => {
    page.innerHTML = "";
    lang = document.querySelector('input[name="language"]:checked').value
    inputSearch = document.querySelector('#searchbar').value

    fetch(`https://newsapi.org/v2/everything?q=${inputSearch}&language=${lang}&from=2023-02-03&sortBy=popularity&apiKey=d4affa099d884b18bf71a901b0e238ad`)
        .then(response => response.json())
        .then(json => {
            json.articles.forEach(element => {
                page.innerHTML += `<img src='${element.urlToImage}'><p>${element.author}</p><p>${element.title}</p><a href='${element.url}'>${element.description}</a>`;
            });
        })

}

// ==============================================================


// let imgSec = document.querySelector('#img');
// let authorSec = document.querySelector('#author');
// let titleSec = document.querySelector('#title');
// let descriptionSec = document.querySelector('#description');

// search = () => {
//     lang = document.querySelector('input[name="language"]:checked').value

//     fetch(`https://newsapi.org/v2/everything?q=${inputSearch.value}&language=${lang}&from=2023-03-03&sortBy=popularity&apiKey=d4affa099d884b18bf71a901b0e238ad`)
//         .then(response => response.json())
//         .then(json => {
//             // console.log(json.articles);
//             imgSec.innerHTML = `<img src='${json.articles[0].urlToImage}'>`;
//             authorSec.innerHTML = json.articles[0].author;
//             titleSec.innerHTML = json.articles[0].title;
//             description.innerHTML = `<a href='${json.articles[0].url}'>${json.articles[0].description}</a>`;
//         })
// }

