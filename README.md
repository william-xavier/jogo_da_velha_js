# Jogo da Velha em JavaScript

Bem-vindo ao jogo da velha implementado em JavaScript puro! Este é um simples projeto de jogo da velha que você pode jogar no navegador. É uma aplicação básica, mas pode ser uma ótima introdução para quem está aprendendo a programar em JavaScript ou precisa praticar alguns conceitos.

## Como Jogar?

1. Abra o arquivo `index.html` no seu navegador.
2. Dois jogadores podem participar, alternadamente clicando nas células vazias do tabuleiro.
3. O objetivo é formar uma linha horizontal, vertical ou diagonal com três símbolos iguais ("🛡️" ou "⚔️":).

## Estrutura do Projeto

- **index.html:** O arquivo HTML básico que contém a estrutura da página e atua como 'view'.
- **style.css:** O arquivo CSS para estilizar o jogo da velha.
- **interface.js:** O arquivo JavaScript que atua como 'controlador' do jogo.
- **game.js:** O arquivo JavaScript que atua como 'model' do jogo.

## Lógica do Jogo

O jogo utiliza uma matriz bidimensional para representar o tabuleiro. Cada célula pode ter três estados: vazia, marcada com "🛡️" ou marcada com "⚔️". A cada clique do jogador, o estado da célula é alterado, e a função de verificação é chamada para determinar se há um vencedor.

