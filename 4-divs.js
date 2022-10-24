div1 = document.querySelector("#div1");
div2 = document.querySelector("#div2");
div3 = document.querySelector("#div3");
div4 = document.querySelector("#div4");

//DIV1
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.backgroundColor = "#EFA99A";
//DIV2
div2.style.width = "200px";
div2.style.height = "200px";
div2.style.backgroundColor = "#BC857A";
//DIV3
div3.style.width = "200px";
div3.style.height = "200px";
div3.style.backgroundColor = "#9C7066";
//DIV4
div4.style.width = "200px";
div4.style.height = "200px";
div4.style.backgroundColor = "#6E5049";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color1 = "#DB93E0";
    /* Cambiar a color 1 */
  } else if (event.key === "s") {
    /* Cambiar a color 2 */
    color1 = "#B77BBB";
  } else if (event.key === "d") {
    /* Cambiar a color 2 */
    color1 = "#835986";
  }
});

div1.addEventListener("click", function () {
  div1.style.backgroundColor = color1;
});

div2.addEventListener("click", function () {
  div2.style.backgroundColor = color1;
});

div3.addEventListener("click", function () {
  div3.style.backgroundColor = color1;
});

div4.addEventListener("click", function () {
  div4.style.backgroundColor = color1;
});
