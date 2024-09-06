// Função para pesquisar e exibir os resultados na seção com id "resultados-pesquisa"
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
    console.log(section);
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = '';
  
    // Itera sobre a lista de dados e constrói o HTML dos resultados
    for (let dado of listaDados) {
        resultados += `
        <div class="item-resultado">
            <h3>
                <a href="#" target="_blank">${dado.linguagem}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>

            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
    `
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
