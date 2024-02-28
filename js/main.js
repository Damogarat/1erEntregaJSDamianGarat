function saludar() {
    alert ('Bienvenido/a a la tienda online del banco de semillas de cannabis SEEDS CABA!!' + '\u{1F33F}' + '\u{1F33F}' +  '\u{1F33F}');
}
saludar();

let nombre = prompt('Ingresá tu nombre');
alert('Bienvenido/a ' + nombre + '!' + '\u{1F600}' + ' Te vamos a hacer un par de preguntas para verificar que podemos venderte nuestros productos!' + ' Responde con si/no'+ '\u{1F46E}');


let respuesta;
const SI = 'si';
const NO = 'no';
let puedeComprar = false;

respuesta = prompt ('Estás registrado en el Registro del Programa de Cannabis (REPROCANN)?');
if(respuesta == SI){
    respuesta = prompt('Sos mayor de edad?');

    if(respuesta == SI) {
        alert('Genial!! Podés ingresar a la Tienda' + '\u{1F331}' + '\u{1F331}' + '\u{1F331}');
        
    puedeComprar = true;

    }else{ 
        alert('\u{1F6D1}' + 'Sólo vas a poder comprar por intermedio de tus padres o representante legal' + '\u{1F6D1}'); 
    }

    }else {
    alert('Lo sentimos. Sólo comercializamos en el marco del Decreto N° 883/20 que regula la Ley N° 27.350 sobre el Uso Medicinal de la Planta de Cannabis y sus derivados.' + '\u{1F622}');
    
 }
 

let precio = 3000;
let cantidad;
let total = 0; 
let continuar = 'si';

if (puedeComprar) {
    do {
    cantidad = +prompt('Ingresá cantidad de semillas que deseas comprar');
    total = total + (precio * cantidad);
    continuar = prompt('Querés ingresar más semillas en el carrito? si/no'); 
    }
 while (continuar == 'si');
alert('El total del carrito es de $' + total);
} else {
    
    alert('No podes comprar en nuestra tienda. Gracias por visitarnos!!!');
}