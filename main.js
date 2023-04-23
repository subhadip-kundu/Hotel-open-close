const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const checkbox = document.getElementById("switch");
hotel_image = document.getElementById("shops");

setInterval(() => {
    let time = new Date();
    let hour = time.getHours();
    let Minute = time.getMinutes();
    let sec = time.getSeconds();
    hours.innerHTML = hour;
    minutes.innerHTML = Minute;
    seconds.innerHTML = sec;
    console.log(sec);
}, 1000)

checkbox.onchange = (event) => {
    if (event.target.checked) {
        hotel_image.src = "./Assets/Night_5.png";
    } else {
        hotel_image.src = "./Assets/Night_4.png";
    }
}