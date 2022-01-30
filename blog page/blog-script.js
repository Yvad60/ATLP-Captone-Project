let allArticles = document.getElementById('articles-list')
const apiURL = 'https://ivad-atlp-staging.herokuapp.com/api/v1/blogs'
const getArticles = async () => {
  const response = await fetch(apiURL)
  const data = await response.json()
  allArticles.innerHTML = ``
  for (let articles of data) {
    let newArticle = `<div class='card3' id='${articles._id}'>
    <div class='article-text card' >
    <h3 class="blog-title">${articles.title}</h3>
    <p>${articles.content}<span class="read-link" id="readMore">Read more</span></p>
                <p class="read-link">by ${articles.author}</p>
                <div class='manage'>
                  <button class="edit-btn">edit</button>
                  <button class="delete-btn">delete</button>
                </div>
    </div>
    </div>`
    allArticles.innerHTML += newArticle
  }
  const editBtn = document.querySelectorAll('.delete-btn')
  editBtn.forEach(button => {
    button.addEventListener('click', (e) => {
      console.log('hello');

    })
  })
}
getArticles()

const deleteArticle = async (deleteButton) => {
  postId = deleteButton.parentNode.parentNode.parentNode.id
  const deleteEndPoint = `${apiURL}/${postId}`
  const response = await fetch(deleteEndPoint, { method: 'DELETE' })
  location.reload()
}

