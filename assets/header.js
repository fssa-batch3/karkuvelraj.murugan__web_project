
let rootpath = window.location.origin
let logo = rootpath + "/assets/images/logo1.png";
let logo_path = rootpath + "/index.html";
let signup = rootpath + "/pages/homepage/sign-up.html";
let signin = rootpath + "/pages/homepage/login.html";
let cart = rootpath + "/pages/homepage/cart.html";
let wishlist= rootpath + "/pages/homepage/wish.html";



let after_login =`    <div class="nav-items">
<a href = "${logo_path}"> 
<img class="logo" src="${logo}" width="130px" alt="logo"> </a>
<input class="searchbox" type="text" placeholder="Search items" name="search" width="500px">
<span class="search">
  <i class="fa fa-search" style="font-size:24px"></i>

</span>


</div>

<div class="icon">

<a href="${cart}"><button class="my-button">Cart</button>
</a>
<a href="${wishlist}"> <button class="my-button">Wishlist</button>
</a>
 <button class="my-button" type = "submit" onclick = "logout()">logout</button>


  <div class="dropdown-content">
    <a href="#">SHIRT</a>
    <a href="#">T-SHIRT</a>
  </div>
</a>


</div>`

let before_login = `    <div class="nav-items">
<img class="logo" src="${logo}" width="130px" alt="logo">
<input class="searchbox" type="text" placeholder="Search items" name="search" width="500px">
<span class="search">
  <i class="fa fa-search" style="font-size:24px"></i>

</span>


</div>

<div class="icon">
<a href="${signup}"><button class="my-button">Sign up</button>
</a>
<a href="${signin}"> <button class="my-button">Sign in</button>
</a>



</div>`

function header() {
    let userId = JSON.parse(localStorage.getItem("userId"));
    let userlogin = document.getElementById("userLogin");
    if (!userId) {
    userlogin.innerHTML = before_login;
    }
    else {
    userlogin.innerHTML = after_login;
    }
}

function logout(){
if(confirm("Are you sure to log out")){
   localStorage.removeItem("userId")
   window.location.href = rootpath + "/index.html"
}
}