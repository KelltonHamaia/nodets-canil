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

<!--?--------------------------------------------------------------------------->

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

<!--?--------------------------------------------------------------------------->

<!-- * Aula 7 -  Ativando o menu : primeira forma - Enviando um objeto na controller
! Criar um objeto chamado menu e envia-lo.
! Dentro do objeto, teremos booleans: all, dogs, cats, fishes
! Cada um dos <li> terão uma verificação dentro do class="" referente ao seu tipo do menu.
_  <li class=" {{#menu.all}} active {{/menu.all}}"><a href="/">Todos</a></li>
_ Se menu.all for verdadeiro, aplicar classe ativa em "todos"
-> depois, pra dogs, cats, fishes
-->

<!-- !Essa aqui é melhor -->
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

<!--?--------------------------------------------------------------------------->

<!-- * Aula 8 - Criando o MODEL PET - Parte 1 
-> Teremos um unico model que controlará os os pets -> cobre cachorro, gato, peixe.

-> Na pasta models: Criar um arquivo chamado pet.ts
! Normalmente colocam o nome da model em pascal case,
! Mas não faz diferença, é gosto pessoal.

-> O model será um objeto que tem funções que realizam ações com o pet. 
    * -> Pegar todos os pets -> Todo mundo, tela inicial
    * -> Filtrar os pets pelo tipo (cachorro, gato)
    * -> Filtrar os pets pelo nome da raça

-> Criar e exportar um objeto chamado Pet    
! Como não "sabemos" usar banco de dados aqui, vamos simular a recuperação de dados de um DB,
! Através de um array de objetos, onde nele, terá os pets.
-> O nome do array será DATA.

! Por estarmos trabalhando com dados, devemos TIPAR eles para não dar problema.
! O tipe será "Pet" e vai ser um objeto, onde teremos o nome da chave, e no valor, os tipos aceitos.

* Logo, o objeto que estamos exportando deve ter seu tipo definido como um array de Pet.

 ! PRIMEIRA FUNÇÃO - PEGAR TODOS OS PETS:  
 -> getAll -> retorna todos os pets, ou seja, o array DATA. Pode tipar o retorno da função para Pet também
 
-->

<!--?--------------------------------------------------------------------------->


<!-- -> Aula 9 - Criando o MODEL PET - Parte 2 
* Criar uma função para filtrar o pet pelo TIPO [cachorro, gato, peixe]
! Essa função só aceita 3 parâmetros: dog, cat, fish -> então devemos DAR OS TYPES 
* Poderiamos colocar que o parametro seria: getFromType: (type: 'dog' | 'cat' | 'fish'),
! Mas repetir o codigo pode ser desgastante, vamos apenas criar um novo type para esse parametro e usá-lo.
_ O nome do type será PetType -> E o retorno será do type Pet, pois retornará um array de Pet.
-> Essa função vai rodar um FILTER, onde veremos se o item.type for igual o type passado no parametro da funçao
-> Se sim, retorne true, ouseja, retorne esse item para o array, se não, retorne falso.

* Criar uma função para filtrar o pet pelo NOME.
! Essa função aceita qualquer parametro que seja do type STRING.
-> Atenção: data.filter.indexOf(name) => retorna o indice de um caractere ou strings em uma palavra.
-> Se ele encontra o indice, então sempre será maior ou igual a zero.
-> Se o indice for -1, ele não existe, ou seja, a consulta não retorna nada.
-> IMPORTANTE AQUI -> indexOf é case sensitive, então por isso tem o toLowerCase na função,
_ Se no banco o nome era 'Batata' e eu procuro por 'b', apesar de ter a letra b, ele retorna -1
_ Pois os cases são diferentes.
-->

<!--?--------------------------------------------------------------------------->

<!-- ! Aula 10 - Listando os pets no controller 
-> Usaremos a model dentro da pageController -> Importar.
* Na rota de cada pet, antes de renderizar a página, vamos receber todos os dados dos animais.
-> O recebimento se dá pela chamada das funções Pet.getFromType('dog' ou 'cat' ou 'fish')
-> ou para pegar todos pet.getAllPets();
* Salvar o retorno das funções na variavel LIST e a envia na rota, junto dos outros objetos.
-> Agora temos acesso aos itens da lista, então poderemos renderizá-los na pagina.   
_ Para usar, abrir e fechar bloco de if {{#lista}} conteudo {{/lista}}
_ E para usar os valores do objeto, apenas dizemos o nome da chave, sem o objeto em si. 

! Agora falta apenas replicar 
-->

<!--?--------------------------------------------------------------------------->

<!-- _ Aula 11 - Fazendo a busca e o 404 
-> Faremos a busca [rota de pesquisa funcionar]
-> Faremos a pagina 404 [rota de página não encontrada!]

* no searchController: 
* Vamos importar o Pet do model de PET, onde tem as funções e dados.
* Vamos importar o createMenuObject da helper 'createMenuObject'.
-> Ele não possui banner, vamos reaproveitar o arquivo page.mustache.
-> Ele nem mostra o banner pois não vamos enviar o objeto 'banner' na rota.

-> No objeto enviado, mandaremos o menu createMenuObject('') vazio
-> Como o search vai jogar na url uma query,
-> podemos pegar o que o usuario pesquisar e salvar numa variável.

* A PARTIR DO QUE O USUARIO DIGITAR, PODEMOS MONTAR NOSSA LISTA.
! Usando a funcao pet.getFromName() e como parametro, passamos o que o usuario estava pesquisando. 
* Salvamos o resultado da funcao na variavel list e enviamos no objeto da rota
-> Com isso, conseguimos montar o layout.
_ Mas e se ele fizer uma pesquisa que não retorna nada?
! Criamos um else no mustache {{^list}} codigo_a_ser_renderizado {{/list}}
! E dentro dele, criamos um codigo que será renderizado caso tal informação não exista.


_ Quando uma busca é feita por input search, normalmente o texto se mantem na box do input.
_ Para que isso aconteca, vamos pegar o que foi pesquisado (variavel QUERY) e reenviar no objeto da rota
* Por fim, vamos passar o valor para dentro do "VALUE" do input no header.mustache
_Nele não precisa de um if else, só o fato de ter {{#list}} já faz a verificação simples

-> :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

-> Criando a página 404.mustache
-> Não poderá ser reaproveitada a page.mustache.
* Criar uma pagina nova: 404.mustache
_ Essa página vamos apenas copiar o conteudo de page.mustache, porem vamos remover:
! remover banner
! Esvaziar a div container list, referente aos locais onde apareciam os cards dos pets
! Modificamos o texto da div container no-list para "página não encontrada"

-->

<!-- -> Aula 11 - extra - redirecionamento caso input search esteja vazio
-> No searchController, pegamos atraves de req.query.q o valor enviado do input.

! então, podemos fazer uma verificação, sendo ela:
_ Se não houver valor algum na variavel que armazena o valor de query, ou seja
_ if(!query) {
->    res.redirect('/');    
->    return;  
_}
* redirecione o usuario para a pagina home
* o return serve para parar a execução da função ou vai dar o erro: 
_ "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"
-->

`Commit final`

<!-- ! Aula 12 - Colocando o projeto no ar: Parte 1 {{#313536}}
_ IMPORTANTE _
! Como nosso projeto foi feito em TYPESCRIPT, ra colocar no ar, é necessario converter ele pra JAVASCRIPT 
* Para isso, vamos no arquivo de configuração do typescript: 
-> rootDir -> A pasta src, Onde foi criado o projeto
-> outDir -> A pasta dist, Onde ficará o projeto convertido pra javascript

-> Faremos o deploy na RAILWAY, mas primeiro vamos configurar o projeto.
_ Acessar o package.json e nele alterar algumas coisas:
_ Criar um objeto após index.js chamado engines.
    -> Criar a chave node e passar a versão do node utilizada (abrir terminal e ver através do node -v)
    -> foi usado o node 18.12.1, mas pode sibstituir por 18.x que funciona

-> Criar um arquivo chamado Procfile sem extensão nem nada.
_ nele especificamos configurações de como rodar o projeto.
* Dizemos que o peojeto é pra web e o comando será npm start
    ! web: npm start
    * Para isso criar o script de start
    * Nesse script rodamos node dist/server.js
    * dist pois é o projeto já compilado pra js

_ Criar outro script chamado "postinstall" no package.json
_ Para isso, instalar uma lib chamada copyfiles como dev-dependencies
_ Ela será necessaria para copiar a pasta views para a pasta dist
    ! "postinstall": " tsc && copyfiles -u 1 /src/**/*.mustache dist/  
    * tsc transpila o typescript para javascript.
    * copyfiles ... copia todos os arquivos de src que for .mustache
    ! E os colocam na pasta dist
-->

<!-- -> Aula 13 -  Colocando o projeto no ar: FINAL
    -> instalar o typescript dentro do projeto.
    -> Apesar de ter ele global, ele é global apenas na SUA maquina.
* No package.json, criar mais um script:
->    "tsc": "tsc"
* E modificar o postinstall para :
->    "postinstall": "npm run tsc && copyfiles -u 1 src/**/*.mustache dist/",

-->


<!-- !IMPORTANTE!

-> usa o Railway que é gratuito e até mais fácil de usar, façam todos os passos da aula 01 , com adição do install do typescript que ele tinha esquecido e lembrou nessa aula, já comita e dê o push pro github.
-> Depois você cria a conta no Railway(não precisa de toda essa verificação chata do Heroku), vincula sua conta com o github, vai em new project -> deploy from github repo -> deploy now, e seja feliz
 -->