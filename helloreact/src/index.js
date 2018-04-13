import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page from './Page';
import {ShowContentPosts} from './ListsKey';
import registerServiceWorker from './registerServiceWorker';

const numbers = [1,2,3,4,5];
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Page />, document.getElementById('banner'));
ReactDOM.render(<ShowContentPosts numbers={numbers} />, document.getElementById('list'));
registerServiceWorker();
 