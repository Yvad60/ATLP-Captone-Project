let articleForm = document.getElementById('new-article-form')
const apiURL = 'https://ivad-atlp-staging.herokuapp.com/api/v1/blogs'

articleForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  let titleInput = document.getElementById('title').value
  let authorInput = document.getElementById('author').value
  let contentInput = document.getElementById('content').value
  const response = await fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      title: titleInput,
      author: authorInput,
      content: contentInput
    }
  })
  window.location.href("../blog.html")
})

