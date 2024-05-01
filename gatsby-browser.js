import "./src/styles/global.css"
import { setupWorker } from 'msw/browser'
import { handlers } from './src/mocks/handlers';


if (process.env.NODE_ENV === 'development') {
    async function startMSW() {
        return setupWorker(...handlers)
    };
    startMSW().then((worker) => {
        worker.start();
    });
}


