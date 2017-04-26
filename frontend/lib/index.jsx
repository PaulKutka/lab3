
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todo/TodoApp.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
<TodoApp/>
</MuiThemeProvider>
,
 document.getElementById('app')
);

