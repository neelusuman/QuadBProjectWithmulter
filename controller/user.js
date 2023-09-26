const { copySync } = require("file-system");
const { Users } = require("../models")
const bcrypt = require('bcryptjs')
const multer = require('multer')
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");

// Api for insertion of new details

async function insert(req, res) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomLetter = ""
    let randomLetterFn = (num) => {
        for (let i = 0; i < num - 1; i++) {
            randomLetter += alphabet[Math.floor(Math.random() * alphabet.length)]
        }
        randomLetter += Math.floor(Math.random() * 10)
        return randomLetter
    }

    console.log(randomLetterFn(6));

    const user_id = randomLetter;

    console.log(randomLetterFn(6));
    const data = req.body;

    // console.log(req.file)// Took input as form-data

    const userObj = {
        user_id: user_id,
        user_name: data.user_name,
        user_email: data.user_email,
        user_password: bcrypt.hashSync(data.user_password, 8),
        total_orders: data.total_orders,
        user_image: req.file ? req.file.path : null
    }

    try {
        const result = await Users.create(userObj);
        console.log('result', result);

        const token = jwt.sign({ id: user_id }, config.secret, {
            expiresIn: 120000
        });

        res.send({ msg: 'User has been created', token })

    } catch (err) {
        console.log('err in creation of users', err)
        res.status(500).send({ msg: 'Internal server error' })
    }
}




async function details(req, res) {
    const user_id = req.params.id;
    console.log(user_id)
    try {
        const result = await Users.findOne({
            where: {
                id: user_id
            }
        })

        res.send(result)

    } catch (err) {
        console.log('err in fetching details of users', err)
        res.status(500).send({ msg: 'Internal server error' })
    }

}

async function update(req, res) {
    const user_id = req.params.id;
    try {
        const result = await Users.findOne({
            where: {
                id: user_id
            }
        })
        if (result) {
            const data = req.body;
            result.user_name = data.user_name,
                result.user_email = data.user_email,
                result.user_password = bcrypt.hashSync(data.user_password, 8),
                result.total_orders = data.total_orders

            result.save()
            res.send({
                msg: 'user got update',
                update: result
            })

        } else {
            console.log('err in finding user', err)
            res.status(400).send({ msg: ' user_id does not exist' })
        }
    } catch (err) {
        console.log('err in getting user', err)
        res.status(500).send({ msg: 'Internal server error' })
    }
}

async function deletee(req, res) {

    const user_id = req.params.id;
    try {
        const result = await Users.destroy({
            where: {
                id: user_id
            }
        })

        res.send({ msg: ' user deleted', result })
    } catch (err) {
        console.log('err in deleting user', err)
        res.status(500).send({ msg: 'Internal server error' })
    }

}
async function images(req, res) {
    const user_id = req.params.id;
    try {
        const result = await Users.findOne({
            where: {
                id: user_id
            }
        })

        res.send("http://localhost:2026/" + result.user_image)
    } catch (err) {
        console.log('err getting user_image', err)
        res.status(500).send({ msg: 'Internal server error' })
    }
}

module.exports = {
    insert,
    details,
    update,
    deletee,
    images

}