import Pocketbase from 'pocketbase';

const url = import.meta.env.VITE_PB_URL;
const pb = new Pocketbase(url);

export default pb;