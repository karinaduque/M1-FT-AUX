function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

let [hours, minutes, seconds] = time.split(":") 
let ampm= seconds[2]+seconds[3]
seconds=seconds[0]+seconds[1]
if(ampm==="AM"){
    hours= hours==="12"? "00": hours;       
}else hours= hours=== "12"? hours: parseInt(hours)+12; 
return `${hours}:${minutes}:${seconds}`
}

module.exports = {
    timeConversion
}