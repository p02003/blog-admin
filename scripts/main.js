const blogUrl = "https://p02003.github.io/blog-data/data.json";

fetch(blogUrl)
  .then(response => response.json())
  .then(data => {
    const posts = data.devBlogEntries;
    displayPosts(posts);
  })
  .catch(err => console.error("Fetch Error:", err));

function displayPosts(posts) {
  const container = document.getElementById("blogPosts");
  container.innerHTML = "";
  posts.forEach(post => {
    container.innerHTML += `
      <div class="mb-4 border-bottom">
        <h3>${post.title}</h3>
        <p><strong>Date:</strong> ${post.publishDate}</p>
        <p>${post.content}</p>
        <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
      </div>
    `;
  });
}

function addPost() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const content = document.getElementById("content").value;
  const tags = document.getElementById("tags").value.split(",");

  const newPost = {
    title,
    publishDate: date,
    content,
    tags
  };

  const container = document.getElementById("blogPosts");
  container.innerHTML += `
    <div class="mb-4 border-bottom">
      <h3>${newPost.title}</h3>
      <p><strong>Date:</strong> ${newPost.publishDate}</p>
      <p>${newPost.content}</p>
      <p><strong>Tags:</strong> ${newPost.tags.join(", ")}</p>
    </div>
  `;

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("content").value = "";
  document.getElementById("tags").value = "";
}
