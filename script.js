const HIDE_CLASS = 'hide'

const loadBox = document.getElementById('model_loader');
const loadBtn = document.getElementById('model_load_btn');
const infoFile = document.getElementById('model_info');

function setVisible(element, isVisible) {
  if (isVisible) {
    element.classList.remove(HIDE_CLASS);
  } else {
    element.classList.add(HIDE_CLASS);
  }
}

loadBtn.addEventListener('click', () => {
  let input = document.createElement('input');
  input.type = 'file';

  input.addEventListener('change', function (event) {
    let file = event.target.files[0];

    setVisible(loadBox, false);
    setVisible(infoFile, true);

    const fileName = document.getElementById('model_name');
    const fileSize = document.getElementById('model_size');

    fileName.innerHTML = file.name;
    fileSize.innerHTML = (file.size / 1048576).toFixed(2) + ' MБ';
  });
  
  input.click();
});
