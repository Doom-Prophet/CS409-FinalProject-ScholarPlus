/*
 * Connect all of your endpoints together here.
 */
module.exports = function (app, router) {
    app.use('/api', require('./home.js')(router));
    app.get("/api",(req,res)=>{
        const name = req.query.user;
        res.send(name+"!");
    })
};
