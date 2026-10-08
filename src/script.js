// ===== Dados do projeto =====
const nomeProjeto = "Planejador de Economia Pessoal"; // string
const depositos = [180, 220, 150, 90, 260, 200];       // array de number
const valorMinimo = 150;                               // number
const meta = 1200;                                     // number

// ===== Funções =====
function formatarReais(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function calcularTotal(lista) {
  let total = 0;
  for (const valor of lista) {
    total += valor;
  }
  return total;
}

function contarDepositosNoMinimo(lista, minimo) {
  let quantidade = 0;
  for (const valor of lista) {
    if (valor >= minimo) {
      quantidade++;
    }
  }
  return quantidade;
}

function classificarProgresso(percentual) {
  if (percentual >= 100) {
    return "Meta atingida";
  } else if (percentual >= 50) {
    return "No caminho";
  } else {
    return "Iniciando";
  }
}

// ===== Cálculos =====
const total = calcularTotal(depositos);
const media = total / depositos.length;
const quantidadeNoMinimo = contarDepositosNoMinimo(depositos, valorMinimo);
const diferenca = meta - total;
const percentual = (total / meta) * 100;
const metaAtingida = total >= meta; // boolean
const classificacao = classificarProgresso(percentual);

// ===== Console =====
console.log(`Projeto: ${nomeProjeto}`);
console.log(`Total guardado: ${formatarReais(total)}`);
console.log(`Média por depósito: ${formatarReais(media)}`);
console.log(`Depósitos com pelo menos ${formatarReais(valorMinimo)}: ${quantidadeNoMinimo} de ${depositos.length}`);
console.log(`Diferença até a meta: ${formatarReais(Math.abs(diferenca))}`);
console.log(`Meta atingida? ${metaAtingida}`);
console.log(`Classificação: ${classificacao} (${percentual.toFixed(1)}%)`);

// ===== Interface =====
document.getElementById("meta-texto").textContent = formatarReais(meta);
document.getElementById("minimo-texto").textContent = formatarReais(valorMinimo);

for (let i = 0; i < depositos.length; i++) {
  document.getElementById(`valor-${i + 1}`).textContent = formatarReais(depositos[i]);
}

document.getElementById("resultado-total").textContent = formatarReais(total);
document.getElementById("resultado-media").textContent = formatarReais(media);
document.getElementById("resultado-minimo").textContent = `${quantidadeNoMinimo} de ${depositos.length}`;
document.getElementById("rotulo-diferenca").textContent = metaAtingida ? "Acima da meta" : "Falta para a meta";
document.getElementById("resultado-diferenca").textContent = formatarReais(Math.abs(diferenca));
document.getElementById("resultado-percentual").textContent = `${percentual.toFixed(1).replace(".", ",")}%`;
document.getElementById("resultado-classificacao").textContent = classificacao;