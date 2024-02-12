

// const span = document.querySelectorAll("span");
// const btn = document.querySelectorAll("button");
// const count = [0, 0, 0, 0];

// for (let i = 0; i < span.length; i++) {
//   btn[i].onclick = () => {
//     count[i]++;
//     span[i].textContent = count[i];
//   };
// }
const count = [0, 0, 0, 0];
const h=document.querySelectorAll("h2");
const bt=document.querySelectorAll("button");
console.log(bt);

for(let i = 0; i<h.length; i++) {
    
    bt[i].onclick=function () {
    count[i]++;
        h[i].style.color="seashell";
        h[i].textContent=count[i];
    }
}

const sv=document.querySelectorAll("svg");

for(let i = 0; i<sv.length; i++) {
    sv[i].onclick=function () {
        h[i].textContent=0;
        count[i]=0;
    }
}