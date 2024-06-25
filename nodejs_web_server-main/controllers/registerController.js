const usersDB ={
    users: require("../model/user.json"),
    setUsers:function (data) { this.users = data }
}
const fspromises = require('fs').promises;
const path = require('path');
const bcrypt =require('bcrypt');

const handleNewUser =async (req,res)=>{
    const {user,pwd} = req.body;
    if(!user || !pwd) return res.status(400).json({'message':'username and password are required.'});
    //check for dublicate usernames in the db
    const duplicate = usersDB.users.find(person => person.username  === user);
    if (duplicate) return res.sendStatus(409);
    try{
        //encrpt the password
        const hashed = await bcrypt.hash(pwd,10);
        const newUser = {"username":user ,"password" : hashed};
        usersDB.setUsers([...usersDB.users ,newUser]);
        await fspromises.writeFile(
            path.join(__dirname,'..','model','user.json'),
            JSON.stringify(usersDB.users)
        );
        console.log(usersDB.users);
        res.status(201).json({'success':`New user ${user} created!`});
        }catch(err){
        res.status(500).json({'message':err.message});
    }

}

module.exports={handleNewUser}
98