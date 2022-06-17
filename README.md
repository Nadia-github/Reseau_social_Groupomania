# Creation d'un réseau social d'entreprise



[![Le logo de Groupomania](https://user.oc-static.com/upload/2019/09/04/15676009353158_image2.png)](https://user.oc-static.com/upload/2019/09/04/15676009353158_image2.png)



## Exigences du projet

- La présentation des fonctionnalités doit etre simple.
- La création d'un compte doit être simple et possible depuis un téléphone mobile.
- Le profil doit contenir peu d'infirmations pour que sa complétion soit rapide;
- La suppression d'un compte doit être possible.
- L'accès à un forum où les salariés publient de texte doit être présent.
- Les utilisateurs doivent pouvoir facilement répérer les dernières participations des employés.
- Un framework Front-end au choix doit être utilisé (React, Vue , Angular, Ember ..).
- Le projet doit être coder en javascript pas de framework comme symfony par exemple.
- Utiliser une base de données relationnelles qui se manipule avec le langage SQL.
- Les pages doivent respecter les standards WCAG.
 

## Technologies utilisées

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JAVASCRIPT](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![NODEJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![EXPRESS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![SEQUELIZE](https://img.shields.io/badge/Sequelize-40a4ec?style=for-the-badge&logo=sequelize&logoColor=white)
![MYSQL](https://img.shields.io/badge/Mysql-0275d8?style=for-the-badge&logo=mysql&logoColor=f0ad4e)

![GIT](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)


## Installation : 

Clonez le repository :

```
git clone https://github.com/Nadia-github/Creation-reseau-social-d-entreprise.git

```

Placez vous dans le dossier "Backend" :

```
- Initialisez les packages via la commande `npm install`
- Lancez le backend en tapant ensuite `nodemon server`
- Le backend communiquera via le port `:5000`

```
Placez vous dans le dossier "Frontend" :

```
- Dans le terminal exécutez la commande `npm install`
- Lancez ensuite la commande `npm run dev`
- L'interface client sera disponible à l'URL suivante : http://localhost:3000/

```
Vous pouvez utiliser le fichier "groupomania.sql" pour la création de la BDD.

```
Dans le dossier "Backend", créer un fichier config.json (dans un dossier "config") et y mettre dedans, les données de votre base de données :

"development": {
    "username": " ",
    "password": "",
    "database": "",
    "host": "",
    "port": "",
    "dialect": ""
  },
  ```
Un compte admin est présent pour la modération (suppression éventuelle des posts des utilisateurs).
Voici les codes d'accès admin :

```
Email : admin1102@yahoo.fr
Mot de passe : 123
```


