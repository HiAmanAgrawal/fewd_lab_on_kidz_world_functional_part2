let cart = document.getElementById("cart-value");
let cartButtons = document.querySelectorAll(".button");
let cartDiv = document.getElementById("cart");

let items=[
    { itemName: "This was our pact",quantity: 0,price:7.48},
    { itemName: "The famous five",quantity: 0,price:4.59 },
    { itemName: "Matilda",quantity: 0,price:4.59 },
    { itemName: "Harry Potter",quantity: 0,price:6.80},
    { itemName: "For Young Readers",quantity: 0,price:7.29},
    { itemName: "Wimpy kid - DIY",quantity: 0,price:4.99},
    { itemName: "DART Board",quantity: 0,price:17.49},
    { itemName: "Connect Four",quantity: 0,price:17.99},
    { itemName: "Jenga",quantity: 0,price:20.99},
    { itemName: "Monopoly",quantity: 0,price:19.49},
    { itemName: "Bookmarks",quantity: 0,price:6.49},
    { itemName: "Birthday Card",quantity: 0,price:8.49},
    { itemName: "Stuffed toys",quantity: 0,price:3.99},
    { itemName: "Dream catcher drawing",quantity: 0,price:14.49},
];

let count = 0;
let cartItems = [];
let total = 0;
let itemDetail = "";

for (let i = 0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", () => {
    count++;
    cart.textContent = count;
    items[i].quantity++;
  });
}

cartDiv.onclick = () => {
  itemDetail = "";
  items.forEach((item) => {
    if (item.quantity > 0) {
      cartItems.push(item);
    }
  });

  cartItems.forEach((item) => {
    itemDetail += `Item name: ${item.itemName} - Quantity: ${item.quantity} ` + '\n';
    total += item.price * item.quantity;
  });

  console.log(itemDetail);
  console.log(`Total Price: $${total.toFixed(2)}`);
  console.log(`Quantity: ${count}`);
  sendWhatsapp();
  itemDetail = "";
  total = 0;
  cartItems = [];
};

function sendWhatsapp() {
  var wtspurl = "https://api.whatsapp.com/send?phone=918178118996&text=Order%20details:-%0A";
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      wtspurl += "%0A" + items[index].itemName + "%20" + items[index].quantity;
    }
  }
  wtspurl += "%0A%0AThe%20total%20amount%20is%20" + total.toFixed(2) + "%20$.%20"
  // console.log(
  //   // "The total amount is " + total/100 + "$ and " + total%100 + " cents"
  // );
  window.open(wtspurl)
};
