# Next.js Template com TypeScript e Tailwind CSS

Este repositório é um template para projetos com [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/) e [Tailwind CSS](https://tailwindcss.com/), configurado com boas práticas de formatação e linting usando [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [lint-staged](https://github.com/okonet/lint-staged) e [Husky](https://typicode.github.io/husky/).

## Features

- ⚡ **Next.js** — Framework React para aplicações web rápidas e otimizadas.
- 🎨 **Tailwind CSS** — Estilização utilitária para criar interfaces responsivas rapidamente.
- 🔧 **TypeScript** — Tipagem estática que melhora a qualidade do código e previne erros.
- 🛠️ **ESLint & Prettier** — Configurados para garantir a consistência de código e boas práticas.
- 🧹 **lint-staged & Husky** — Executa verificações automáticas de código antes de commits, garantindo a qualidade do código enviado para o repositório.
- 📋 **.editorconfig** — Configuração de editor para garantir consistência de formatação entre diferentes IDEs e editores de texto.

## Requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/) v14.0 ou superior
- [Yarn](https://yarnpkg.com/) (ou npm)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://https://github.com/lucasrguidi/guidi-template.git

   ```

2. Instale as dependências:

   ```bash
   cd guidi-template
   yarn install

   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   yarn dev
   ```

O projeto estará disponível em http://localhost:3000.

## Scripts

- `yarn dev`: Inicia o servidor de desenvolvimento.
- `yarn build`: Gera a build de produção.
- `yarn start`: Inicia o servidor com a build de produção.
- `yarn lint`: Executa o linter para verificar o código.
- `yarn format`: Formata o código com Prettier.

## Configuração de Lint e Formatação

Este template já vem pré-configurado com as seguintes ferramentas para manter a qualidade do código:

- **ESLint**: Linting para JavaScript/TypeScript.
- **Prettier**: Formatação automática de código.
- **lint-staged**: Executa o lint e formatação nos arquivos que foram alterados antes de realizar o commit.
- **Husky**: Configura hooks de Git para executar verificações automáticas antes de commit e push.

Os hooks estão configurados da seguinte forma:

- `pre-commit`: Executa `lint-staged` para checar e formatar apenas os arquivos alterados.

## Estrutura de Pastas

```bash
.
├── public          # Arquivos públicos (imagens, fontes, etc.)
├── src
│   ├── app
│   │   ├── fonts   # Arquivos de fontes utilizados no projeto
│   │   ├── layout.tsx  # Arquivo de layout principal do projeto
│   │   └── page.tsx    # Página principal do projeto
│   ├── styles      # Arquivos de estilo global e Tailwind
├── .editorconfig   # Configuração do editor
├── .eslintrc.json  # Configuração do ESLint
├── .prettierrc.json # Configuração do Prettier
├── husky          # Configuração do Husky para hooks de Git
└── tsconfig.json   # Configuração do TypeScript
```

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça o commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie suas alterações para a branch criada (`git push origin feature/nova-feature`).
5. Abra um Pull Request para análise.

## Licença

Este projeto está licenciado sob a Licença MIT.
