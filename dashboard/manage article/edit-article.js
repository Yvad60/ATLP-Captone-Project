const articleId = localStorage.getItem('articleId')
const blogApiURL = 'https://ivad-atlp-staging.herokuapp.com/api/v1/blogs'
const articleURL = `${blogApiURL}/${articleId}`
const editArticleForm = document.getElementById('edit-article-form')

const editArticle = async (articleURL) => {
  const response = await fetch(articleURL, {
    method: 'GET',
  })
  const responseData = await response.json()
  const article = responseData.results
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
        <button type="submit" class="red-btn">update article</button>
      </li>
    </ul>
  `
  editArticleForm.innerHTML = formInnerHtml
}

editArticle(articleURL)

editArticleForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(editArticleForm)
  for (let input of formData) {
    if (input[1] === '') {
      formData.delete(input[0])
    }
  }
  console.log(formData)
  console.log(typeof (formData));
  const formEntries = Object.fromEntries(formData.entries())
  console.log(formEntries)
  const formInputJSON = JSON.stringify(formEntries)
  console.log(formInputJSON)
  await sendArticleRequest(formInputJSON)
})

const sendArticleRequest = async (data) => {
  const token = localStorage.getItem('adminToken')
  const response = await fetch(articleURL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'admin-login-token': token
    },
    body: data
  })
  const responseData = await response.json()
  console.log(responseData)
  console.log(response);
  if (response.status !== 200) {
    await Swal.fire({
      icon: 'error',
      title: 'failed!',
      text: responseData.results.message
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