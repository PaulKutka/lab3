
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todo/TodoApp.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
    <MuiThemeProvider>
<TodoApp/>
</MuiThemeProvider>
,
 document.getElementById('app')
);

