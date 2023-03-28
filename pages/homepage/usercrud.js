

function signUp(e) {
    e.preventDefault();
    let user_name = document.getElementById("name").value,
    user_number = document.getElementById("number").value,
     user_email = document.getElementById("email").value,
      password = document.getElementById("password").value,
      confirm_password = document.getElementById("confirm_password").value,
      unique_id =crypto.randomUUID();


    function checkPassword() {
      if (password !== confirm_password) {
        alert("Re-enter the Password");
        confirm_password.value = reset();
      }
      else {
        alert("Password Matched");

      }
    }
    checkPassword();
    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
    let exist = user_list.length &&
      JSON.parse(localStorage.getItem('user_list')).some(data =>
        data.user_email.toLowerCase() == user_email.toLowerCase()
      );
    if (!exist) {
      user_list.push({
        user_name,
        user_number,
        user_email,
        password, 
        confirm_password,
        unique_id
      });
      localStorage.setItem('user_list', JSON.stringify(user_list));
      console.log(localStorage.getItem('user_list'));
      document.querySelector('form').reset();
      document.getElementById('user_email');
       document.getElementById('user_number');
       document.getElementById('user_name');
      alert('Account created Successfully');
      location.href = "../homepage/login.html";

    }
    else {
      alert('Sorry the User already Exist!! \n Try with different Phone number or email');
      document.querySelector('form').reset();
    }
  }










//    log in function
  

function signIn(e){
    e.preventDefault();
    let user_email = document.getElementById('email').value,
        password = document.getElementById('password').value;

    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];

    let exist = user_list.length &&
    JSON.parse(localStorage.getItem('user_list')).some(data =>
        data.user_email.toLowerCase() == user_email &&
        data.password == password);
        
    if(!exist){
        alert("Incorrect login credentials");
        document.querySelector('form').reset();
    }
    else{
        localStorage.setItem("userId",JSON.stringify(user_email));
        
        alert("Your login in successful");
        location.href = "./profile.html"
    }
}



















  // show your data on your profile


  let userId = JSON.parse(localStorage.getItem('userId'));
  let user_list = JSON.parse(localStorage.getItem('user_list'));

  function login_data(e) {
      return e.user_email == userId;
  }

  user_data = user_list.find(login_data);

  document.getElementById("user_email").value = user_data["user_email"];
  document.getElementById("user_number").value = user_data["user_number"];
  document.getElementById("user_name").value = user_data["user_name"];

  document.getElementById("edit_button").addEventListener("click",enableInput);

  function enableInput(e){
      if(confirm("Are you sure you want to edit the page")){
          document.getElementById("user_name").removeAttribute("readonly");
          document.getElementById("address").removeAttribute("readonly");
          document.getElementById("user_number").removeAttribute("readonly");
      }
  }


  ///////// edit page///////////

  function eprofile_details(e){
          user_data["user_name"] = document.getElementById("user_name").value;
          user_data["user_number"] = document.getElementById("user_number").value
          user_data["user_email"] = document.getElementById("user_email").value

          localStorage.setItem("user_list", JSON.stringify(user_list));
          location.href = "#"
  }

  document.getElementById("save").addEventListener("click",disableInput);

  function disableInput(e){
              if(confirm("Are you sure you want to save the page")){
                  document.getElementById("user_name").setAttribute("readonly",true);
                  document.getElementById("address").setAttribute("readonly",true);
                  document.getElementById("user_number").setAttribute("readonly",true);
              }
          }


  // delete function

  document.getElementById("delete").addEventListener("click",deleteaccount);

  function deleteaccount(e) {
      if (confirm("Are You Sure on deleting?")) {
          e.preventDefault()
          let userId = JSON.parse(localStorage.getItem("userId"));
          let user_list = JSON.parse(localStorage.getItem("user_list"));

          function login_data(e) {
              return e.user_email == userId;
          }

          user_data = user_list.find(login_data);

          const indexOFUser = user_list.indexOf(user_data);

          user_list.splice(indexOFUser, 1);
          
          localStorage.setItem("user_list", JSON.stringify(user_list));
          // location.href = "../login/Signup.html";
      }
  }

