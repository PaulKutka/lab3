require('isomorphic-fetch');


let url = "http://localhost:3000/api/todo/"

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

function postTodoElemet(form, cb) {
    fetch(url, {
        method: 'post',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(
       form
      )
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

function updateTodoElement(form, id, cb) {
    fetch(url + id, {
        method: 'put',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(
       form
      )
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

function deleteTodoElement(id, cb) {
     
    fetch(url + id, {
        method: 'delete',
    }
    ).then((response) => {

     
    if (response.status >= 400) {
			throw new Error("Bad response from server");
		}       

        

		return cb(response.json());
});

}




module.exports = {getTodoElements, postTodoElemet, updateTodoElement, deleteTodoElement};