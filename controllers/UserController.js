const USER = require ('../models/user');

//Create and save a new User

exports.create = (req, res) => {
    console.log(req.body);
    const postUser = req.body;


    const user = new USER({
        username: postUser.username,
        email: postUser.email,
        password: postUser.password,

    });

    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}; 

// Retrieve all USER from the database.
exports.findAll = (req, res) => {
    USER.find()
    .then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

// Find a single user with a userId
exports.findOne = (req, res) => {
    USER.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "USER not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "USER not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Error retrieving USER with id " + req.params.userId
        });
    });
};

// delete a user
exports.delete = (req, res) => {
    USER.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "USER not found with id " + req.params.userId
            });
        }
        res.send({message: "USER deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({message: "USER not found with id " + req.params.userId
        });
    }
    return res.status(500).send({message: "Could not delete USER with id " + req.params.userId
});
});
}

// update a user
exports.update = (req, res) => {
    USER.findByIdAndUpdate(req.params.userId, {
        email: req.body.email,
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "USER not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "USER not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Error updating USER with id " + req.params.userId
        });
    });
}
