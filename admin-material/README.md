# Admin Material

Este documento tem o objetivo de especificar e padronizar os procedimentos utilizados e descrever o processo adotado para o desenvolvimento da aplicação, utilizando as boas práticas de mercado. É de suma importância que as instruções aqui presentes sejam seguidas para facilitar questões de manutenabilidade.


## ✒️ Autores

Seguem abaixo todos os responsáveis pela elaboração, criação e aplicação do projeto apresentado neste repositório.
**Anderson Nunes** - *Trabalho Inicial / Documentação*



## Documentação da API
* [Swagger](https://api-docs/swagger/)  - Documentação dos endpoints



## Endpoints
Lista os endpoints disponíveis

### Home
-   [GET]   /home/modules



## 🛠️ Tecnologias Envolvidas

* [React Js](https://pt-br.reactjs.org/)            - Frontend Framework para aplicações do tipo SPA
* [TypeScript](https://www.typescriptlang.org/)     - Javascript Super Set
* [Material UI](https://mui.com/)                   - CSS Framework Google
* [Node Js 17.1.0](https://nodejs.org/en/docs/)     - Linguagem Backend para executar código Javascript fora do browser
* [Eslint](https://eslint.org/)                     - Ferramenta para análise de código Js
* [Github](https://docs.github.com/)                - Tecnologia CI/CD usada para repositório e versionamento


## 🚀 Preparando o ambiente

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

```bash
# Clone o projeto para sua máquina
$ git clone https://github.com/DrConsulta/qa-sitebff-robot.git

# Acessar a branch
$ git checkout origin
```



## 📋 Pré-requisitos

Quais ferramentas serão necessárias para poder executar os testes localmente?

-   **[Download do Python 3.10](https://www.python.org/downloads/)**

Após a instalação, execute o comando a seguir:

```bash
# Para verificar se a instalação do python foi feita com sucesso
$ python --version

# Para verificar se o pip foi instalado
$ pip --version
```

-   **[Download do VsCode](https://code.visualstudio.com/download)**

Extensões do **VSCode**

- **Material Icon Theme**

Ferramentas Opcionais

-   **[Download do CMDER](https://cmder.net/)**
-   **[Download do Postman](https://www.postman.com/downloads/)**



## 🔧 Instalação do Robot Framework 5.0

Agora que temos o projeto disponível em nossa máquina e todas as ferramentas, vamos mostrar aqui como instalar alguns recursos que poderão nos ajudar no processo de automação. Para instalar o Robot Framework execute o comando a seguir:

```bash
# Comando para instalar o robot framework
$ pip install robotframework

# Para verificar se a instalação foi feita com sucesso
$ robot --version 
```



### Instalando as Libraries do nosso projeto.

Dentro do projeto, temos um arquivo chamado **package.json**. Este arquivo contêm todas as libraries (dependências de projeto) que serão necessárias para que possamos executar nossa aplicação sem problemas.

Quais as libraries necessárias?

    Dependências Globais
-    **"@emotion/react": "^11.10.5"**
-    **"@emotion/styled": "^11.10.5"**
-    **"@mui/icons-material": "^5.11.0"**
-    **"@mui/material": "^5.11.4"**
-    **"@mui/system": "^5.11.2"**
-    **"react": "^18.2.0"**
-    **"react-dom": "^18.2.0"**
-    **"react-router-dom": "^6.6.1"**
-    **"react-scripts": "^5.0.1"**

    Dependências de Desenvolvimento
-    **"@testing-library/jest-dom": "^5.16.5"**
-    **"@testing-library/react": "^13.4.0"**
-    **"@testing-library/user-event": "^13.5.0"**
-    **"@types/jest": "^27.5.2"**
-    **"@types/node": "^16.18.11"**
-    **"@types/react": "^18.0.26"**
-    **"@types/react-dom": "^18.0.10"**
-    **"@typescript-eslint/eslint-plugin": "^5.48.0"**
-    **"@typescript-eslint/parser": "^5.48.0"**
-    **"eslint": "^8.31.0"**
-    **"eslint-plugin-react": "^7.31.11"**
-    **"json-server": "^0.17.1"**
-    **"typescript": "^4.9.4"**
-    **"web-vitals": "^2.1.4"**

### Onde encontrar as libs

-   **[json-server](https://www.npmjs.com/package/json-server)**
-   **[axios](https://www.npmjs.com/package/axios)**





```bash
# Para instalar uma nova library
$ pip install <nome_library>

# Para verificar as libraries instaladas
$ pip freeze

# Para gerar o arquivo requirements.txt a partir das libraries instaladas
$ pip freeze > requirements.txt

# Para reinstalar todas as libraries do projeto
$ pip install -r requirements.txt

```



## 📦 Arquitetura

Aqui iremos apresentar a arquitetura padrão do nosso projeto. A arquitetura de forma geral foi criada utilizando **Page Objects** pensando na fácil compreensão de todos que trabalharem com a automação. Focados em uma arquitetura limpa e que exigisse uma curva de aprendizado menor, chegamos a seguinte arquitetura:


Estrutura de Pastas que fazem parte do projeto:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/HqJPfbP/estrutura-pastas.png" alt="estrutura-pastas" border="0"></a>

-   **api:**  Pasta responsável por armazenar todo o core do projeto como, configurações, massa e keywords do projeto como um todo.
-   **data:** Pasta que possui as massa de dados e mensageria dos testes como, credenciais de acesso ou validação de mensagens de erro ou sucesso.
-   **json:** Pasta contendo os payloads enviados nas requisições que precisam de um body, separadas por features.
-   **keywords:** Pasta com as keywords do projeto, separadas por features.
-   **reports:** Pasta responsável por armazenar todos os logs / reports pós execução e evidências.
-   **schemas:** Pasta contendo os schemas para validação da tipagem de dados de cada endpoint, separadas por features.
-   **tests:** Pasta responsável por armazenar os cenários BDD's de execução, separadas por features.


## ⚙️ Executando os testes

Para executarmos os testes, precisamos abrir o terminal integrado na pasta raiz do projeto.
Neste caso a raiz é a pasta qa-sitebff-robot.

#### Primeiro passo:

Vamos abrir o cmder (ou o terminal de sua preferência) e navegar até a pasta do projeto.

#### Segundo passo:

Para executarmos toda a suíte de testes existentes no projeto, devemos executar o seguinte comando:

```bash
# Comando para executar todos os testes do projeto
$ robot -d ./reports tests
```

Já para executarmos uma feature específica, devemos informar qual .robot queremos executar. Exemplo:

```bash
# Comando para executar features específicas
$ robot -d ./reports tests/site/Home.robot
```

Também podemos executar cenários específicos, desde que os mesmos possuam uma Tag única. 
Cada cenário possui uma ou mais tags, o que permite que sejam executados de maneira independente e agrupados de maneira específica.
Para isso, inserimos o comando -i e em seguida a tag que desejamos executar. Exemplo:

```bash
# Comando para executar um teste específico através de sua tag.
$ robot -d ./reports -i Smoke tests/site/Home.robot
```

Caso queira alterar o local onde os logs são salvos, basta ajustar o caminho após o -d.
Exemplo: Iremos passar no comando que os tests/logs serão salvos na pasta reports/home:

```bash
# Alterar o caminho após o -d
$ robot -d ./reports/home tests/site/Home.robot
```



## ℹ️ Boas Práticas

Pensando em boas práticas e padrões de desenvolvimento, levantamos alguns itens que devem ser seguidos a risca para que possamos ter êxito na questão de Design Patterns.

**Essas praticas consistem em:**

- **BDD:** Usar as features sempre em terceira pessoa [Advérbio + sujeito + verbo (Quando for ação)].
- **Variáveis:** Sempre criar dicionários e variáveis com letras maiusculas.
- **Keywords:** Todo texto validado não deve ser adicionado direto nas keywords. É esperado que o texto ou mensagem a serem validadas sejam armazenadas em variáveis.
- **Git:** É esperado que ao concluirmos o desenvolvimento, seja realizado um pull request para a branch develop. Após a aprovação do pull request, a branch de trabalho deverá ser excluída.



## 📌 Changelog

 - Upload inicial do Projeto
Instalação do json-server - https://www.npmjs.com/package/json-server
Instalação do axios - https://www.npmjs.com/package/axios







# Getting Started with Create React App 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
