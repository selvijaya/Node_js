const usersDB ={
    users: require("../model/user.json"),
    setUsers:function (data) { this.users = data }
}
const bcrypt = require('bcrypt');
const handleLogin = async (req,res) =>{
    const {user,pwd} = req.body;
    if(!user || !pwd) return res.status(400).json({'message':'username and password are required'});
    const founduser = usersDB.users.find(person=>person.username ===user)
    if (!founduser) return res.sendStatus(401);// unauthorized

    const match = await bcrypt.compare(pwd,founduser.password);
    if (match){
        res.json({'success':`user ${user} is logged`});
    }else{
        res.sendStatus(401);
    }
}

module.exports = {handleLogin};