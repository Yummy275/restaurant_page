const renderContact = () => {
  const content = document.getElementById('content');

  const name = document.createElement('p');
  name.textContent = "Humbertitos tacos";

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = "58029984";

  content.appendChild(name);
  content.appendChild(phoneNumber);
}

export{renderContact}
