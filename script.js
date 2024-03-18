const title = document.querySelector("#titulo-produto");
const colorTitle = document.querySelector("#nome-cor-selecionada");
const mainImage = document.querySelector("#imagem-visualizacao");


function updateTitle() {
    const sizeInput = document.querySelector('[name="opcao-tamanho"]:checked');
    const sizeText = document.querySelector(`[for='${sizeInput.id}']`).innerHTML;
    
    const colorInput = document.querySelector("[name='opcao-cor']:checked");
    const colorText = document.querySelector(`[for='${colorInput.id}'] img`).src;
    const color = colorText.substring(colorText.lastIndexOf("/") + 1, colorText.lastIndexOf("."));

    title.innerHTML = `Pulseira loop esportiva ${color} para caixa de ${sizeText}`;
    colorTitle.innerHTML = `Cor - ${color}`;
}

function updateImage() {
    const colorInput = document.querySelector("[name='opcao-cor']:checked")
    const colorText = document.querySelector(`[for='${colorInput.id}'] img`).src
    const color = colorText.substring(colorText.lastIndexOf("/") + 1, colorText.lastIndexOf("."))

    document.querySelectorAll("#selecionar-imagem>li>label>img").forEach((element, index) => {
        element.src = `./imagens/opcoes-cores/imagens-${color}/imagem-${index}.jpeg`;
    })

    const angleOption = document.querySelector("[name='opcao-imagem']:checked").id[0];

    mainImage.src = `./imagens/opcoes-cores/imagens-${color}/imagem-${angleOption}.jpeg`;
}

function updateSize() {
    const sizeInput = document.querySelector('[name="opcao-tamanho"]:checked');
    const sizeText = document.querySelector(`[for='${sizeInput.id}']`).innerHTML;

    if(sizeText == "45 mm") {
        mainImage.classList.remove("caixa-pequena");
    } else{
        mainImage.classList.add("caixa-pequena");
    }
}


function trocarTamanho() {
    updateTitle();
    updateSize();
}
function trocaCor() {
    updateTitle();
    updateImage();
}
function trocarImagem() {
    updateImage();
}

