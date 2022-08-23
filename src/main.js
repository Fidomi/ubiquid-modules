import App from './app.js';

const insertApp = async () => {
    document.getElementById('app').appendChild(await App());
};

insertApp();