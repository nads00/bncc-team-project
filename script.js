document.addEventListener("DOMContentLoaded", function () {
  const judul = document.querySelector("h1");

  judul.addEventListener("click", function () {
    judul.style.color = judul.style.color === "blue" ? "black" : "blue";
  });

  console.log("Website BNCC berhasil dimuat!");
});
