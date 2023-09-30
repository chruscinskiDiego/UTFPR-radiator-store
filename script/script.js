//products
const cars = [
    {
        id: 0,
        name: 'McQueen',
        img: 'cars/1.png',
        price: 2000,
    },
    {
        id: 1,
        name: 'Chick Hicks',
        img: 'cars/2.png',
        price: 2000,
    },
    {
        id: 2,
        name: 'Tom Mate',
        img: 'cars/3.png',
        price: 2000,
    },
    {
        id: 3,
        name: 'Cruz Ramirez',
        img: 'cars/4.png',
        price: 2000,
    },
    {
        id: 4,
        name: 'Luigi',
        img: 'cars/5.png',
        price: 2000,
    },
    {
        id: 5,
        name: 'Fillmore',
        img: 'cars/6.png',
        price: 2000,
    },
    {
        id: 6,
        name: 'Xerife',
        img: 'cars/7.png',
        price: 2000,
    },
    {
        id: 7,
        name: 'Storm',
        img: 'cars/8.png',
        price: 2000,
    },
    {
        id: 8,
        name: 'McQueen 2',
        img: 'cars/9.png',
        price: 2000,
    },
    {
        id: 9,
        name: 'Doc Hudson',
        img: 'cars/10.png',
        price:200,
    },
    {
        id: 10,
        name: 'Sally',
        img: 'cars/11.png',
        price: 2000,
    },
    {
        id: 11,
        name: 'McQueen 3',
        img: 'cars/1.png',
        price: 2000,
    },
]

//products


//store
startStore = () => {
    let containerStore = document.getElementById('products');
  
    cars.map((value) => {
      const card = document.createElement('div');
      card.className = 'col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch';
      card.innerHTML = `
        <div class="card text-center bg-light">
            <img src="${value.img}" alt="">
            <div class="card-header">
                <h5>${value.name}</h5>
            </div>
            <div class="card-body">
                <p class="card-text">R$ ${value.price}</p>
                <button class="buy btn btn-dark" onclick="addCart(${value.id})">
                    Comprar
                </button>
            </div>
        </div>
      `;
  
      const img = card.querySelector("img");
      img.addEventListener("click", () => {
        window.location.href = "mcqueen.html";
      });
  
      containerStore.appendChild(card);
    });
  };
  
startStore();
  //document.addEventListener("DOMContentLoaded", startStore);
//store

//mcqueen
function redirectIndex() {
    window.location.href = "index.html";
  }
//


//cart
let cartItem = [];

const addCart = (productID) => {
    const product = cars.find(item => item.id === productID);

    if (product) {
        const existingItem = cartItem.find(item => item.id === productID);

        if (existingItem) {
            alert('Produto já adicionado');
        } else {
            cartItem.push({ ...product, quantity: 1 });
            saveCartItems();
            attCart();
            alert('Produto adicionado ao carrinho');
        }
    }
}

attCart = () => {
    const count = cartItem.reduce((total, item) => total + item.quantity, 0);
    const countElement = document.getElementById('cart-count');

    if (countElement) {
        countElement.innerText = count.toString();
    }

    localStorage.setItem('countCart', count.toString());
}

removeCartItem = (id) => {
    cartItem = cartItem.filter(item => item.id !== id);
    saveCartItems();
    showCart();
}

attQuantity = (id, quantity) => {
    const item = cartItem.find(item => item.id === id);

    if (item) {
        item.quantity = quantity;
        saveCartItems();
        showCart();
    }
}

calculate = () => {
    let total = 0;

    cartItem.forEach(item => {
        total += item.price * item.quantity;
    });

    return total;
}

saveCartItems = () => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
}

loadCart = () => {
    const stockItems = localStorage.getItem('cartItem');

    if (stockItems) {
        cartItem = JSON.parse(stockItems);
    } else {
        cartItem = [];
    }
}

showCart = () => {
    loadCart();

    const eCartItems = document.getElementById('cart-items');
    const eCartPrice = document.getElementById('cart-price');

    eCartItems.innerHTML = '';
    eCartPrice.innerHTML = '';

    if (cartItem.length === 0) {
        eCartItems.innerHTML = '<tr><td colspan="5">Carrinho vazio</td></tr>';
    } else {
        cartItem.forEach(item => {
            const totalPrice = item.price * item.quantity;
            eCartItems.innerHTML += `
                <tr>
                    <td><img src="${item.img}" alt="Imagem do produto" class="product-image"></td>
                    <td>${item.name}</td>
                    <td>R$ ${item.price.toFixed(2)}</td>
                    <td><input type="number" min="1" value="${item.quantity}" onchange="attQuantity(${item.id}, this.value)"></td>
                    <td>R$ ${totalPrice.toFixed(2)}</td>
                    <td><button class="btn btn-danger" onclick="removeCartItem(${item.id})">Excluir</button></td>
                </tr>
            `;
        });

        const totalPrice = calculate();
        eCartPrice.innerHTML = `Preço Total: R$ ${totalPrice.toFixed(2)}`;
    }

    const eCart = document.getElementById('cart');
    eCart.style.display = 'block';
}

showCart();






//Validação do e-mail

//Validação do 




