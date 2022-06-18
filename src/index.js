/* <button class="btn">Click here</button> */

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("going back");
  window.history.back();

  console.log("go back to previous url");
});
// ??here with the help of window.history.back() we got to the previous URL
