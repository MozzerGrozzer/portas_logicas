// Valores iniciais das entradas
let A = 0;
let B = 0;
let C = 0;

// Elementos HTML
const valorA = document.getElementById("valorA");
const valorB = document.getElementById("valorB");
const valorC = document.getElementById("valorC");

const resultado = document.getElementById("resultado");
const saida = document.getElementById("saida");
const motivo = document.getElementById("motivo");


// Botão da entrada A
document.getElementById("botaoA").addEventListener("click", function () {

    A = A === 0 ? 1 : 0;

    atualizarSistema();

});


// Botão da entrada B
document.getElementById("botaoB").addEventListener("click", function () {

    B = B === 0 ? 1 : 0;

    atualizarSistema();

});


// Botão da entrada C
document.getElementById("botaoC").addEventListener("click", function () {

    C = C === 0 ? 1 : 0;

    atualizarSistema();

});

// Função responsável por executar a lógica
function atualizarSistema() {

    // Atualiza os valores mostrados na tela
    valorA.textContent = A;
    valorB.textContent = B;
    valorC.textContent = C;

    const S = A || (B && !C);

    // Verifica o resultado
    if (S) {

        saida.textContent = "Sistema acionado — S = 1";

        resultado.classList.remove("desligado");
        resultado.classList.add("ligado");

        // Explica por que o sistema foi acionado
        if (A === 1) {

            motivo.textContent =
                "Fumaça detectada: a prioridade absoluta foi acionada.";
        } else {

            motivo.textContent =
                "Temperatura crítica detectada e o equipamento não está em manutenção.";
        }

    } else {

        saida.textContent = "Sistema desligado — S = 0";

        resultado.classList.remove("ligado");
        resultado.classList.add("desligado");

        if (B === 1 && C === 1) {

            motivo.textContent =
                "Temperatura crítica detectada, mas o modo de manutenção está ativo.";

        } else {

            motivo.textContent =
                "Nenhuma condição de acionamento foi detectada.";

        }
    }
}

// Executa uma primeira vez para configurar a tela
atualizarSistema();