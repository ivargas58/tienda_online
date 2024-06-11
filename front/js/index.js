const $ = document;
const containerproductos = $.querySelector('#containerproductos');

const rendercards = (array) => {
    if (!Array.isArray(array)) {
        console.error('Expected an array but got:', array);
        return;
    }

    // Clear the container once before rendering the cards
    containerproductos.innerHTML = '';

    array.forEach(item => {
        const { title, image, description, price } = item;
        containerproductos.innerHTML += `
            <div class="card">
                <h3 class="cardtitle">${title}</h3>
                <img class="cardimg" src="${image}" alt="">
                <p class="card-desc">${description}</p>
                <strong class="cardprice">$${price}</strong>
                <button class="cardbtn">Agregar al carrito</button>
            </div>`;
    });
}

fetch('http://localhost:3000/api/productos')
    .then((res) => res.json())
    .then((data) => rendercards(data))
    .catch((err) => console.log(err));
