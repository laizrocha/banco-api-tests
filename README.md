# Banco API Tests

Projeto de automação de testes de API REST desenvolvido em JavaScript para validar os endpoints e as regras de negócio da aplicação [Banco API](https://github.com/laizrocha/banco-api).

Repositório dos testes: [laizrocha/banco-api-tests](https://github.com/laizrocha/banco-api-tests)

## Objetivo

Automatizar verificações das respostas da API, incluindo códigos HTTP, conteúdo retornado e regras de negócio. A suíte usa requisições HTTP automatizadas e asserções para tornar as validações repetíveis e facilitar a identificação de regressões.

A API sob teste oferece funcionalidades bancárias, como autenticação, consulta de contas e transferências. Consulte o [repositório da aplicação](https://github.com/laizrocha/banco-api) para detalhes sobre suas regras e configuração.

## Stack utilizada

- **JavaScript / Node.js** — linguagem e ambiente de execução.
- **Mocha** — execução e organização dos testes.
- **Supertest** — envio de requisições HTTP para a API.
- **Chai** — asserções para validar resultados esperados.
- **dotenv** — carregamento de variáveis de ambiente a partir do arquivo `.env`.
- **Mochawesome** — geração de relatório HTML dos resultados dos testes.
- **npm** — instalação de dependências e execução dos scripts.

As dependências e suas versões declaradas estão no [`package.json`](https://github.com/laizrocha/banco-api-tests/blob/main/package.json).

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (o npm é instalado junto com o Node.js).
- [Git](https://git-scm.com/) para clonar os repositórios.
- A aplicação Banco API em execução e acessível pela URL configurada em `BASE_URL`.
- Banco de dados e demais configurações da aplicação sob teste preparados conforme as instruções do [README da Banco API](https://github.com/laizrocha/banco-api#readme).

## Instalação e configuração

### 1. Clone o repositório de testes

```bash
git clone https://github.com/laizrocha/banco-api-tests.git
cd banco-api-tests
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Crie o arquivo `.env`

O arquivo `.env` deve ser criado manualmente na raiz do projeto, no mesmo nível do `package.json`. Ele contém as variáveis de ambiente utilizadas pelos testes. Não é necessário versioná-lo no Git.

Crie um arquivo chamado `.env` com este formato:

```dotenv
BASE_URL=http://localhost:3000
```

`BASE_URL` é a URL-base da API que será testada. Ajuste o valor conforme o ambiente em que a aplicação estiver rodando. Não inclua aspas nem uma barra final, a menos que a implementação dos testes exija isso.

Por exemplo, se a API REST estiver disponível em outra máquina ou porta, informe a URL correspondente:

```dotenv
BASE_URL=http://servidor:3000
```

> **Importante:** a aplicação Banco API documenta a API REST na porta `3000`. Antes de executar os testes, confirme que o serviço está ativo e que a URL configurada pode ser acessada a partir da máquina que executa a automação.

## Como executar os testes

Na raiz do repositório `banco-api-tests`, execute:

```bash
npm test
```

Esse comando utiliza o script definido no `package.json`:

```bash
mocha ./test/**/*.test.js --timeout=20000 --reporter mochawesome
```

O comando procura arquivos de teste com a extensão `.test.js` dentro de `test/` e subdiretórios, define um timeout de 20 segundos e usa o Mochawesome como reporter.

## Relatório HTML (Mochawesome)

Ao final da execução, o Mochawesome gera um relatório HTML com o resultado dos testes. Com a configuração padrão do reporter, os arquivos são gravados no diretório `mochawesome-report/`, normalmente com estes nomes:

- `mochawesome-report/mochawesome.html` — relatório navegável em HTML.
- `mochawesome-report/mochawesome.json` — dados do relatório em JSON.

Abra `mochawesome-report/mochawesome.html` em um navegador para consultar os resultados. O relatório permite identificar testes aprovados e falhos e analisar informações da execução.

Se o projeto tiver uma configuração local do Mochawesome que altere o diretório ou o nome do arquivo, siga os valores definidos nessa configuração.

## Estrutura de diretórios

Estrutura principal observada no repositório:

```text
banco-api-tests/
├── fixtures/             # Dados e arquivos de apoio utilizados pelos testes
├── helpers/              # Funções auxiliares reutilizáveis
├── test/                 # Casos de teste automatizados (*.test.js)
├── .gitignore            # Arquivos e diretórios ignorados pelo Git
├── package.json          # Dependências e comando npm test
├── package-lock.json     # Versões resolvidas das dependências
├── .env                  # Criado localmente pelo usuário; não deve ser versionado
└── mochawesome-report/   # Relatórios gerados durante a execução (padrão do reporter)
```

Os diretórios `.env` e `mochawesome-report/` são apresentados para explicar os arquivos usados ou gerados localmente; eles podem não aparecer no repositório remoto. O conteúdo exato de `fixtures/`, `helpers/` e `test/` pode evoluir conforme novos cenários forem adicionados.

## Dependências e documentação oficial

| Ferramenta | Finalidade | Documentação |
|---|---|---|
| Node.js | Ambiente JavaScript | [nodejs.org/docs](https://nodejs.org/docs/latest/api/) |
| npm | Gerenciamento de pacotes e scripts | [Documentação do npm](https://docs.npmjs.com/) |
| Mocha | Test runner | [mochajs.org](https://mochajs.org/) |
| Supertest | Testes HTTP | [Repositório e documentação do Supertest](https://github.com/ladjs/supertest) |
| Chai | Asserções | [chaijs.com](https://www.chaijs.com/) |
| dotenv | Variáveis de ambiente | [dotenv no npm](https://www.npmjs.com/package/dotenv) |
| Mochawesome | Relatórios HTML para Mocha | [Mochawesome no npm](https://www.npmjs.com/package/mochawesome) |

## Repositórios relacionados

- **Projeto de testes:** [https://github.com/laizrocha/banco-api-tests](https://github.com/laizrocha/banco-api-tests)
- **API sob teste:** [https://github.com/laizrocha/banco-api](https://github.com/laizrocha/banco-api)

## Observações

- Execute `npm install` sempre que clonar o projeto pela primeira vez ou quando as dependências forem atualizadas.
- Verifique se a `BASE_URL` aponta para a instância correta da API antes de rodar a suíte.
- Não compartilhe nem versione arquivos `.env` que contenham credenciais, tokens ou outras informações sensíveis.
- O relatório é um artefato gerado pela execução; não precisa ser criado manualmente.
