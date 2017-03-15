require('isomorphic-fetch');

function getTodoElements() {
    fetch('/localhost:3000').then(function (todoList){
    console.log(todoList);
})}

module.exports = {getTodoElements};