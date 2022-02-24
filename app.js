const j = document.getElementById('joke');
const btn = document.getElementById('btn');
var audio = new Audio('audio.mp3');

btn.addEventListener('click', jokegen);

const link = "https://icanhazdadjoke.com/";

let count = 0;
function redirect() {
    location.replace("suprise/main.html");
}

async function jokegen() {
    const data = await fetch(link, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokejson = await data.json();
    j.innerHTML = jokejson.joke;
    audio.play();

    count += 1;
    if (count === 3) {
        redirect();
    }
}
