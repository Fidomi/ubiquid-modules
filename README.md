# JobTalk
Petite application test présenant une recherche d'offres d'emploi tech.

## Installation

1. `npm i` </br>
Installe la librairie sass

2. `npm run watch:build` </br>
Compile les fichiers sass dans le dossier ./public/css

3. Lancer un serveur local type Live Server pour servir le fichier index.html (autrement vous aurez des erreurs CORS policy)

## Description

Pour cet exercice j'ai essayé d'adopter une architecture modulaire visant à créer une application d'une seule page (Single Page Application) avec un rendu côté client.

## Limitations

* Cette application n'est pas responsive (une seule vue desktop pour le moment)
* Pour naviguer sur d'autres pages il manque un routeur
* Les styles en sass ne sont pas optimisés (pas de variables etc...)
