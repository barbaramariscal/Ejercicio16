const enlaces = document.getElementsByTagName("a"); 
alert ('Número total de enlaces: ' + enlaces.length); 

const penultimoEnlace = 'El último enlace apunta a ' + enlaces[enlaces.length-2].href;
console.log(penultimoEnlace)

const parrafos = document.getElementsByTagName("p");
const enlaces2 = parrafos[2].getElementsByTagName("a");
console.log(enlaces2);
