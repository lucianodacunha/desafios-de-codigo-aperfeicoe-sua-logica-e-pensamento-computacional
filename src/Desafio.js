const { stdin } = require('process');
const readline = require('readline')

const rl = readline.createInterface(
  process.stdin, process.stdout
)

rl.setPrompt('Entre com o valor do salario: ');
rl.prompt();
rl.on('line', (valorSalario) => {
  rl.close();
});
rl.setPrompt('Entre com o valor do beneficio: ');
rl.prompt('line', (valorBeneficios) => {
  rl.close();
});

const valorImposto = calcularImposto(valorSalario);

const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));

function calcularImposto(salario){
  let aliquota;
  if (salario >= 0 && salario <= 1100){
    aliquota = 0.05;
  } else if (salario >= 1100.01 && salario <= 2500.0) {
    aliquota = 0.10;
  } else {
    aliquota = 0.15;
  }

  return aliquota * salario;
}