import React from 'react';
import ReactDOM from 'react-dom/client';
// import createRoot from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './components/App.js'
import reducers from './reducers/index.js';

// ReactDOM.render(
//     <Provider store={createStore(reducers)}>
//          <App />
//     </Provider>,
//  document.getElementById('root'));

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
 <Provider store={createStore(reducers)}>
 <App />
</Provider>
)
