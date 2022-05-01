import x from "./test"
import png1 from "./assets/1.png"
console.log(x);

const div = document.getElementById("app");
console.log(div);
div.innerHTML = `
<img src="${png1}">
`