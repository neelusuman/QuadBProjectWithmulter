const { Users } = require("../models")
const jwt = require("jsonwebtoken")
const authConfig = require("../config/auth.config")

async function authenticateUser(req, res, next) {
    const { user_name, user_password, user_email } = req.body;

    // Check if username and password are provided in the request
    if (!user_name || !user_password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    if(user_email){
		const user = await Users.findOne({
			where : {
				user_email:user_email
			}
		})

		if(user){
			res.status(400).send({msg : 'email already exist'})
			return;
		}
	}
 
     next();
};

function verifyToken(req,res,next){

    let token = req.headers['x-access-token'];

    if(!token){
        return res.status(403).send({message:"No Token Provided"});
    }

    jwt.verify(token, authConfig.secret, (err,decoded)=>{

        if(err){
            return res.status(401).send({message:"Unauthorized!"});
        }
       req.id =  decoded.id;
        next();
    })
}

module.exports = {
    authenticateUser,
    verifyToken
}