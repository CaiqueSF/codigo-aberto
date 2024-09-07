// Função para pesquisar e exibir os resultados na seção com id "resultados-pesquisa"
function pesquisar() {
    
    let section = document.getElementById('resultados-pesquisa'); // Obtém a seção onde os resultados serão exibidos
    let campoPesquisa = document.getElementById('campo-pesquisa').value; // Obtém o valor digitado no campo de pesquisa

    // Valida se o campo de pesquisa está vazio
    if(!campoPesquisa){
        // section.innerHTML = '<p>Busca vazia. Digite a linguagem de programação que deseja conhecer.</p>';
        section.innerHTML = '<p style="font-size: 2rem; font-weight: bold; text-align: center; text-shadow: 2px 2px 4px #fff;">Busca vazia.<br>Digite a linguagem de programação que deseja conhecer.</p>';

        return;
    };

    campoPesquisa = campoPesquisa.toLowerCase(); // Converte o texto da pesquisa para minúsculas
    
    let resultados = ''; // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let linguagem = '';  // Inicializa uma string vazia para armazenar a linguagem encontrada
    let descricao = '';  // Inicializa uma string vazia para armazenar a descrição encontrada
    let tags = '';       // Inicializa uma string vazia para armazenar as tags encontrada
    
    // Itera sobre a lista de dados e constrói o HTML dos resultados
    for (let dado of listaDados) {
        linguagem = dado.linguagem.toLowerCase(); // Converte o texto da pesquisa para minúsculas
        descricao = dado.descricao.toLowerCase(); // Converte o texto da pesquisa para minúsculas        
        
        // Se existir 'tags', converte o texto da pesquisa para minúsculas
        tags = dado.tags ? dado.tags.toLowerCase() : ''; 
        
        // Verifica se a linguagem contém o termo de pesquisa
        if(linguagem.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            // Adiciona o resultado à lista de resultados
            resultados += `
                <div class="item-resultado">
                    <h3>
                        <a href="#" target="_blank">${dado.linguagem}</a>
                    </h3>
                    <p class="descricao-meta">${dado.descricao}</p>
        
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        };
    };

    //Valida se a linguagem não foi encontrada 
    if(!resultados){
        section.innerHTML = '<p style="font-size: 2rem; font-weight: bold; text-align: center; text-shadow: 2px 2px 4px #fff;">Linguagem não encontrada.</p>';
        return;
    };
        
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
};
