const renderMenu = () => {
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = "Best Bread in Here!"

    const image = document.createElement('IMG');
    image.src = "https://www.theflavorbender.com/wp-content/uploads/2019/02/Homemade-Bread-Featured-1.jpg";

    const words = document.createElement('p');
    words.textContent = "This is the best bread you will ever find!"

    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(words);
}

export {renderMenu}
