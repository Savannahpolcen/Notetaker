const express = require ('express');
const htmlRoutes = require('./routes/htmlRoutes')
const APIroutes = require('./routes/APIroutes')

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static('public'));

app.use('/api', APIroutes);
app.use('/',htmlRoutes);


app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
})







