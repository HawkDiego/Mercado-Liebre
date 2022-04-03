let titulo = 'home'
const indexController = {
    home:(req, res) => {
        res.render('home',{titulo: titulo});
    },
       
}


module.exports = indexController;
