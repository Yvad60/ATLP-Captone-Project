const blogApiURL = 'https://ivad-atlp-staging.herokuapp.com/api/v1/blogs'
const createArticleForm = document.getElementById('create-article-form')
createArticleForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(createArticleForm)
  const formEntries = Object.fromEntries(formData.entries())
  const formInputJSON = JSON.stringify(formEntries)
  await createArticle(formInputJSON)
})

const createArticle = async (data) => {
  const token = localStorage.getItem('adminToken')
  const response = await fetch(blogApiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'admin-login-token': token
    },
    body: data
  })
  const responseData = await response.json()
  if (responseData.status !== 201) {
    await Swal.fire({
      icon: 'error',
      title: 'article creation failed',
      text: responseData.results.error
    })
    return
  }
  await Swal.fire({
    icon: 'success',
    title: 'Created',
    text: 'Your article is created'
  })
  window.location.href = "../dashboard.html"
}