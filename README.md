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

![image](https://github.com/cahetterich/GameStore/assets/148469247/ccf2e6dc-0e6b-4285-8015-879948edf351)

<h3>Telas com 350px </h3>

![image](https://github.com/cahetterich/GameStore/assets/148469247/845dbb3c-6e46-4807-b8e7-554a1244b32a)

<h3>Telas com 768px </h3>

![image](https://github.com/cahetterich/GameStore/assets/148469247/ba21adeb-f47e-436c-9d8b-ede4e5ac6ed4)

<h3>Telas com 1400px - Tema Dark</h3>

![image](https://github.com/cahetterich/GameStore/assets/148469247/510c10eb-2528-4c8d-988b-ef51090699a2)

<h3>Telas com 1400px - Tema Light</h3>

![image](https://github.com/cahetterich/GameStore/assets/148469247/0545bde2-8d0c-4962-b24c-c5442e2fd2f8)

