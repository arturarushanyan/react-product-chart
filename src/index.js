import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableProductTable from './components/App';
import {PRODUCTS} from './data'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FilterableProductTable products = {PRODUCTS} />, document.getElementById('root'));
registerServiceWorker();
