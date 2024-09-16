// Função para realizar a pesquisa (ainda não implementada)
function pesquisar() {

// Seleciona o elemento HTML onde os resultados serão exibidos
let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value
// Inicializa uma string vazia para armazenar o HTML dos resultados

if (campoPesquisa == ""){
    section.innerHTML = `
    <div class="item-resultado">
        <h2>Nenhum time carioca encontrado, realize novamente a sua pesquisa</h2>
        </div>
`
return
}


campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

// Itera sobre os dados da busca e constrói o HTML para cada resultado
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()
    
    // se titulo tem o campopesquisa
    if (titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
    // Cria um novo elemento div para cada resultado
    resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <img class="imgclubes" src=${dado.imagem} alt="Vasco">
            <p class="descricao-meta">${dado.descricao}</p>
            <br>
            <a href=${dado.link} target="_blank"><strong>${dado.botaotime}</strong></a>
        </div>
    `;
 } }
// Insere o HTML gerado no elemento section
section.innerHTML = resultados;
}
