# Pokédex by SuperAnika 

This exercise is a list of Pokemons taken from the API https://pokeapi.co/.


![Screenshot](screenshot.png) 


It shows a list of pokemons and their information: image, id, name, type and if it evolves from another pokémon.

It also has a search input where you can search pokemons by name.  


![Screenshot](screenshot2.png)


At the bottom you can find a button that takes you to the top of the page again.

If you click on any pokémon card, a detail card shows you more information, such as size and abilities.


![Screenshot](screenshot3.png)

If you hover the pokémon image, it turns back, and returns to front when you mouse out.  If you click on the name of the pokémon which evolves from, you reach its detail card.  


![Screenshot](screenshot4.png)


You can go back to the main page clicking on the close icon on top right side of the card.


This site has a responsive design so it can fit all devices' sizes.

You can clone this project clicking on the green clone button or with this link:

https://github.com/Adalab/f-online-pokemon-superanika.git

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Sass and you should run "npm install" and "npm start" on your Terminal to init it.

The structure is as follows:
```
/
`- src
   |- components
   |    |- Card
   |    |  |- Card.js
   |    |  |- Card.scss
   |    |- DetailCard
   |    |  |- DetailCard.js
   |    |  |- DetailCard.scss
   |    |- Home
   |    |  |- Home.js
   |    |  |- Home.scss
   |    |- PokeList
   |    |   |- PokeList.js
   |    |   |- PokeList.scss
   |    |- SeachField
   |    |   |- SearchField.js
   |    |   |- SearchField.scss
   |- services
   |- images
   |- App.js
   |- App.scss
   |- index.js
   |- index.css
 ```  
 
