document.addEventListener('DOMContentLoaded', () => {
    const product = [
        { id: 1, image: 'images/imageAF.jpg', title: 'Air Force 1', price: 50.00 },
        { id: 2, image: 'images/imageAJ.jpg', title: 'Air Jordan', price: 40.00 },
        { id: 3, image: 'images/imageAM.jpg', title: 'Air Max', price: 70.00 },
        { id: 4, image: 'images/imageBL.jpg', title: 'Blaze', price: 30.00 },
        { id: 5, image: 'images/imageHD.jpg', title: 'High Dunk', price: 80.00 },
        { id: 6, image: 'images/imageLD.jpeg', title: 'Low Dunk', price: 90.00 }
    ];

    const root = document.getElementById('root');

    product.forEach(item => {
        const container = document.createElement('div');
        container.className = 'box';

        container.innerHTML = `
            <div class='img-box'>
                <img class='images' src='${item.image}' alt='${item.title}'>
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>$${item.price}.00</h2>
                <button onclick='addtocart(${item.id})'>Add To Cart</button>
            </div>
        `;

        root.appendChild(container);
    });

    function addtocart(id) {
        console.log(`Add to cart: ${id}`);
    }
});

let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart();
}