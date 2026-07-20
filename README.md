# Pré-Venda GTA VI - Atividade 4

Landing page desenvolvida para a atividade 4 e 5 do curso +praTi com o tema: Registro de interesse na pré-venda do jogo Grand Theft Auto VI (GTA VI) no Brasil. O projeto integra conceitos de HTML5, CSS3, JavaScript assíncrono e controle de versão com Git.

## 🚀 Funcionalidades

*   **Consumo de API Externa:** Integração nativa com a API do `ViaCEP` utilizando `fetch` e `async/await`. Os campos de endereço (Rua, Bairro, Cidade e UF) são preenchidos automaticamente após o preenchimento do CEP e a perda de foco do campo (`blur`).
*   **Rolagem Suave:** O botão de chamada para ação (CTA) "Saiba Mais" utiliza JavaScript (`scrollIntoView`) para mover a tela suavemente até a seção de informações do jogo.
*   **Formulário de Contato e Inscrição:** Captura de dados essenciais (Nome, E-mail e Mensagem) com validação nativa e exibição de alerta de agradecimento customizado ao finalizar o envio.
*   **Design Temático e Responsivo:** Identidade visual inspirada na estética neon de Vice City (GTA VI), totalmente adaptada para telas de computadores e dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica da página.
*   **CSS3:** Estilização customizada, paleta de cores harmoniosa e regras de responsividade.
*   **JavaScript (ES6+):** Manipulação do DOM, eventos (`click`, `blur`, `submit`) e requisições assíncronas.
*   **Git & GitHub:** Controle de versão utilizando fluxo de branches (`main` e `develop`).

## 📁 Estrutura do Projeto

```text
├── index.html
├── script.js
├── style.css
├── gtaimg2.JPG
└── README.md