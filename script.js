let date = new Date();
var horario;

let data = document.getElementById("data");

function load(){
    getTime();
    horario = setInterval(getTime, 1000);

    let hora = document.getElementById("hora");
    hora.innerHTML = `Hoje é ${new Intl.DateTimeFormat('pt-br', {dateStyle: "full"}).format(date)}`;
}

function getTime(){
    date = new Date();
    data.innerHTML = `${new Intl.DateTimeFormat('pt-br', {timeStyle: "medium"}).format(date)}`;
}
