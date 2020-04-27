import { app } from './app';

async function initialize() {
    const port = 3333;
    app.listen(port, () => console.log(`Executing on port ${port}.`));
}

initialize();
