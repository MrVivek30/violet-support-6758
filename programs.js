const postsList = document.querySelector(".post-list")
const url = "http://localhost:3000/gym";
let output = ""
const renderPosts = (posts) => {
    posts.forEach(post => {
        output += `
        <div class="card-body" data-id=${post.id}>
        <img src=${post.img} class="card-img-top" alt="...">
        <p class="card-category">${post.category}</p>

         <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.price}</p>
          <button  class="btn btn-primary">Add to Bad</button>
          
      </div>
    `
            ;
    });
    postsList.innerHTML = output;
}
fetch(url)
    .then(res => res.json())
    .then(data =>renderPosts(data))