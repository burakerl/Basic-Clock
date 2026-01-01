let username = prompt("Please Type Your Name");

let message = document.getElementById("welcome-message");
message.innerHTML = "Hello, " + username + "! " + "Welcome!";

function timer() {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let d = date.getDay();

  const days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];

  let time = h + ":" + m + ":" + s + " " + days[d - 1];

  clockElement = document.getElementById("clock");
  clockElement.innerHTML = time;
  
  setTimeout(timer, 1000);
}

timer();
