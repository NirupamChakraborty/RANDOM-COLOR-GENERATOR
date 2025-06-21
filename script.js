document.getElementById("generateBtn").addEventListener("click", () => {
    const randomColor = getRandomColor();
    const colorBox = document.getElementById("colorBox");
    const colorCode = document.getElementById("colorCode");
  
    colorBox.style.backgroundColor = randomColor;
    colorCode.innerText = randomColor;
    console.log("Color Updated:", randomColor);
  });
  
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  