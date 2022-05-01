const menu  = [{
 id: 1,
 title: 'Chappatis',
 desc: 'Served for breakfast along with potato curry or scrambled eggs.',
 price: 50.00,
 category: 'breakfast',
 img:'https://thumbor.thedailymeal.com/iksOI8-_M27kTTKS8g0J7Ikd7ko=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1725106/2142217/3_Bangladesh_Chapati_shutterstock-edit.jpg'
},
{
 id: 2,
 title: 'Croissant',
 desc:'Croissant with chocolate',
 price: 30.00,
 category: 'breakfast',
 img:'https://thumbor.thedailymeal.com/8WPUVlBc30sRHeTlcP6d5G3WBgw=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1725106/2142217/15_France_edit.jpg'
},
{
    id: 3,
    title: 'Japan Breakfast',
    desc:'Miso Soup, Rice and Grilled Fish',
    price: 30.00,
    category: 'breakfast',
    img:'https://thumbor.thedailymeal.com/9GI5zjUaSNCw7qThlWwRmr4wRF0=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1725106/2142217/22_Japan_edit.jpg'   
},
{
    id: 4,
    title: 'Korea Breakfast',
    desc:'Rice and Banchan',
    price: 65.00,
    category: 'breakfast',
    img:'https://thumbor.thedailymeal.com/gt6_rTOGBZxpZa8ScEliSDKf7aI=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1725106/2142217/23_Korea_Edit.jpg'   
},
{
    id: 5,
    title: 'Nasi Lemak - Malaysia',
    desc:'served with sambal, boiled eggs, peanuts, sliced cucumber and deep-fried anchovies.',
    price: 90.00,
    category: 'breakfast',
    img:'https://thumbor.thedailymeal.com/-hvjIYBsi-GW7wqpx4Hp-a6KFFk=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1725106/2142217/25_Malaysia_Edit.jpg'   
},
{
    id: 6,
    title: 'Pasta',
    desc:'Classic italian pasta',
    price: 40.00,
    category: 'main',
    img:'https://www.lifeloveandsugar.com/wp-content/uploads/2021/05/Classic-Italian-Pasta-Salad5.jpg'   
},
{
    id: 7,
    title: 'Vegan Burger',
    desc:'Vegan burger with cheese and pepper',
    price: 120.00,
    category: 'main',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XwC4XGPiZvBB6pXjr-vB6Avq5ipr3HxJKQ&usqp=CAU'   
},
{
    id: 8,
    title: 'T-Bone Steak',
    desc:'Grilled T-Bone Steak and Mushrooms',
    price: 150.00,
    category: 'main',
    img:'https://www.thespruceeats.com/thmb/zJdD9ynN68dT7LDwfshcb_eKhEI=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grilled-t-bone-steak-and-mushrooms-recipe-336279-4ffcefb8ac564281921d2f3980909e01.jpg'   
},
{
    id: 9,
    title: 'Waffle',
    desc:'Waffle with mixed fruitss',
    price: 30.00,
    category: 'desserts',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqCCkUE7cz0Tx07u1ZXOQ02OTYxtcpQpYxA&usqp=CAU'   
},
{
    id: 10,
    title: 'Magnolia',
    desc:'Magnolia with strawberry',
    price: 40.00,
    category: 'desserts',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOSyh1Xjs-E1V69S-Ao95CY3hV9Jpi4Sj4A&usqp=CAU'   
},
{
    id: 11,
    title: 'Turkish Baklava',
    desc:'Turkish Baklava with peanut',
    price: 67.00,
    category: 'desserts',
    img:'https://www.imamcagdas.com/normal-baklava-27-baklavalar-imam-cagdas-273-27-B.jpg'   
},
{
    id: 12,
    title: 'Red Wine',
    desc:'Merlot, 1 glass',
    price: 22.00,
    category: 'drinks',
    img:'http://cdn.shopify.com/s/files/1/0783/7359/products/Merlot-Veneto_grande.jpg?v=1621524899'   
},
{
    id: 12,
    title: 'White Wine',
    desc:'Chardonnay',
    price: 22.00,
    category: 'drinks',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfn0VNWn9W0Lg65xlDll6I3zfWBRb2KTDAQ&usqp=CAU'   
},
{
    id: 13,
    title: 'Beer',
    desc:'50 CC Heineken',
    price: 12.00,
    category: 'drinks',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAb-lALjfDqlUPxRTG3iUm2gYacmLt02-KQ&usqp=CAU'   
},
{
    id: 14,
    title: 'Coke',
    desc:'Coca Cola ',
    price: 5.00,
    category: 'drinks',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTATHmfLv5_t_hfjPwcjGXdGT4EroaZYXVow&usqp=CAU'   
}
];
// Select button and menu classes
const btnContainer = document.querySelector('.btn-container')
const menuContainer = document.querySelector('.menu-container')

//creating button and function
function createButton(buttonName){
    let btn = `<button type="button" id="${buttonName}" class="btn">${buttonName}</button>`
    return btn;
}


//Buttons adding to HTML
const addButton = () =>{
    btnContainer.innerHTML = createButton("All") + 
    " " + createButton("Breakfast") + 
    " " + createButton("Main") + 
    " " + createButton("Desserts") + 
    " " + createButton("Drinks");
};
addButton();
// Button Event Listeners
const allBtn =  document.querySelector('#All') .addEventListener("click", addMenuAll);
const breakfastBtn = document.querySelector('#Breakfast') .addEventListener("click", addMenuBreakfast);
const mainBtn = document.querySelector('#Main') .addEventListener("click", addMenuMain);
const dessertBtn =  document.querySelector('#Desserts') .addEventListener("click", addMenuDesserts);
const drinkBtn = document.querySelector('#Drinks') .addEventListener("click", addMenuDrinks);




//Filtered menus with .map method after event listeners
function addMenuAll (){
    let allMenu = "";
    menu.map((x) => {
        allMenu += createObject(x);
    });
    menuContainer.innerHTML = allMenu;
}
function addMenuBreakfast () {
    let allMenu = "";
     menu.map((x) => {
        if(x.category == "breakfast") {
            allMenu += createObject(x);
        }
    });
    menuContainer.innerHTML = allMenu;
}
function addMenuMain () {
    let allMenu = "";
    menu.map((x) => {
        if(x.category == "main") {
            allMenu += createObject(x);
        }
    });
    menuContainer.innerHTML = allMenu;
}
function addMenuDesserts () {
    let allMenu = "";
    menu.map((x) => {
        if(x.category =="desserts") {
            allMenu += createObject(x);
        }
    });
    menuContainer.innerHTML = allMenu;
}
function addMenuDrinks () {
    let allMenu = " ";
    menu.map((x) => {
        if(x.category =="drinks") {
            allMenu += createObject(x);
        }
    });
    menuContainer.innerHTML = allMenu;
}
// Added Menu Lists
function createObject(menu){
    let item = `<div class="card">
    <img src="${menu.img}" alt="${menu.title}">   
    <h3 class="title">${menu.title}</h3>
    <small class="desc">${menu.desc}</small> 
    <h3 class="price">${menu.price}</h3>
</div>`
return item;
}

