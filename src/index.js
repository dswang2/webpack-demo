import x from "./test"
import png1 from "./assets/1.png"
console.log(x);

const div = document.getElementById("app");
console.log(div);
div.innerHTML = `
<img src="${png1}">
`

const btn = document.createElement("button");
btn.innerHTML = "懒加载";
btn.onclick = () => {
    const promise = import("./lazy");
    promise.then((module) => {
        module.default();
    }).catch((e)=>{
        console.error("懒加载失败");
        console.error(e);
    })
}
div.appendChild(btn);