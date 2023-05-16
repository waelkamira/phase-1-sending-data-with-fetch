async function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();

    // Handle successful response
    if (response.ok) {
      const newId = data.id;
      appendIdToDOM(newId);
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    appendErrorToDOM(error.message);
  }
}

function appendIdToDOM(id) {
  const idElement = document.createElement('p');
  idElement.textContent = `New ID: ${id}`;
  document.body.appendChild(idElement);
}

function appendErrorToDOM(errorMessage) {
  const errorElement = document.createElement('p');
  errorElement.textContent = `Error: ${errorMessage}`;
  document.body.appendChild(errorElement);
}
