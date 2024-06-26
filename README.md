# GameStore
Projeto criado no curso de graduação em Web Design.

<h2>Descrição do projeto: </h2>
Essa é uma releitura do projeto anterior, trazendo mais funções e um design mais robusto e moderno, respeitando a responsividade dos elementos com Bootstrap 5, utilizando o conceito de Mobile First com CSS e Media Query. 

Para dar mais movimento e contraste em nosso projeto, utilizamos o Bootstrap com JavaScript para incluir a opção de alterar entre o tema Dark (padrão) e o Light, podendo auxiliar pessoas com baixa visão. 

Optamos pela utilização da API de Geolocalização do Google, para que fique disponível a localização do escritório da empresa em nosso site. E com isso facilitar reuniões com novos desenvolvedores de jogos brasileiros e nossos investidores. 

<h3>API de Geolocalização</h3>

A implementação da API do Google Maps no site é feita para exibir um mapa interativo mostrando a localização do endereço do escritório do nosso projeto. 

<h3>Inclusão da API do Google Maps:</h3>

* Primeiro é necessário incluir o script da biblioteca da API  do Google Maps no HTML, geralmente no final do <body> especificando a função de callback (initMap).
* A função initMap é chamada automaticamente quando a biblioteca da API do Google Maps é carregada. A função initMap inicializa e renderiza o mapa no elemento HTML com o ID map em nosso JavaScript.
* O objeto location no JavaScript, define a latitude e a longitude do ponto central do mapa. No projeto, as coordenadas fictícias são de São Paulo.
* Criamos a instância do mapa usando new google.maps.Map(). O método pega dois parâmetros: O elemento HTML onde o mapa será renderizado (document.getElementById('map')); O objeto de opções que define o nível de zoom (zoom: 18) e o centro do mapa (center: location).
* Um marcador é adicionado ao mapa para indicar a localização exata no centro do mapa. O marcador é criado usando new google.maps.Marker(), que recebe a posição do marcador (position: location) e o mapa onde o marcador será exibido (map: map):

Com isso podemos visualizar um mapa interativo mostrando a localização específica da empresa, facilitando a navegação e o contato.

## Ferramentas utilizadas:

* HTML
* CSS
* Media Query 
* Bootstrap 5
* JavaScript  
* Slick CSS
* JQuery
* API Geolocalização Google

<h2> Projeto desenvolvido: </h2>

<h3>API de Geolocalização funcional no projeto </h3>

![image](https://github.com/cahetterich/GameStore/assets/148469247/57b62b0f-927d-4091-9080-181d61dfa36d)

<h3>Telas com 350px </h3>

![image](https://github.com/cahetterich/GameStore/assets/148469247/8f095012-46ee-4a99-9434-19e64e513db3)

<h3>Telas com 768px </h3>

![image](https://github.com/cahetterich/GameStore/assets/148469247/508c1e08-0cb7-4583-bc27-a47a3b933e5b)

<h3>Telas com 1400px - Tema Dark</h3>

![image](https://github.com/cahetterich/GameStore/assets/148469247/b497ba9a-ea72-405a-aff4-ba41a9dc865f)

<h3>Telas com 1400px - Tema Light</h3>

![image](https://github.com/cahetterich/GameStore/assets/148469247/69d36a07-3b64-4fe8-a031-24169cff80d6)

