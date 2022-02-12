async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value;
  const post_info = document.querySelector('input[name="post_info"]').value.trim();
  const post_url = document.querySelector('input[name="post_url"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_info,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
