// function handleLogin() {
//     const email = document.getElementById("arsalanashfaq27@gmail.com").value;
//     const password = document.getElementById("0279664a").value;
//     const errorMessage = document.getElementById("errorMessage");
//     const loader = document.getElementById("loader");

//     // Clear previous error message
//     errorMessage.textContent = "";

//     if (!email || !password) {
//       errorMessage.textContent = "Please fill out all fields.";
//       return;
//     }

//     loader.classList.add("active");

//     setTimeout(() => {
//       window.location.href = "dashboard.html";
//     }, 2000);
//   }

if (email === "user@example.com" && password === "password123") {
    // Show loader with animation
    loader.classList.add("active");

    // Simulate loading time and redirect
    setTimeout(() => {
      loader.classList.add("fade-out"); // Fade out animation
      setTimeout(() => {
        window.location.href = "dashboard.html"; // Redirect
      }, 500); // Time to finish fade-out
    }, 2000); // 2-second delay before fade-out
  } else {
    errorMessage.textContent = "Invalid email or password.";
  }

