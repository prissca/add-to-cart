const laptops = document.querySelector("#laptops")
const categoryConfigs=[
    {
        name:'laptops',
        containerId:'laptops',
        keywords:['laptop','keyboard','mouse','monitor'],
        categories:['laptops','lighting','home-decoration']

    },
    {
        name:'phones',
        containerId:'phones',
        keywords:['phone','smartphone','mobile','charger','powerbank'],
        categories:['smartphones','home-decoration']

    },


    {
        name:'wearabletech',
        containerId:'wearabletech',
        keywords:['watch','earpods','audio','headphones', "Asus Zenbook Pro Dual Screen Laptop"],
        categories:['smartphones','home-decoration']

    }
];

async function loadCustomCategories()
{

    for(const config of categoryConfigs){
        const products=[]
        for (const cat of config.categories){
            const res=await
            fetch(`https://dummyjson.com/products/category/${cat}`);

            const data= await res.json()
            console.log(data)
            const filtered = data.products.filter(p =>{
                config.keywords.map(item=> item === p.title)
            });
        console.log(filtered)
        data.products.map(product => {
            console.log(product)
            
            const div = document.createElement('div');
            const img = document.createElement("img")
            const p = document.createElement('p');
            img.src= product.thumbnail
            img.alt= product.title
            img.classList.add("perfect-size")

            p.textContent=product.title
            div.appendChild(img)

            div.appendChild(p);
            laptops.appendChild(div)
            // ul.className ='product'; 
            // li.textContent=`div.innerHTML ='<img src"${product.thumbnail}" alt="${product.tittle}"  />
            // <h4>${product.tittle}</h4>
            // <p>$${product.price}</p> `;
            // container.appendChild(div);
    })
        
            // products.push(...filtererd);
        }
    }
    
//     const uniqueProducts =
//     Array.from(new Set(products.map(p =>
//     p.id)))
// .map(id =>products.find(p =>
//     p.id ===id))
//     .slice(0,20);

//     const container =
//     document.getElementById(config.containerId);
//     uniqueProducts.forEach(product =>
//     {


    const ul = document.appendChild('ul');
        // ul.className ='product'; 
        ul.textContent=`div.innerHTML ='<img src"${product.thumbnail}" alt="${product.tittle}"  />
        <h4>${product.tittle}</h4>
        <p>$${product.price}</p> `;
        // container.appendChild(div);
}



loadCustomCategories();