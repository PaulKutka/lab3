require('isomorphic-fetch');


let url = "http://localhost:3000/api/todo"

function getTodoElements(cb) {
    fetch(url).then((response) => {
    if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
})
.then((todos) => {
   return cb(todos);
});

    
}

function postTodoElemet(cb, form) {
    fetch(url, {
        method: 'post',
        body: form
    }
    ).then((response) => {
    if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
})
.then((todo) => {
   return cb(todo);
});

}


module.exports = {getTodoElements, postTodoElemet};