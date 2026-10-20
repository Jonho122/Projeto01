# Planejador de Economia Pessoal

Aplicação web leve e responsiva para acompanhar depósitos de poupança e comparar o total guardado com uma meta de economia. Os depósitos podem ser editados direto na página, e todos os resultados são recalculados na hora.

# Funcionalidades
Lista de depósitos gerada pelo JavaScript a partir de um array, com um campo editável para cada valor.
Recálculo automático a cada alteração: total guardado, média por depósito, quantidade de depósitos que atingiram o mínimo, quanto falta (ou quanto passou) da meta e percentual da meta.
Classificação do progresso:
Iniciando: abaixo de 50% da meta
No caminho: de 50% a 99% da meta
Meta atingida: 100% ou mais
Navegação por âncoras entre as seções: Propósito, Dicas, Resultados e Dados.
Layout responsivo com Tailwind CSS.

## Tecnologias

HTML, Tailwind CSS, JavaScript, Nginx e Docker.

## Estrutura

```text
Projeto01/
├── css/
│   ├── input.css     # entrada do Tailwind
│   ├── output.css    # CSS gerado pelo Tailwind
│   └── style.css     # estilos próprios
├── src/
│   ├── index.html    # estrutura da página
│   └── script.js     # lógica e cálculos
├── compose.yaml      # configuração do Docker Compose
├── Dockerfile        # build do Tailwind e servidor Nginx
└── package.json      # dependências do Tailwind
```

## Como executar

Com o Docker Desktop aberto:

```bash
docker compose up --build
```

Acesse: http://localhost:8080