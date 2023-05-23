function signUp(e) {
  e.preventDefault();
  const user_name = document.getElementById("name").value;
  const user_number = document.getElementById("number").value;
  const user_email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm_password").value;
  const unique_id = crypto.randomUUID();

  function checkPassword() {
    e.preventDefault();
    if (password !== confirm_password) {
      alert("Re-enter the Password");
      confirm_password.value = reset();
    } else {
      alert("Password Matched");
    }
  }
  checkPassword();
  const user_list = JSON.parse(localStorage.getItem("user_list")) || [];
  const exist =
    user_list.length &&
    JSON.parse(localStorage.getItem("user_list")).some(
      (data) => data.user_email.toLowerCase() == user_email.toLowerCase()
    );
  if (!exist) {
    user_list.push({
      user_name,
      user_number,
      user_email,
      password,
      confirm_password,
      unique_id,
    });
    localStorage.setItem("user_list", JSON.stringify(user_list));
    console.log(localStorage.getItem("user_list"));
    document.querySelector("form").reset();
    document.getElementById("user_email");
    document.getElementById("user_number");
    document.getElementById("user_name");
    alert("Account created Successfully");
    location.href = "./login.html";
  } else {
    alert(
      "Sorry the User already Exist!! \n Try with different Phone number or email"
    );
    document.querySelector("form").reset();
  }
}

//    log in function

function signIn(e) {
  e.preventDefault();
  const user_email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user_list = JSON.parse(localStorage.getItem("user_list")) || [];

  const exist =
    user_list.length &&
    JSON.parse(localStorage.getItem("user_list")).some(
      (data) =>
        data.user_email.toLowerCase() == user_email && data.password == password
    );

  if (!exist) {
    alert("Incorrect login credentials");
    document.querySelector("form").reset();
  } else {
    localStorage.setItem("userId", JSON.stringify(user_email));

    alert("Your login in successful");
    location.href = "./profile.html";
  }
}

// show your data on your profile

const userId = JSON.parse(localStorage.getItem("userId"));
const user_list = JSON.parse(localStorage.getItem("user_list"));

function login_data(e) {
  return e.user_email == userId;
}

const profile_img = document.querySelector("#profile");

user_data = user_list.find(login_data);
profile_img.setAttribute("src","https://ui-avatars.com/api/?name="+user_data.user_name);

document.getElementById("user_email").value = user_data.user_email;
document.getElementById("user_number").value = user_data.user_number;
document.getElementById("user_name").value = user_data.user_name;
document.getElementById("address").value = user_data.user_address;
document.getElementById("pincode").value = user_data.user_pincode;
document.getElementById("district").value = user_data.user_district;




document.getElementById("edit_button").addEventListener("click", enableInput);

function enableInput(e) {
  if (confirm("Are you sure you want to edit the page")) {
    document.getElementById("user_name").removeAttribute("readonly");
    document.getElementById("address").removeAttribute("readonly");
    document.getElementById("user_number").removeAttribute("readonly");
    document.getElementById("address").removeAttribute("readonly");
    document.getElementById("pincode").removeAttribute("readonly");
    document.getElementById("district").removeAttribute("readonly");

  }
}

/// ////// Edit page///////////

function eprofile_details(e) {
  user_data.user_name = document.getElementById("user_name").value;
  user_data.user_number = document.getElementById("user_number").value;
  user_data.user_email = document.getElementById("user_email").value;
  user_data.user_address = document.getElementById("address").value;
  user_data.user_pincode = document.getElementById("pincode").value;
  user_data.user_district = document.getElementById("district").value;



  localStorage.setItem("user_list", JSON.stringify(user_list));
  location.href = "#";
}

document.getElementById("save").addEventListener("click", disableInput);

function disableInput(e) {
  if (confirm("Are you sure you want to save the page")) {
    document.getElementById("user_name").setAttribute("readonly", true);
    document.getElementById("address").setAttribute("readonly", true);
    document.getElementById("user_number").setAttribute("readonly", true);
    document.getElementById("user_address").setAttribute("readonly", true);
    document.getElementById("user_pincode").setAttribute("readonly", true);
    document.getElementById("user_district").setAttribute("readonly", true);


  }
}

// Delete function

document.getElementById("delete").addEventListener("click", deleteaccount);

function deleteaccount(e) {
  if (confirm("Are You Sure on deleting?")) {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("userId"));
    const user_list = JSON.parse(localStorage.getItem("user_list"));

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
