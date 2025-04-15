fetch('https://dummyjson.com/products/category/smartphones?limit=20')
    .then(res => res.json())
    .then(data => {
        console.log(data.products);
    });



function displayProducts(products){
    const container= document.getElementById('product-container');
    container.innerHTML = products.map (product=>`
        <div class="product-card">
            <img src="${product.thumbnail}" alt="product.tittle">
            <div class="product-info">
                <h3>${product.tittle}</h3>
                <p>$${product.price}</p>
                <p>Rating:${product.rating}/5</p>
                <button onclick="addToCart($product.id)" class="add-to-cart">Add to Cart </button>
            </div>
        </div>  
    `).join('');
}



fetch('https://dummyjson.com/products/category/smartphones?limit=20')
    .then(res => res.json())
    .then(data => displayProducts(data.products));




function loadCategory(category) {
    fetch(`https://dummyjson.com/products/category/$category?limit=20`)
    .then(res => res.json())
    .then(data => displayProducts(data.products));
    }


document.getElementById('search-box').addEventListener('input',(e)=>{
    const query =e.target.value;
    fetch(`https://dummyjson.com/products/search?q=$query?limit=20`)
    .then(res => res.json())
    .then(data => displayProducts(data.products));
    

});

let cart = [];
function addToCart(productId){
    fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(product =>{
        cart.push(product);
        updateCartUI();

    });
   
}

function updateCartUI() {
    document.getElementById('').textContent = cart.length;
    document.getElementById('').textContent =
      cart.reduce((total,item) => total + item.price, 0);

}
 




/*
const categoryDisplayNames = {
    'laptops':'laptops',
    'chargers':'accessories',
    'smartphones':'phones',
    'home-decoration':'workspace decoration'

};
function loadCategoies(){
fetch('https://dummyjson.com/products/category/${category}?limit=15')
    .then(res => res.json())
    .then(data => {
        const modifiedProducts = data.products.map(product =>({
            ...product,
            category : categoryDisplayNames[category] || product.categories
        }));
        displayProducts(modifiedProducts);
    });

}


function loadAllCategoies(){
    Promise.all([
        fetch('https://dummyjson.com/products/category/laptops?limit=15'),
        fetch('https://dummyjson.com/products/category/smartphones?limit=15'),
        fetch('https://dummyjson.com/products/category/earpods?limit=15')

    ]
    )
   
    .then(responses =>Promise.all(responses.map( res=> res.json()))) 
    .then(data => {
        const allProducts = data.flatMap(d=> d.products);
        displayProducts(allProducts)
    });
}

loadAllCategoies();

function displayProducts(products){
    const container= document.getElementById('product-container');
    container.innerHTML = products.map (products=>`
        <div class="product-card">
            <img src="${products.thumbnail}" alt="product.tittle">
            <div class="product-info">
            <span class ="category">${product.category}</span>
                <h3>${products.tittle}</h3>
                <p>$${products.price}</p>
                <p>Rating:${products.rating}/5</p>
                <button onclick="addToCart($product.id)" class="add-to-cart">Add to Cart </button>
            </div>
        </div>  
    `).join('');
}


*/