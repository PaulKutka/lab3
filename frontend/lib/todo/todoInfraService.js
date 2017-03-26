require('isomorphic-fetch');

function getTodoElements(cb) {
    fetch('http://localhost:3000/api/todo').then((response) => {
    if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
})
.then((todos) => {
   return cb(todos);
});

    
}


module.exports = {getTodoElements};