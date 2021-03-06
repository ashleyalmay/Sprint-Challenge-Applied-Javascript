// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function someCard(cardArticle) {
    //element
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('span')

    //order
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imageContainer)
    imageContainer.appendChild(image)
    author.appendChild(name)

    // div call names

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imageContainer.classList.add('img-container')

    //bring in the data in
    headline.textContent = `${cardArticle.headline}`
    image.src = cardArticle.authorPhoto
    name.textContent = `By: ${cardArticle.authorName}`

    return card;
}
const cards = document.querySelector('.cards-container')
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((response) => {

        let x = []
        let j = x.concat(response.data.articles.javascript)
        j = j.concat(response.data.articles.bootstrap)
        j = j.concat(response.data.articles.technology)
        j = j.concat(response.data.articles.jquery)
        j = j.concat(response.data.articles.node)
        j.forEach(r => {
            cards.appendChild(someCard(r))
        })
    })
    .catch(error => console.log(error));