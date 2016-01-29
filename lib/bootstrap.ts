import dr from 'domready';

import {App} from './App.ts';


var app = new App();

dr(() => {
    app.start();
});
