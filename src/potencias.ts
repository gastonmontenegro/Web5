let resultado: number;
//let base:number = Number(prompt("Ingrese base"));
function pasarParametros(base, expontente) {
  let base: number = Number(prompt(`Ingrese base`));
  resultado = base ** exponente;
  return `${base} elevado a ${exponente} es igual a ${resultado}`;
}

let exponente: number = Number(prompt("Ingrese exponente"));
while (exponente <= 0) {
  resultado = 1;
  console.log(`El exponente en 0 es igual a ${resultado}`);
  exponente++;
}
console.log(pasarParametros());
