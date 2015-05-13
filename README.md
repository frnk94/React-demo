# Developement web javascript

## 1. Qu’est-ce que Nodejs ?
Node.js® est une plateforme bâtie sur le moteur JavaScript de Google Chrome(V8) pour établir facilement des applications réseau rapides et extensibles. Node.js utilise utilise un modèle entraîné par les événements d’entré/sortie asynchrone (“event-driven, non-blocking I/O”) qui le rend léger et efficace, parfait pour les applications en temps réel à usage intensif de données qui fonctionnent à travers les dispositifs distribués.
> En fait Nodejs permet de rouler du code javascripts à l'exterieur d'un navigateur.

## 1.1 Qu’est-ce que Npm ?
Npm est le gestionnaire de paquets (package manager) de Node.js. Une fois Node.js installé, celui-ci est accessible via un `CLI` (interface en ligne de commande) et il permet d’ajouter des librairies à notre application.

| Commandes              | Resultat                                                                             |
|------------------------|--------------------------------------------------------------------------------------|
| `npm init`             | Cette commande créer un fichier de configuration pour le projet (package.json).      |
| `npm install`          | Cette commande sert a installer un ou des package(s)                                 |
| `npm remove <package>` | Cette commande permet de supprimer un package.                                       |
| `npm update`           | Cette commande met à jour les packages                                               |

## Avant-propos
Ce laboratoire à pour but de vous familliariser avec le developpement web Javascript. Vous apprendrez comment lancer un serveur Nodejs qui sert une page http. Le reste du laboratoire est dédier au développement javascript client (frontend). Vous aprrendrez à utiliser la populaire librairie React pour créer des composantes qui représenteront les `vues` de votre application. À la fin de ce laboratoire vous serez capable d'utiliser nodejs pour déployer rapidement des applications web javascript.

## Prérequis
Pour complèter ce lab avec succes vous devez avoir:
+ Les notions de base en programation web.
+ Une bonne compréhention du language Javascript ou des languages Orienté objet.

## Installation
```
$ git clone git@github.com:frnk94/demo-react.git
$ cd ./demo-react/www
$ npm install gulp -g
$ npm install forever -g
$ npm install
```
> Assurez-vous d'avoir NodeJs et les droits d'administrateur sur votre machine.

## Utilisation
`$ npm run watch `
> cette commande lance un script qui part le serveur et qui compile notre javascript client

### Liens externe
+ https://nodejs.org
+ https://facebook.github.io/react/
+ http://socket.io
