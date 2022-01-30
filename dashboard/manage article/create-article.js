const blogApiURL = 'https://ivad-atlp-staging.herokuapp.com/api/v1/blogs'
const createArticleForm = document.getElementById('create-article-form')
createArticleForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(createArticleForm)
  const formEntries = Object.fromEntries(formData.entries())
  const formInputJSON = JSON.stringify(formEntries)
  await createArticle(formInputJSON)
  Swal.fire({
    icon: 'success',
    title: 'Created',
    text: 'Your article is created'
  }, window.location.href = "../dashboard.html")
})

const createArticle = async (data) => {
  const response = await fetch(blogApiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
}