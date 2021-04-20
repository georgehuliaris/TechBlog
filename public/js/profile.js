const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#Blogpost-name').value.trim();
    const needed_funding = document.querySelector('#Blogpost-funding').value.trim();
    const description = document.querySelector('#Blogpost-desc').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/Blogposts`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create Blogpost');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/Blogposts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete Blogpost');
      }
    }
  };
  
  document
    .querySelector('.new-Blogpost-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.Blogpost-list')
    .addEventListener('click', delButtonHandler);
  