const imagemvisualizacao = document.querySelector("#visualizacao img");
const titulo = document.querySelector("h1");
const titulodecor = document.querySelector("h2");
const opcoesdetamanho = ["41 mm", "45 mm"];
const opcoesdecor = ["verde-cipreste", "azul-inverno", "meia-noite", "estelar", "rosa-claro"];
const miniaturas = document.querySelectorAll("#selecionar-imagem img");
let varnumcorselecionada = 0;

function atualizarImagemSelecionada() {
    const opcaoimagemselecionada = document.querySelector("[name='opcao-imagem']:checked").id.charAt(0);
    imagemvisualizacao.src = "./imagens/opcoes-cores/imagens-" + opcoesdecor[varnumcorselecionada] + "/imagem-" + opcaoimagemselecionada + ".jpeg";

}
function atualizarCorSelecionada() {
    const numcorselecionada = document.querySelector("[name='opcao-cor']:checked").id.charAt(0);
    varnumcorselecionada = numcorselecionada
    titulodecor.innerText = "Cor: " + opcoesdecor[numcorselecionada].replace("-", " ");
    const novosSrcs = [
    "./imagens/opcoes-cores/imagens-" + opcoesdecor[varnumcorselecionada] + "/imagem-0.jpeg",
    "./imagens/opcoes-cores/imagens-" + opcoesdecor[varnumcorselecionada] + "/imagem-1.jpeg",
    "./imagens/opcoes-cores/imagens-" + opcoesdecor[varnumcorselecionada] + "/imagem-2.jpeg"
    ];
    miniaturas.forEach((miniatura, index) => {
        miniatura.src = novosSrcs[index];
    });
    atualizarImagemSelecionada();
}
function atualizarTamanho() {
    const tamanhoselecionado = document.querySelector("[name='opcao-tamanho']:checked").id.charAt(0);
    titulo.innerText = "Pulseira loop esportiva "+opcoesdecor[varnumcorselecionada]+" para caixa de " + opcoesdetamanho[tamanhoselecionado];
    if (tamanhoselecionado === "0") {
        imagemvisualizacao.classList.add("caixa-pequena");
    } else {
        imagemvisualizacao.classList.remove("caixa-pequena");
    }
}   