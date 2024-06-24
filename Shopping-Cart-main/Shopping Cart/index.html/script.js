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

var cart =[];

function addtocart(a){
    cart.push({...categories[a]})
    displaycart();
}

function displaycart(a){
    let j = 0
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your Cart Is Empty";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((item)=>)
        {
            var {image, title, price} = items;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${price}.00</h2>
              "<i class='fa-solid fa-trash' onclinc='delElement("+ (j++) +")'></i></div>`
            );
        }
        } .join('');
    }
}
