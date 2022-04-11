/*let idProductos:string[] = new Array(3);
let stockProductos:number[] = new Array(3);
let precioProductos:number[] = new Array(3);
let compraFinal:number[] = new Array(3);

function cargarProductos (idProductos[3], stockProductos[3], precioProductos[3]) {
  for (let i: number =0;i < idProductos.length;i++) {
    idProductos[i]=String(prompt("Ingrese Producto"));
  }
  for (let i: number=0;i < stockProductos.length;i++) {
    stockProductos[i]=Number(prompt("Ingrese Stock"));
  }
  for (let i: number=0;i < precioProductos.length;i++)   {
    precioProductos[i]=Number(prompt("ingrese Precio"));
  }
  console.log ("  Bienvenidos al Mini Super de Apu  ")
  console.log(`Nuestros productos disponibles: ${idProductos[0]} Cantidad disponible ${stockProductos[0]} Precio ${precioProductos[0]} --
  ${idProductos[1]} Cantidad disponible ${stockProductos[1]} precio ${precioProductos[1]} --
  ${idProductos[2]} Cantidad disponible ${stockProductos[2]} precio ${precioProductos[2]}`);
} 

function compraProductos(compraFinal) {
 
  let cantidadCero=Number(prompt(`Ingrese cantidad de ${idProductos[0]}`));
  while (cantidadCero <= 0) {
    console.log("ERROR, Ingrese numero MAYOR que 0");
    cantidadCero = Number(prompt(`cuantas ${idProductos[0]} desea llevar?`));
    cantidadCero++;
  }
  let cantidadUno=Number(prompt(`Ingrese cantidad de ${idProductos[1]}`));
    while (cantidadUno <= 0) {
    console.log("ERROR, Ingrese numero MAYOR que 0");
    cantidadUno = Number(prompt(`cuantas ${idProductos[1]} desea llevar?`));
    cantidadUno++;
  }
  let cantidadDos=Number(prompt(`Ingrese cantidad de ${idProductos[2]}`));
  while (cantidadDos <= 0) {
    console.log("ERROR, Ingrese numero MAYOR que 0g");
    cantidadDos = Number(prompt(`cuantas ${idProductos[2]} desea llevar?`));
    cantidadDos++;
  } 
  compraFinal[0]= precioProductos[0] * cantidadCero;
  compraFinal[1]= precioProductos[1] * cantidadUno;
  compraFinal[2]= precioProductos[2] * cantidadDos;
  console.log(`Usted compro ${cantidadCero} de ${idProductos[0]} por ${compraFinal[0]}`);
  console.log(`Usted compro ${cantidadUno} de ${idProductos[1]} por ${compraFinal[1]}`);
  console.log(`Usted compro ${cantidadDos} de ${idProductos[2]} por ${compraFinal[2]}`);

  let resultadoFinal = compraFinal[0] + compraFinal[1] + compraFinal[2];
  console.log(`Importe a pagar ${resultadoFinal}`);
    
  let stockFinalCero:number, stockFinalUno:number, stockFinalDos:number;
  stockFinalCero = stockProductos[0] - cantidadCero;
  stockFinalUno = stockProductos[1] - cantidadUno;
  stockFinalDos = stockProductos[2] - cantidadDos;
  console.log(`Stock restante ${stockFinalCero} de ${idProductos[0]}`);
  console.log(`Stock restante ${stockFinalUno} de ${idProductos[1]}`);
  console.log(`Stock restante ${stockFinalDos} de ${idProductos[2]}`);
  console.log("Gracias!, Vuelvan Prontos...")
}

cargarProductos()
compraProductos(compraFinal);
*/
