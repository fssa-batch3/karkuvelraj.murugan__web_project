
        
    


//}
function upload(e){
  // alert("hi")
  e.preventDefault();
// e.prevent
  
  let name=document.getElementById("product_name").value
  let image=document.getElementById("product_image").value
  let about=document.getElementById("product_about").value
  let price=document.getElementById("product_price").value
let unique_id = crypto.randomUUID()
  
  let product_details = JSON.parse(localStorage.getItem("product_details"))||[];

  product_details.push({name,image,about,price,unique_id})

  localStorage.setItem("product_details",JSON.stringify(product_details))
  window.location.href="../../index.html"

  document.querySelector("form").reset()

}

// EDIT SECTION

























  let product_details = JSON.parse(localStorage.getItem("product_details"));

  for (let i = 0; i<product_details.length ; i++) {


    div_card = document.createElement("section");
    div_card.setAttribute("class", "card-container");
    document.querySelector(".pack").append(div_card)


    div_card0 = document.createElement("div");
    div_card0.setAttribute("class", "card");
    div_card.append(div_card0);


    div_card1 = document.createElement("div");
    div_card1.setAttribute("class", "card-content");
    div_card0.append(div_card1);


    h2 = document.createElement("h2")
    h2.setAttribute("id", "ak")
    h2.innerHTML = product_details[i]["name"];
    div_card1.append(h2);

    img = document.createElement("img")
    img.setAttribute("src", product_details[i]["image"]);
    img.setAttribute("alt", "shirt")
    img.setAttribute("width", "150px")
    img.setAttribute("height", "150px")
    div_card1.append(img);


    p1 = document.createElement("p")
    p1.setAttribute("class", "shirt-type")
    p1.innerHTML = product_details[i]["about"]
    div_card1.append(p1);


    p2 = document.createElement("p")
    p2.setAttribute("class", "shirt-rate")
    p2.innerHTML = product_details[i]["price"]
    div_card1.append(p2);


    div_card2 = document.createElement("div")
    div_card2.setAttribute("class", "shoe-review")
    div_card1.append(div_card2);

    for (j = 0; j<=2; j++){

    span = document.createElement("span");
    span.setAttribute("class", "fa fa-star-o");
    div_card2.append(span);

    }

    a = document.createElement("a");
    a.setAttribute("href", "./pages/products/product.html");
    a.setAttribute("class", "link");
    div_card1.append(a);

    btn = document.createElement("button")
    btn.setAttribute("class", "buy")
    btn.innerHTML = "Buy Now"
    a.append(btn)

    document.querySelector("div.pack").append(div_card);



  }






  