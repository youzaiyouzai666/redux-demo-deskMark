import React from 'react';
import {render} from 'react-dom';
import {bindActionCreators, createStore, applyMiddleware} from 'redux';
import {connect, Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import  Deskmark from 'components/Deskmark';
import  rootReducer from 'reducers';
import  * as actionCreators  from 'actions';

/*const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);*/
const store = applyMiddleware(
    thunkMiddleware
)(createStore)(rootReducer);

const App = connect(
    state => ({state}),
    dispatch =>({
        actions:bindActionCreators(),
    })
)();