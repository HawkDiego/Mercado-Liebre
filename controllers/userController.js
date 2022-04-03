
const controller = {
    login: (req, res) => {
        let titulo="Login"
        res.render('./user/login', {titulo: titulo})
    },
    
    signup: (req, res) => {
        let titulo ="Sign-up"
        res.render('./user/signup',{titulo: titulo})
    },
};

module.exports = controller;