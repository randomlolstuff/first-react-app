import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import {createStore} from 'redux';
import allReducers from './Reducers/index';
import {Provider} from 'react-redux';

const mystore = createStore(allReducers);


ReactDOM.render(
    <Provider store={mystore}>
<App />
</Provider>
    , document.getElementById('root'));
