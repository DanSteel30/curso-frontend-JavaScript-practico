console.log("JS FUNCIONA")
const menuEmail= document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu () {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');

    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu () {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');

    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
};

function toggleProductDetail () {
    const isMobileClosed = mobileMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');

 // se el menu email esta abierto, este se cierra  al dar click a menuCarrito   
    if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive')
    }

//si el mobile esta abierto hay que cerrarlo
if (!isMobileClosed) {
    mobileMenu.classList.add('inactive')
}
 
    menuCarrito.classList.toggle('inactive');
   
};

//LISTA DE PRODUCTOS 

const productList = [];
productList.push ({
name: 'Bike', price: 120, image: 'https://images.pexels.com/photos/4542852/pexels-photo-4542852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push ({
    name: 'Pantalla', price: 330, image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });

productList.push ({
        name: 'Teclado', price: 50, image: 'https://images.pexels.com/photos/5185152/pexels-photo-5185152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        });

// lógica para hacer CICLO con los productos que se requieran poner
        
for (product of productList) { //acá se crea los elementos según las etiquetas del HTML
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement ('div');

            const productPrice = document.createElement ('p');
            productPrice.innerText = '$' + product.price;
            const productName = document.createElement ('p');
            productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);
    

    const productInfoFigure= document.createElement ('figure');
             const productImgCard = document.createElement ('img');
         productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

// lógica para ingresar-conectar un elemento dentro de otro, como si lo hiciera el HTML   

                     productInfoFigure.appendChild(productImgCard);
    
                productInfo.appendChild(productInfoDiv);
                productInfo.appendChild(productInfoFigure);

            productCard.append(productImg, productInfo);   // productInfoDiv.append(productPrice, productName) ESTO RESUME y agrupa el appendChild
    
        cardsContainer.appendChild(productCard); // Aca se creó un querySelector 
}

//IMPORTANTE tener en cuenta que esta Info puede luego ir en el backend y llamarse al DOM por una API rest, para mas adelante