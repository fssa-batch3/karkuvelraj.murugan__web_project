function upload(e){
    e.preventdefault();
    
    let name=document.getElementById("product_name").value
    let image=document.getElementById("product_image").value
    let about=document.getElementById("product_about").value
    let price=document.getElementById("product_price").value
    
    let product_details = JSON.parse(localStorage.getItem("product_details")) || [];

    product_details.push({name,image,about,price})

    localStorage.setItem("product_details",JSON.stringify(product_details))
    window.location.href="../../index.html"

    document.querySelector("form").reset()

    
        
    


}