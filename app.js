// flower Animation /////////////////////////////

const playAnimationDiv = document.getElementById("playAnimationDiv")
const flower = document.getElementById("flower")

//window.addEventListener("scroll", () => {
//    if (window.scrollY > 700) {
//        flower.style.animationName = "flower"
//    }
//})

if (window.innerHeight > 900 && window.scrollY > 700) {
     flower.style.animationName = "flower"
} else if (window.innerHeight < 900 && window.scrollY > 500) {
    flower.style.animationName = "flower"
}
    

///////////////////////////////////////////////


let end = new Date('04/20/2023 15:30');
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;

    function showRemaining() {
        let now = new Date();
        let distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            // document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        let or = document.getElementById("day");
        let jam = document.getElementById("hour");
        let rope = document.getElementById("minute");
        let varkyan = document.getElementById("seconds");

        or.innerText = days;
        jam.innerText = hours;
        rope.innerText = minutes;
        varkyan.innerText = seconds;

        if (+jam.innerText < 10) {
            jam.innerText = 0 + jam.innerText
        }
        
        if (+varkyan.innerText < 10) {
            varkyan.innerText = 0 + varkyan.innerText
        }

        if (+rope.innerText < 10) {
            rope.innerText = 0 + rope.innerText
        }
    }

    timer = setInterval(showRemaining, 1000);
