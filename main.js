console.log("JS FUNCIONA")
const menuEmail= document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.carrito-compra');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('.product-detail2');
const closeProductDetailContainer = document.querySelector('.product-detail2-close');

//Escuchadores AddEventListener

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleProductDetail);
closeProductDetailContainer.addEventListener ('click', closeProductDetailAside)

function toggleDesktopMenu () {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');

    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactive')
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive')
   }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu () {
    
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');

    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactive');
    }
         closeProductDetailAside(); //esta llama la función que cierra el Produc Detail Aside

    mobileMenu.classList.toggle('inactive'); 

};


function toggleProductDetail () {
   // si el menu email esta abierto, este se cierra  al dar click a menuCarrito 
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive')
    }
//si el mobile esta abierto, este se cierra  al dar click a menuCarrito 
    const isMobileClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileClosed) {
    mobileMenu.classList.add('inactive')
}
 // si el Product Detail Aside esta abierto, este se cierra  al dar click a menuCarrito  
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive')
   }

    menuCarrito.classList.toggle('inactive');
   
};

//Es mas sencilla la lógica de la funcion con cerrar y abrir en vez de toggle. 

function openProductDetailAside () {
    productDetailContainer.classList.remove('inactive') //remueve inactivo y activa la clase
    console.log("abriste ventana Product Detail")
    desktopMenu.classList.add('inactive')
    menuCarrito.classList.add('inactive')
}

function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive')
    console.log("cerrar ventana Product Detail")
      
}

//LISTA DE PRODUCTOS 

const productList = [];
    productList.push ({
        name: 'Bicicleta', price: 120, image: 'https://images.pexels.com/photos/4542852/pexels-photo-4542852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        });

    productList.push ({
    name: 'Pantalla', price: 530, image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });

    productList.push ({
        name: 'Teclado', price: 15, image: 'https://images.pexels.com/photos/5185152/pexels-photo-5185152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        });

    productList.push ({
        name: 'Escritorio', price: 50, image: 'https://img.freepik.com/foto-gratis/diseno-interior-minimalista-oficina-casa-planta-higuera-hoja-violin_53876-128660.jpg?w=740&t=st=1684778520~exp=1684779120~hmac=cd5403fdbaafa00061fd46e02f95c88452710ae34cb8cbe610e49ca114834ec0'
        });
            
    productList.push ({
        name: 'Camiseta', price: 9, image: 'https://img.freepik.com/foto-gratis/modelo-camiseta-negra-aislada-vista-frontal_125540-1073.jpg?w=740&t=st=1684778668~exp=1684779268~hmac=7d6dbc12d7f4c9ceb17b2388cc0dd09276dc4c36c89ce6055bbcbf9b35e51338'
        });
            
    productList.push ({
        name: 'Mando Ps5', price: 90, image: 'https://img.freepik.com/foto-gratis/vista-frontal-padre-e-hijo-jugando-controladores-close-up_23-2148301667.jpg?w=740&t=st=1684778797~exp=1684779397~hmac=a8a870345a16120b4320980083c2bd1a2e8e86ad88c228f2f2210146bc02fae7'
        });

    productList.push ({
        name: 'Armario', price: 283, image: 'https://img.freepik.com/fotos-premium/interior-moderno-representacion-3d-ilustracion-3d_42637-1511.jpg?w=740'
        });
                        
    productList.push ({
        name: 'Patineta', price: 195, image: 'https://img.freepik.com/psd-gratis/scooter-triciclo-icono-aislado-3d-render-ilustracion_47987-12348.jpg?w=740&t=st=1684811969~exp=1684812569~hmac=b08b13e60dbfdaf49899e7d89924269801a17ca4ad471dc9afe707991ca084e1'
        });
                        
    productList.push ({
        name: 'Carrito Juguete', price: 55, image: 'https://img.freepik.com/fotos-premium/juguetes-plastico-colores-brillantes-ninos-al-aire-libre-dia-soleado-verano-camion-cesta-carretilla-compras_127089-3208.jpg?w=740'
        });

    productList.push ({
        name: 'Falda', price: 35, image: 'https://img.freepik.com/foto-gratis/retrato-joven-hermosa-nina-sonriente-vestido-rosa-claro-moda-verano-mujer-sexy-despreocupada-posando-modelo-positivo-divirtiendose-bailando_158538-5150.jpg?w=740&t=st=1684806906~exp=1684807506~hmac=e2a0b5cfb5a7f081b6297b41cbf6575ad6f7b443d042685cd0e5044bac876210'
    });
                                    
    productList.push ({
        name: 'Sofa', price: 240, image: 'https://img.freepik.com/foto-gratis/diseno-interiores-sala-estar-contemporanea-sofa-blanco_53876-126774.jpg?w=740&t=st=1684807153~exp=1684807753~hmac=d73ab3f8c85ce2896726d2d120f147f69454a55c8a1e58e65af581563045e124'
        });
                                    
    productList.push ({
        name: 'Kit Patines Niña', price: 150, image: 'https://img.freepik.com/foto-gratis/nino-parque-verano-nino-casco-rosa-nina-rodillo_1157-40193.jpg?w=740&t=st=1684807239~exp=1684807839~hmac=a8013607c39c3a8e22788de1330fc74382d41fb0df845c74dfded9ee668a0f39'
        });

        productList.push ({
            name: 'Zapatos Mujer', price: 20, image: 'https://img.freepik.com/foto-gratis/tacones-terciopelo-negro_53876-102771.jpg?w=740&t=st=1684813669~exp=1684814269~hmac=4fb2c27b51588d63c869e6212eadd4481b358fb00e421e0c188a2cdccaf1c599'
            });

// lógica para hacer CICLO con los productos que se requieran poner

function renderProducts (arrayProducts) {

for (product of arrayProducts) { //acá se crea los elementos según las etiquetas del HTML
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image) //producto.image proviene del array 
    productImg.addEventListener('click', openProductDetailAside) //escuchador al dar click a la imagen del producto-se utiliza función openProductDetailAside
        
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
}
renderProducts(productList);

//IMPORTANTE tener en cuenta que esta Info puede luego ir en el backend y llamarse al DOM por una API rest, para mas adelante

