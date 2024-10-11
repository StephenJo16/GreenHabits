const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
const signInForm = document.querySelector("#container .sign-in-container form");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah pengiriman formulir secara default

  // Validasi input sebelum pengiriman formulir
  const emailInput = document.querySelector(
    "#container .sign-in-container input[type='email']"
  );
  const passwordInput = document.querySelector(
    "#container .sign-in-container input[type='password']"
  );

  if (emailInput.value === "") {
    alert("Please enter your email."); // Menampilkan pesan jika email kosong
    return;
  }

  if (passwordInput.value === "") {
    alert("Please enter your password."); // Menampilkan pesan jika password kosong
    return;
  }

  // Jika validasi berhasil, mengarahkan pengguna ke halaman "index.html"
  window.location.href = "index.html";
});
