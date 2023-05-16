<!--* AULA 2 -  CRIANDO REPOSITORIO -->
<!--! Nome do repositorio:  nodets-canil 
 - Criamos o readme para deixar os guias para uso do projeto
 - Criamos o gitignore usando template do node 
    - Bloqueia a inserção da pasta node_modules
    - e evita o uso das variáveis de ambiente.
- link do repositorio: https://github.com/KelltonHamaia/nodets-canil
- Clonado o repositório na pasta 02-projeto-canil
-->

<!--! iniciando o typescript e node no projeto
 comandos em ordem:
 1 - npm init -y -> Inicia o node
 2 - tsc --init -> cria arquivo de configuração do typescript
    - target deve ser ECS6
    - rootdir deve ser "./src"
    - outdir deve ser "./dist"
    - moduleResolution deve ser "node" -> ts vai saber que estamos mexendo com node
-->

<!--* Instalando as dependências do projeto: 
instalando as dependências na ordem: 
- npm install express 
- npm install mustache-express 
- npm install dotenv 
    - pode resumir em uma linha só:
    - npm install express mustache-express dotenv
-->

<!-- -> Instalando as dependências de desenvolvimentos - os TYPES:
instalando as dependências de desenvolvimentos na ordem: 
- npm install --save-dev @types/express @types/mustache-express @types/node
-->

<!-- _ Criando a pasta SRC  e criando o arquivo de servidor:
- Dentro, teremos o arquivo [server.ts]   
-->

<!--! LÊ AQUI MULA >:[ No arquivo package.json, criar o atalho do nodemon:

<!-- -> nodemon -e ts,json,mustache src/server.ts 
    NAO PODE TER ESPAÇO ENTRE AS VIRGULAS
-->
-->

<!--?--------------------------------------------------------------------------->

<!--* AULA 3 -->
<!--! CRIANDO O SERVIDOR COM O EXPRESS:
- importar express, dotenv, mustache e path.
    - express pra iniciar o server
    - dotenv pra variavel de ambiente
    - mustache pra template engine        
    - path para pasta publica
-->
    
<!--* Criar servidor e habilitar variavel de ambiente
- Executar o dotenv.config() -> habilita o uso do arquivo dotenv
- executar o express() -> Cria o server
 -->
     
<!--* - configurar o template engine:
    - server.set('view engine', 'mustache'); -> define que a view será do mustache
    - server.set('views', path.join(__dirname, 'views')); -> define a pasta views
    - server.engine('mustache', mustache()); -> define a engine como mustache
-->

<!-- -> Definindo a pasta public 
- Fora de src, na raiz, criar  pasta [public]
- server.use( express.static( path.join(__dirname, '../public/') ));
    - Comando acima define uma pasta com arquivos estaticos (css, img);

-->

<!-- _ Criando pasta auxiliar para o HTML
    - nome da pasta: _html
    - jogar os arquivos HTML baixados na aula 1 nessa pasta
    - Pegar a pasta images e css e jogar na pasta PUBLIC
-->

<!--?--------------------------------------------------------------------------->

<!--* Aula 4 -  CRIANDO AS ROTAS E OS CONTROLLERS -->

<!-- ! Criação das rotas:
-> Criação da pasta routes na pasta [src]
-> Dentro da pasta routes, criar o arquvo index.ts, que terá as rotas 
-->

<!-- * No arquivo index.ts
-> importar e iniciar o Router.
-> Exportar a rota como default  

-->

<!-- ! Configurando as rotas  
-> Primeiro a rota home ou index- > '/'
-->

<!-- * No arquivo do servidor:
-> Importar as rotas e usar as rotas
_ import mainRoutes from './routes/index';
_ server.use(mainRoutes);

! Criar a rota de erro 404: 

-->

<!-- -> IMPORTANTE: CRIAÇÃO DOS CONTROLLERS 
* Na posta SRC, criar a pasta CONTROLLERS.
* Na posta SRC, criar a pasta MODELS.

-> Teremos 4 rotas para visualização e 1 para a busca do input
-> Teremos apenas 2 controllers:
    ! 1 Para todas as 4 páginas: todos, cachorros, gatos e peixes, pois são a mesma página -> pageController
    * 1 Para a busca do input -> searchController
-->

<!-- -> Criação da ESTRUTURA DOS CONTROLLERS 

-> Criando para que possamos usar os controllers na index.ts
-> No controller estão as funções que serão utilizadas nas rotas!
* Criando a rota da home e armazenando na variavel 'home', que será exportada e depois utilizada no index. 

! Importar o controllers pageController e searchController no arquivo de rotas para ser utilizado no index.

-->

<!-- -> CRIAÇÃO DAS ROTAS   
-> Nos controllers, criamos as rotas 
-> NO ARQUIVO INDEX.TS, definimos a url das rotas e falamos qual função do controller será utilizada.

-->

<!--?--------------------------------------------------------------------------->

<!-- * Aula 5 -  SEPARANDO AS VIEWS
! Vamos subir algumas da alterações pro git:

1° - git add . -> Deixando todo mundo pronto pra dar commit
2º - git commit -am "base criada ->" Dar o commit
-->

