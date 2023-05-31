const user_address =
  JSON.parse(localStorage.getItem("user_address")) || [];

  for(i=0;user_address.length>i;i++){

    // Create the necessary DOM elements
var addressContainer = document.createElement('div');
addressContainer.className = 'address_container';

console.log(addressContainer);

var addressContent = document.createElement('div');
addressContent.className = 'address_content';

var nameHeading = document.createElement('h2');
nameHeading.id = 'name';
nameHeading.innerText=user_address[i].name;

var addressParagraph = document.createElement('p');
addressParagraph.id = 'address';
addressParagraph.innerText=user_address[i].address;


var districtParagraph = document.createElement('p');
districtParagraph.id = 'district';
districtParagraph.innerText=user_address[i].local_city;


var pincodeSpan = document.createElement('span');
pincodeSpan.id = 'pincode';
pincodeSpan.innerText=user_address[i].pin_code;


var numberParagraph = document.createElement('p');
numberParagraph.id = 'number';
numberParagraph.innerText=user_address[i].tel_num;


var deliveryButton = document.createElement('button');
deliveryButton.className = 'order';
deliveryButton.setAttribute("data-id", user_address[i].unique_id );
deliveryButton.setAttribute("class", "delivery");
deliveryButton.textContent = 'Delivery Here';

// Append the elements to their parent containers
districtParagraph.appendChild(pincodeSpan);
addressContent.appendChild(nameHeading);
addressContent.appendChild(addressParagraph);
addressContent.appendChild(districtParagraph);
addressContent.appendChild(numberParagraph);
addressContent.appendChild(deliveryButton);
addressContainer.appendChild(addressContent);

  document.querySelector(".add").append(addressContainer);
  }


  let delivery_btn = document.querySelectorAll(".delivery");
console.log(delivery_btn);
// console.log(delivery_btn.data_id);

delivery_btn.forEach((e)=> {
    // console.log(findId)
    // console.log(delivery_btn.data-id);
        e.addEventListener("click", (el)=>{
          let get_id = el.target.dataset.id
          console.log(get_id);
          localStorage.setItem("address_id", JSON.stringify(get_id));
        
        

        const order_uniqueid = JSON.parse(localStorage.getItem("order_id"));
        const address_id = JSON.parse(localStorage.getItem("address_id"));
        const user_id = JSON.parse(localStorage.getItem("userId"));

         const order_details = JSON.parse(localStorage.getItem("order_details")) || [];



         order_details.push({
          productid: order_uniqueid,
          addressid:address_id,
          userid:user_id
        });

        localStorage.setItem("order_details", JSON.stringify(order_details));

         console.log(order_details)

         
         
        })
      })