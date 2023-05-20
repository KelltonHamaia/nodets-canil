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

<!-- * Aula 5 -  SEPARANDO AS VIEWS -->
<!-- ! Vamos subir algumas da alterações pro git:

1° - git add . -> Deixando todo mundo pronto pra dar commit
2º - git commit -am "base criada ->" Dar o commit
3° - git push  -> Envia pro repositorio remoto (github)

-->

<!-- * Separando as views do HTML  
-> na pasta views, criar:

* pasta PAGES -> Referente as páginas que teremos 
! pasta PARTIAL -> Referente aos includes (header, footer, menu)

-->

<!-- -> Na pasta PARTIALS
! Criar o arquivo header.mustache e footer.mustache
-->

<!-- -> PARTIALS: HEADER
* Header: pegar do html e jogar Desde o doctype até o final da nav.
* Adicionado / nos href's do header para que ele começe a partir da raiz do projeto;
* No action do formulario, adicionado a rota dele, /search
* Adicionado as rotas nos links das nav's referentes as suas rotas  
-->

<!-- -> PARTIALS: FOOTER
! Footer: Colorcar o footer do arquivo html e os fechamentos de body e html no arquivo footer.mustache

-->

<!-- ! NA PASTA PAGES:

* Criar a pagina page.mustache
* Como o site todo só tem uma página, vamos ter apenas uma view, 
! A própria home.
! Ela vai mudar de acordo com os dados enviados.

-->

<!-- _ No arquivo PAGES.MUSTACHE

* Colar o restante do arquivo html sem os head, menu e body.
_ INCLUIR OS PARTIALS
_{{>PARTALS/HEADER}} -> INCLUI O HEADER
_{{>PARTALS/FOOTER}} -> iNCLUI O FOOTER

-> Deixar apenas uma unica div de animal, pois vamos popular a tela usando as funções
-->

<!-- -> Aula 6 -  Modificando  dados em cada página: 
-> Modificar o fundo e o texto do banner (h2)
-> Modificar o animal pra adoção

* Na pageController: 
* Na hora do envio pra rota, enviar um objeto com:
_ title: Titulo da pagina  e background será o banne referente a pagina (allanimals = home)

-> Este objeto servirá para deixar as páginas com informações dinamicas.
* Se o objeto for enviado, então usar a informação de banner na section
* ou ela não vai aparecer.
-> Onde for trocar as informações, passar o nome do objeto e a chave.

! Fazer isso para todas as funções em controller, 
! trocando as informações do objeto pela respectiva informação da função.
_ gatos => usar informações de gato: title: "gato", background: "banner_cat.jpg"
-->

<!-- * Aula 7 -  Ativando o menu : primeira forma - Enviando um objeto na controller
! Criar um objeto chamado menu e envia-lo.
! Dentro do objeto, teremos booleans: all, dogs, cats, fishes
! Cada um dos <li> terão uma verificação dentro do class="" referente ao seu tipo do menu.
_  <li class=" {{#menu.all}} active {{/menu.all}}"><a href="/">Todos</a></li>
_ Se menu.all for verdadeiro, aplicar classe ativa em "todos"
-> depois, pra dogs, cats, fishes
-->

<!-- -> Aula 7 -  Ativando o menu : segunda forma - Enviando um objeto na controller
! Vamos criar uma função que vai gerar os objetos de menu:
* Ao invés de ficaar repetindo o mesmo objeto várias vezes no código
-> Vamos usar uma função que cria esse objeto.
-> Essa função se chama HELPER -> CRIAR UMA PASTA HELPER
-> A pasta helper possui funções auxiliares

* Criar um arquivo chamado 'createMenuObject.ts' - Esse arquivo exporta a função createMenuObject.
* Lá terá a função que retorna o objeto.
-> Essa função recebe como parametro um menu ativo.
-> Esse menu é fixo, logo, podemos tipar ele.
-> Criaremos o nosso proprio tipo, onde ele pode ser: 
_ '', all, dogs, cats, fishes -> por padrão, todos são false.
-> Usamos um if para ver se o que foi recebido na função bate com alguma chave do objeto.
-> Se sim, pegamos o objeto e usando colchetes, acessamos a chave relativa ao que foi recebido na função e mudamos seu valor para true.
->  Por fim retornamos o objeto.

-> Com a função criada, basta importar o arquivo da função e usa-lo.
-->