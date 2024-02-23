let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");

//show input slider value
sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});
