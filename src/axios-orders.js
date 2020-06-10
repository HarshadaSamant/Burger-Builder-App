import axios from 'axios';

const instant = axios.create({
    baseURL: 'https://react-my-burger-211c5.firebaseio.com/'
});

export default instant;
