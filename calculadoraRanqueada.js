console.log("Bem-vindo à calculadora de partidas ranqueadas! ")
let vitorias = prompt("Qual a sua quantidade de vitorias? ")
let derrotas = prompt("E sua quantidade de derrotas? ")
let saldoDeVitorias = vitorias - derrotas
let rank = calcularRank(vitorias, derrotas)
console.log("O Herói tem de saldo de " + saldoDeVitorias + "está no nível de "  + rank)




function calcularRank(vitorias, derrotas) {
  let score = vitorias - derrotas;
  let rank;
  if (score <= 10) {
            rank = "Ferro"
        }
        else if  (score > 10 && score <= 20) {
            rank = "Bronze"
        }
        else if (score > 20 && score <= 50) {
            rank = "Prata"
        }
        else if (score > 50 && score <= 80) {
            rank = "Ouro"
        }
        else if (score > 80 && score <= 90) {
            rank = "Diamante"
        }
        else if (score > 90 && score <= 100) {
            rank = "Lendário"

        }
        else if (score > 100) {
            rank = "Imortal"
        }
  return rank;
  }
