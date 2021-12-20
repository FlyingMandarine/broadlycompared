const cors = require('cors');
const express = require('express');
const app = express();
// const Entry = require('./models/entry');
//var morgan = require('morgan')

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method);
    console.log('Path:  ', request.path);
    console.log('Body:  ', request.body);
    console.log('---');
    next();
};

app.use(express.static('build'));
app.use(express.json());
app.use(requestLogger);

app.use(cors());

const URL = 'https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals';

app.get(URL, (request, response) => {
    // console.log('response is', response);
    console.log('response is', response.json());
});

const errorHandler = (error, request, response, next) => {
    console.error(error.message);

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' });
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message });
    }

    next(error);
};

app.use(errorHandler);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
