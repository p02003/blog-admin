const blogList = document.getElementById('blogList');
const blogForm = document.getElementById('blogForm');

// ✅ Your JSON file URL
const blogDataURL = 'https://p02003.github.io/blog-data/blogdata.json';

// Fetch & display blog posts
fetch(blogDataURL)
  .then(res => res.json())
  .then(data => {
    data.forEach(post => {
      const div = document.createElement('div');
      div.className = "border p-3 mb-3 rounded";
      div.innerHTML = `
        <h3>${post.title}</h3>
        <small>${post.date}</small>
        <p>${post.content}</p>
        <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
      `;
      blogList.appendChild(div);
    });
  });

// Form submit (temporary add)
blogForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const content = document.getElementById('content').value;
  const tags = document.getElementById('tags').value.split(',');

  const div = document.createElement('div');
  div.className = "border p-3 mb-3 rounded bg-light";
  div.innerHTML = `
    <h3>${title}</h3>
    <small>${date}</small>
    <p>${content}</p>
    <p><strong>Tags:</strong> ${tags.join(', ')}</p>
  `;
  blogList.appendChild(div);
  blogForm.reset();
});
