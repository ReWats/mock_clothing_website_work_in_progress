function showMenu() {
document.getElementById("drpDwn").classList.toggle("show");
}

const navLinkElements = document.querySelectorAll('.navlink');
const windowPathname = window.location.pathname;

navLinkElements.forEach(navLinkEl => {
  if (navLinkEl.href.includes(windowPathname)) {
    navLinkEl.classList.add('active');
  }
});

function showSizes() {
document.getElementById("sizes").classList.toggle("show");
}

//Declaring the shop variable as shop div in html. We will want all of our products to be returned inside this div.

let shop = document.getElementById('shop')

//Now we create an array objects, each object is a product we have for sale.

let shopItemData = [{
    id: "whiteT",
    name: "White Tee",
    price: 19.99,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    id: "blackT",
    name: "Black Tee",
    price: 19.99,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg"
},
{
    id: "greenT",
    name: "Green Tee",
    price: 19.99,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "https://images.pexels.com/photos/20608931/pexels-photo-20608931/free-photo-of-young-man-in-a-casual-outfit-and-sunglasses-standing-near-green-plants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    id: "greyT",
    name: "Grey Tee",
    price: 19.99,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "https://images.pexels.com/photos/9379454/pexels-photo-9379454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}]

//Now we declare the generateShop function - this allows us to iterate through the array and display each product within the shop div in the html, map will run through and display the entire list of objects within the array.

let generateShop =()=>{
   return (shop.innerHTML = shopItemData.map((x)=>{
    let {id, name, price, desc, img} = x;
    //we return this html code for each product, it allows each product to have the same styling in css and makes the webpage look coherent; also saves time when new products are added or removed.
    return `
    <div id=product-id-${id}class="item">
            <img width="200" src=${img}/>
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>£${price}</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-square"></i>
                          <div id=${id} class="quantity">0</div>
                        <i class="bi bi-plus-square"></i>
                    </div>
                </div>
            </div>
        </div>
    `
    //Join ensures the styling is as we want it on html without unwanted spacing.
   }).join(""));
   
}

//This calls the function
generateShop();
