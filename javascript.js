// const container = document.getElementById('cont');
const container = document.querySelector(".featureImage");
const slider = document.getElementById('slider');
document.querySelector(".slider").addEventListener("input",(e)=>{
    container.style.setProperty("--position",`${e.target.value}%`);
})
// slider.addEventListener('input', (e) => {
//   container.style.setProperty('--position', `${e.target.value}%`);
// })