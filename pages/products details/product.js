

const product_details =
  JSON.parse(localStorage.getItem("product_details")) || [];
  const fil = product_details.filter((e)=>e.type ==="Men")

for (let j = 0; j < fil.length; j++) {
  // let card_container1 = document.createElement("div");
  // card_container1.setAttribute("class", "card-container");

  const div_card0 = document.createElement("div");
  div_card0.setAttribute("class", "card");
  // card_container1.append(div_card0);

  const div_card1 = document.createElement("div");
  div_card1.setAttribute("class", "card-content");
  div_card0.append(div_card1);

  const img = document.createElement("img");
  img.setAttribute("src", fil[j].image1);
  img.setAttribute("alt", "shirt");
  img.setAttribute("width", "260px");
  img.setAttribute("height", "350px");
  div_card1.append(img);

  const div_card2 = document.createElement("div");
  div_card2.setAttribute("class", "card-title");
  div_card1.append(div_card2);

  const h3 = document.createElement("h3");
  h3.setAttribute("class", "product-name");
  h3.innerText = fil[j].name;
  div_card2.append(h3);

  const div_card3 = document.createElement("div");
  div_card3.setAttribute("class", "card-details");
  div_card0.append(div_card3);

  // const i = document.createElement("i");
  // i.setAttribute("class", "fa fa-heart-o");
  // div_card3.append(i);

  const div_card4 = document.createElement("button");
  div_card4.setAttribute("class", "like");
  div_card4.setAttribute("data-id", fil[j].unique_id );
  div_card4.innerText = "Wish"
  div_card3.append(div_card4);

  const h1 = document.createElement("h1");
  h1.innerText = fil[j].price;
  div_card3.append(h1);

  const p = document.createElement("p");
  p.innerText = fil[j].type;
  div_card3.append(p);

  const a = document.createElement("a");
  a.setAttribute(
    "href",
    `../products details/product.html?product_uniqueId=${fil[j].unique_id}`
  );
  div_card3.append(a);

  const btn = document.createElement("button");
  btn.setAttribute("class", "buy");
  btn.innerText = "Buy";
  a.append(btn);

  // const btn1 = document.createElement("button");
  // btn1.setAttribute("class", "cart");
  // btn1.innerText = "Cart";
  // div_card3.append(btn1);

  const productContainer = document.querySelector(".product-container");
  productContainer.append(div_card0);
}

const like_btn = document.querySelectorAll(".like");
console.log(like_btn);


like_btn.forEach((e)=> {
  // console.log(findId)
      e.addEventListener("click", (el)=>{
        const get_id = el.target.dataset.id
        // console.log(get_id);
        localStorage.setItem("wish_id", JSON.stringify(get_id));



        let user_details = JSON.parse(localStorage.getItem("user_list"));
        let user_id = JSON.parse(localStorage.getItem("userId"));

        const users =
        user_details.length &&
            JSON.parse(localStorage.getItem("user_list")).some(
              (data) => data.user_email === user_id
        );
        console.log(users)
        if(!users){
              alert("You are unknown person");
        }
        else{
          const wish_uniqueid = JSON.parse(localStorage.getItem("wish_id"));
          const product_list = JSON.parse(localStorage.getItem("product_details"));
          const products = product_list.find((e) => e.unique_id === wish_uniqueid);
          const wish_products = JSON.parse(localStorage.getItem("wish_details")) || [];

          const already_wishlist =
          wish_products.length &&
          JSON.parse(localStorage.getItem("wish_details")).some(
            (data) => data.productid === wish_uniqueid && data.userid === user_id
      );
      if (already_wishlist) {
        alert("This product has already been added to your wishlist.");
      } else {
        alert("This product has been added to your wishlist.");
        wish_products.push({
          productid: products.unique_id,
          userid: user_id,
        });
        localStorage.setItem("wish_details", JSON.stringify(wish_products));
      }

        }
      
      });
    });