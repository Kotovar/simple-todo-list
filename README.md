# simple todo-list
simple todo-list is a web app that lets you create and manage multiple lists of tasks.

<p>Creating, editing and deleting notebooks</p> 

![1 createNotebook](https://github.com/Kotovar/simple-todo-list/assets/77914431/4df6d2fc-a17d-4b8e-a499-82380c94189d)
<p>Creating, editing and deleting tasks</p> 

![2 createTask](https://github.com/Kotovar/simple-todo-list/assets/77914431/e1ee2bdc-8bc7-4614-b7b7-ac8e3934ccd3)
<p>Toggle hiding panel and dark theme mode</p> 

![3 topButtons](https://github.com/Kotovar/simple-todo-list/assets/77914431/151ab801-958d-4234-a64c-9fa6dd331ac5)

## How to use

To use restaurant_page, you need to have Node.js and npm installed on your system. You can then clone this repository and run the following commands:

-npm install -g webpack: to install webpack globally


 next need to make in the project directory

 
-npm link webpack-cli 


-webpack

open the index.html file in your browser

## How it works

simple todo-list is built with HTML, CSS, and vanilla JavaScript. It uses webpack to bundle the modules and assets into a single file. It uses local storage to store the notebooks and tasks data as well as the theme preference. The notebooks are stored in a Map object, where the key is the notebook name and the value is an array of task objects. Each task object has four properties: name, description, due date, and status. The app uses event listeners to handle user interactions such as creating, editing, deleting, and completing notebooks and tasks. It also uses DOM manipulation to update the user interface accordingly.

![main mode](https://github.com/Kotovar/simple-todo-list/assets/77914431/56f6a36f-4478-433b-ac96-71a46fd55420)
![1](https://github.com/Kotovar/simple-todo-list/assets/77914431/2b5b9073-f57c-46b7-98ca-91b0f9bc2294)


## Credits

This project was inspired by [[The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-todo-list)], which is an open source curriculum for learning web development.
