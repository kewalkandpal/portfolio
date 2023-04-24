import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Stateprovider from './Stateprovider';
import { initialState, reducer } from './Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Stateprovider initialState={initialState} reducer={reducer}>
    <App />
    </Stateprovider>
);

