import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page from './Page';
import {ShowContentPosts, BlogContent} from './ListsKey';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Page />, document.getElementById('banner'));
ReactDOM.render(<BlogContent />, document.getElementById('list'));
registerServiceWorker();
 