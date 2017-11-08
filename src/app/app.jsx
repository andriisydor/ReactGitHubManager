import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'


import Home from './components/Home';


import rootReducer from './reducers/rootReducer'


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/index.html" component={Home} /> 
            <Route path="/" component={Home} /> 
        </Router>
    </Provider>
  ,document.getElementById('applicationContent')
);
