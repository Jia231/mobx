import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import appStore from './store/Store';
import {Provider} from 'mobx-react';

ReactDOM.render(<Provider store={appStore}><App/></Provider>,
    document.getElementById('root'))

window.appStore = appStore;