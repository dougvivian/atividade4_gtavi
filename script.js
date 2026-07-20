let form = document.querySelector('#form-cadastro') 
let campoCep = document.querySelector('#cep') 

// evento para buscar o CEP quando o usuário sai do campo
campoCep.addEventListener('blur', async () => {
    let cep = campoCep.value.replace(/\D/g, '') // remove traços ou espaços se o usuário digitar

    if (cep.length !== 8) return // se não tiver 8 números, nem tenta buscar

    try {
        // conecta direto com a API do ViaCEP
        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let endereco = await resposta.json()

        // se o ViaCEP não encontrar o CEP, ele retorna um erro dentro do json
        if (endereco.erro) {
            alert('CEP não encontrado!')
            return
        }

        // preenche os campos do seu formulário com os dados da API
        document.querySelector('#logradouro').value = endereco.logradouro
        document.querySelector('#bairro').value = endereco.bairro
        document.querySelector('#cidade').value = endereco.localidade
        document.querySelector('#uf').value = endereco.uf

    } catch (error) {
        console.error('Erro ao buscar o CEP:', error)
    }
})

// evento para finalizar e dar o alerta
form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    let nome = document.querySelector('#nome').value
    let rua = document.querySelector('#logradouro').value
    let cidade = document.querySelector('#cidade').value

    alert(`Cadastro realizado com sucesso!\n\nUsuário: ${nome}\nRua: ${rua}\nCidade: ${cidade}`)
})

//evento ao clicar no botao saiba mais
let botaoSaibaMais = document.querySelector('#botao-saiba-mais')
botaoSaibaMais.addEventListener('click', () => {
    let secaoInfos = document.querySelector('.infos-jogo') // buscar pela classe com ponto
    secaoInfos.scrollIntoView({
        behavior: 'smooth' //efeito de rolagem que achei interessante
    })
})