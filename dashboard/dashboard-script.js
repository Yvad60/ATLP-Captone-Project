//handle articles
const articleDiv = document.getElementById('articles')
const blogApiURL = 'https://ivad-atlp-staging.herokuapp.com/api/v1/blogs'

const displayArticles = async () => {
  const response = await fetch(blogApiURL, {
    method: 'GET'
  })
  const responseData = await response.json()
  const allArticles = responseData.results
  console.log(allArticles)
  let articleInnerHTML = ``

  allArticles.forEach(article => {
    articleInnerHTML += `
    <div class="single-article" id='${article._id}'>
      <img src="./assets/blog-post-3.jpg" class="article-thumbnail">
      <div class="article-text">
        <h3>${article.title}</h3>
        <p class="date">${article.createdAt.substring(0, 10)}</p>
        <p>${article.content.substring(0, 150)}...<span class="read-link">Read more</span></p>
        <p class="author">By ${article.author}</p>
        <div class="manage-btn">
          <button class="edit-btn">edit</button>
          <button class="delete-btn"> delete</button>
        </div>
      </div>
    </div>
    `
  })
  articleDiv.innerHTML = articleInnerHTML
  const deleteButtons = document.querySelectorAll('.delete-btn')
  deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
      let articleId = button.parentNode.parentNode.parentNode.id
      Swal.fire({
        title: 'Do you want to delete article',
        showCancelButton: true,
        confirmButtonText: 'Delete',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await deleteArticle(articleId)
            location.reload()
          } catch (error) {
            alert('error occured')
          }
        }
      })
    })
  })
  const editButtons = document.querySelectorAll('.edit-btn')
  editButtons.forEach(button => {
    button.addEventListener('click', () => {
      localStorage.setItem('articleId', button.parentNode.parentNode.parentNode.id)
      window.location.href = './manage article/edit-article.html'
    })
  })
}

const deleteArticle = async (articleId) => {
  const deleteEndpoint = `${blogApiURL}/${articleId}`
  const response = await fetch(deleteEndpoint, {
    method: 'DELETE'
  })
  const responseData = await response.json()
  if (responseData.status != 200) {
    return await Swal.fire({
      icon: 'error',
      title: 'failed',
      text: `${responseData.results.error}`
    })
  }
  return await Swal.fire({
    icon: 'success',
    title: 'success',
    text: `article deleted successfully`
  })
}
displayArticles()
const messagesDiv = document.getElementById('messages')
const messageApiURL = 'https://ivad-atlp-staging.herokuapp.com/api/v1/messages'

// // const displayMessages = async () => {
// //   const response = await fetch(messageApiURL, {
// //     method: 'GET'
// //   })
// //   const allMessages = await response.json()
// //   console.log(allMessages)
// //   let messageInnerHTML = ``
// //   for (let message of allMessages) {
// //     messageInnerHTML += `
// //     <div class="single-message">
// //       <h4>${message.names}</h4>
// //       <h5>email:${message.email}</h5>
// //       <p>${message.message}</p>
// //     </div>
// //     `
// //   }
// //   messagesDiv.innerHTML = messageInnerHTML
// // }
// displayMessages()
