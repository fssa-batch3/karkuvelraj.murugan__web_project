// function upload(e) {
//   e.preventDefault();
//   // e.prevent

//   let name = document.getElementById("product_name").value
//   let type = document.getElementById("Category").value
//   let image1 = document.getElementById("main-image").value
//   let image2 = document.getElementById("sub-img1").value
//   let image3 = document.getElementById("sub-img2").value
//   let image4 = document.getElementById("sub-img3").value
//   let size = document.getElementById("product_size").value
//   let price = document.getElementById("product_price").value
//   let discount = document.getElementById("product_discount").value
//   let description = document.getElementById("product_desciption").value


//   let unique_id = crypto.randomUUID()

//   let product_details = JSON.parse(localStorage.getItem("product_details")) || [];

//   product_details.push({ name,type,image1,image2,image3,image4,size,price,discount,description, unique_id })

//   localStorage.setItem("product_details", JSON.stringify(product_details))

//   // document.querySelector("form").reset()



// }

const product_details = JSON.parse(localStorage.getItem("product_details")) || [];

for (let j = 0; j < product_details.length; j++) {


  // let card_container1 = document.createElement("div");
  // card_container1.setAttribute("class", "card-container");

  let div_card0 = document.createElement("div");
  div_card0.setAttribute("class", "card");
  // card_container1.append(div_card0);

  let div_card1 = document.createElement("div");
  div_card1.setAttribute("class", "card-content");
  div_card0.append(div_card1);

  let img = document.createElement("img");
  img.setAttribute("src", product_details[j]["image1"]);
  img.setAttribute("alt", "shirt");
  img.setAttribute("width", "260px");
  img.setAttribute("height", "350px");
  div_card1.append(img);

  let div_card2 = document.createElement("div");
  div_card2.setAttribute("class", "card-title");
  div_card1.append(div_card2);

  let h3 = document.createElement("h3");
  h3.setAttribute("class", "product-name");
  h3.innerText = product_details[j]["name"];
  div_card2.append(h3);

  let div_card3 = document.createElement("div");
  div_card3.setAttribute("class", "card-details");
  div_card0.append(div_card3);

  let i = document.createElement("i");
  i.setAttribute("class", "fa fa-heart-o");
  div_card3.append(i);

  let div_card4 = document.createElement("div");
  div_card4.setAttribute("class", "like");
  div_card4.setAttribute("data-wish","wish")
  div_card3.append(div_card4);

  let h1 = document.createElement("h1");
  h1.innerText = product_details[j]["price"];
  div_card3.append(h1);

  let p = document.createElement("p");
  p.innerText = product_details[j]["type"];
  div_card3.append(p);


  let a = document.createElement("a");
  a.setAttribute("href", "../products details/product.html?product_uniqueId=" + product_details[j]["unique_id"]);
  div_card3.append(a);

  let btn = document.createElement("button");
  btn.setAttribute("class", "buy");
  btn.innerText = "Buy";
  a.append(btn);

  let btn1 = document.createElement("button");
  btn1.setAttribute("class", "cart");
  btn1.innerText = "Cart";
  div_card3.append(btn1);

  let productContainer = document.querySelector(".product-container");
  productContainer.append(div_card0);


  
}

const like_btn = document.querySelector("#wish");
console.log(like_btn)
// like_btn.addEventListener(click, function(){
//   let product_id = this.dataset.wish;

//   localStorage.setItem("wishunique_id", JSON.stringify(product_id));

//   let uid = JSON.parse(localStorage.getItem("userId"));
//   let userlist = JSON.parse(localStorage.getItem("user_list"));

  
//   let users = userlist.length && 
//               JSON.parse(localStorage.getItem("user_list")).some(data => data.user_email === uid );
//         console.log(users)

//         if (!users) {
//           alert("you are not logged in");
//         } else {
//           let wishunique_id1 = JSON.parse(localStorage.getItem("wishunique_id"));
//           let product_list = JSON.parse(localStorage.getItem("product_details"));
//           let products = product_list.find(e => e.unique_id === wishunique_id1);
//           let wish_products = JSON.parse(localStorage.getItem("wishlist")) || [];
//           let already_wishlist = 
//           wish_products.length && JSON.parse(localStorage.getItem("wishlist")).some(data => data.productid === wishunique_id && data.userid === uid);
      
//           if (already_wishlist) {
//             alert("This product has already been added to your cart.");
//           } else {
//             alert("This product has been added to your cart.");
//             cart_products.push({
//               productid: products["unique_id"],
//               userid: uid
//             });
//             localStorage.setItem("cart", JSON.stringify(cart_products));
//             window.location.href = "../homepage/cart.html";
//           }
//         }
      
      

// });
