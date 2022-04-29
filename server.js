const express = require ('express');
const htmlRoutes = require('./routes/htmlRoutes')
const APIroutes = require('./routes/APIroutes')
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/',htmlRoutes);
app.use('/api', APIroutes);


app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
})







