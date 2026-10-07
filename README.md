# 📊 Gestão Financeira Pessoal

Uma aplicação web leve, moderna e responsiva para controlo de finanças pessoais, planeamento de despesas e acompanhamento de metas financeiras.

---

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da aplicação.
- **Tailwind CSS v4:** Estilização utilitária e responsiva.
- **JavaScript (ES6+):** Lógica dinâmica de cálculo e manipulação da interface.
- **Nginx (Alpine):** Servidor web estático e de alto desempenho.
- **Docker & Docker Compose:** Containerização do ambiente de execução.

---

## 📁 Estrutura do Projeto

```text
Projeto01/
├── css/
│   └── output.css       # CSS compilado pelo Tailwind CLI
├── js/
│   └── app.js           # Lógica da aplicação
├── .dockerignore        # Arquivos ignorados pelo Docker
├── .gitignore           # Arquivos ignorados pelo Git
├── compose.yml          # Configuração do Docker Compose
├── Dockerfile           # Imagem Nginx Alpine para servir os estáticos
├── index.html           # Página principal
├── input.css            # Diretiva principal do Tailwind (@import "tailwindcss")
└── package.json         # Dependências do Node (Tailwind CLI)
