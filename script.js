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
        keywords:['watch','earpods','audio','headphones'],
        categories:['smartphones','home-decoration']

    }
];

async function loadCustomCategories()
{
    for(const config of categoryConfigs){
        const products=[]
        for (const cat of config.categories){
            const res=await
            fetch('https://dummyjson.com/products/category/${cat}');

            const data= await re.json()

            const filtered = data.products.filter(p =>
                confi.keywords.some(kw=> p.tittle.toLowerCase().includes(kw))
            );
            products.push(...filtererd);
        }
    }
}

const uniqueProducts =
Array.from(new Set(products.map(p =>
    p.id)))
.map(id =>products.find(p =>
    p.id ===id))
    .slice(0,20);

    const container =
    document.getElementById(config.containerId);
    uniqueProducts.forEach(product =>
    {


    const div = document.createElement('div');
        div.className ='product'; 
        `div.innerHTML ='<img src"${product.thumbnail}" alt="${product.tittle}"  />
        <h4>${product.tittle}</h4>
        <p>$${product.price}</p> `;
        container.appendChild(div);
    });


loadCustomCategories();