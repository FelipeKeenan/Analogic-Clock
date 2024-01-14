let digitalElement = document.querySelector(".digital")
let sec = document.querySelector(".p_s")
let min = document.querySelector(".p_m")
let hour = document.querySelector(".p_h")

function updateClock() {
    let now = new Date;
    let currentHour = now.getHours() //Pegando os horas atuais
    let currentMin = now.getMinutes() //Pegando os minutos atuais
    let currentSec = now.getSeconds() //Pegando os segundos atuais
    digitalElement.innerHTML = `${fixZero(currentHour)}:${fixZero(currentMin)}:${fixZero(currentSec)}` //Mudando o texto na marcação de horas digital. Atribuí a função de correção do zero com cada elemento das horas.

    //ROTAÇÃO DO PONTEIRO DOS SEGUNDOS
    let sDeg = ((360 / 60) * currentSec) - 90; //Criei uma variável que muda a rotação do ponteiro dos segundos. o "-90" é pra ajustar certinho a marcação do horário.
    sec.style.transform = `rotate(${sDeg}deg)`; // Elemento do HTML vai rotacionar conforme os segundos

    //ROTAÇÃO DO PONTEIRO DOS MINUTOS
    let mDeg = ((360 / 60) * currentMin) - 90;
    min.style.transform = `rotate(${mDeg}deg)`


    //ROTAÇÃO DO PONTEIRO DAS HORAS
    let hDeg = ((360 / 12) * currentHour) - 90;
    hour.style.transform = `rotate(${hDeg}deg)`

}

setInterval(updateClock, 1000)//De um em um segundo vai executar a função updateClock
updateClock() //Chamada da função para que não haja atrasado ao carregar o site. Depois, ela vai se reiniciar a cada segundo por conta da função setInterval.
function fixZero(time) { //Função que corrige, no marcador digital, o único "0" aparecendo
    return time < 10 ? '0' + time : time //Retornei uma condição ternária.
}