const loadBtn = document.getElementById("model_load_btn");

loadBtn.addEventListener("click", () => {
  let input = document.createElement("input");
  input.type = "file";

  input.addEventListener("change", function (event) {
    let file = event.target.files[0];

    console.log("Выбранный файл:", file);

    loadBtn.style.display = 'none';
  });
  
  input.click();
});
