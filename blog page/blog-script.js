console.log('hi hello');
let allArticles = document.getElementById('articles-list')

const connectToAPI = async () => {
  const response = await fetch('https://ivad-atlp-staging.herokuapp.com/api/v1/blogs')
  const data = await response.json()
  console.log(data)
  for (let articles of data) {
    let article = document.createElement('div')
    article.classList.add('card3')

    let imageCard = document.createElement('div')
    imageCard.classList.add('image-container')

    let articleThumbnail = document.createElement('img')
    articleThumbnail.setAttribute('src', './assets/phone.jpg')
    articleThumbnail.classList.add('card-img1')

    let articleLabel = document.createElement('p')
    articleLabel.classList.add('label')
    articleLabel.textContent = articles.author
    imageCard.append(articleLabel, articleThumbnail)

    let articleText = document.createElement('div')
    articleText.classList.add('article-text', 'card')

    let articleTitle = document.createElement('h3')
    articleTitle.classList.add('blog-title')
    articleTitle.textContent = articles.title
    articleText.append(articleTitle)

    let readMoreSpan = document.createElement('span')
    readMoreSpan.classList.add('read-link')
    readMoreSpan.textContent = 'Read More'
    let articleSnipet = document.createElement('p')
    articleSnipet.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo ac odio iaculis neque. Porta at praesent
                  diam vitae consectetur id eu maecenas. Sagittis
                  nullam quis et sem augue`

    let author = document.createElement('p')
    author.classList.add('read-link')
    author.textContent = `By ${articles.author}`
    articleSnipet.append(readMoreSpan)
    articleText.append(articleSnipet)
    articleText.append(author)
    article.append(imageCard)
    article.append(articleText)

    allArticles.appendChild(article)
  }
}

connectToAPI()