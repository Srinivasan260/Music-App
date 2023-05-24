const bycrypt = require('bcryptjs')


function hashPass(password){
    const salt = bycrypt.genSaltSync();
    return bycrypt.hashSync(password,salt)


}

function logPas(password,hash){
    return bycrypt.compareSync(password,hash)
}

module.exports ={ hashPass,logPas}