import Pocketbase from '/pocketbase';

const pb = new Pocketbase(process.env.VITE_POCKETBASE_URL);

export default pb;