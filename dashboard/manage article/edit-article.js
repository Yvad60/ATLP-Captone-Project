const articleId = localStorage.getItem('articleId')
const blogApiURL = 'https://ivad-atlp-staging.herokuapp.com/api/v1/blogs'
const articleURL = `${blogApiURL}/${articleId}`
const editArticleForm = document.getElementById('edit-article-form')

const editArticle = async (articleURL) => {
  const token = localStorage.getItem('adminToken')
  const response = await fetch(articleURL, {
    method: 'GET',
  })
  const article = await response.json()
  console.log(article)
  const formInnerHtml = `
  <ul>
      <li>
        <label>Title:</label>
        <input type="text" id="title" name="title" value="${article.title}">
      </li>
      <li>
        <label>Author:</label>
        <input type="text" id="author" name="author" value="${article.author}">
      </li>
      <li>
        <label>Content:</label>
        <textarea id="content" name="content">${article.content}</textarea>
      </li>
      <li class="button">
        <button type="submit" class="red-btn">Create article</button>
      </li>
    </ul>
  `
  editArticleForm.innerHTML = formInnerHtml
}

editArticle(articleURL)

editArticleForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(editArticleForm)
  const formEntries = Object.fromEntries(formData.entries())
  const formInputJSON = JSON.stringify(formEntries)
  await sendArticleRequest(formInputJSON)
})

const sendArticleRequest = async (data) => {
  const response = await fetch(articleURL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      headers: {
        'admin-login-token': token
      }
    },
    body: data
  })
  const responseData = response.json()
  if (responseData !== 200) {
    await Swal.fire({
      icon: 'error',
      title: 'updating article failed',
      text: responseData.results.error
    })
    return
  }
  await Swal.fire({
    icon: 'success',
    title: 'updated',
    text: 'Your article is updated'
  })
  window.location.href = "../dashboard.html"
}