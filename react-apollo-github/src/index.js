import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const client = new ApolloClient({
    uri: 'https//api/.github.com/graphql',
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer ${
                    process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
                }`
            }
        })
    }
})