import axios from 'axios';

const URL = 'https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals';

const getAll = async () => {
    const response = await axios.get(URL);
    return response.data;
};

const exports = {
    getAll,
};

export default exports;
