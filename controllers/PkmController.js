const PKM = require ('../models/pkm');

//Create and save a new PKM

exports.create = (req, res) => {
    console.log(req.body);
    const postPkm = req.body;

    const pkm = new PKM({
        name: postPkm.name,
        type: postPkm.type,
        level: postPkm.level,
    });

    pkm.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}; 

// Retrieve all PKM from the database.
exports.findAll = (req, res) => {
    PKM.find()
    .then(pkm => {
        res.send(pkm);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

// Find a single pkm with a pkmId
exports.findOne = (req, res) => {
    PKM.findById(req.params.pkmId)
    .then(pkm => {
        if(!pkm) {
            return res.status(404).send({
                message: "PKM not found with id " + req.params.pkmId
            });
        }
        res.send(pkm);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "PKM not found with id " + req.params.pkmId
            });
        }
        return res.status(500).send({
            message: "Error retrieving PKM with id " + req.params.pkmId
        });
    });
};


// delete a pkm
exports.delete = (req, res) => {
    PKM.findByIdAndRemove(req.params.pkmId)
    .then(pkm => {
        if(!pkm) {
            return res.status(404).send({
                message: "PKM not found with id " + req.params.pkmId
            });
        }
        res.send({message: "PKM deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({message: "PKM not found with id " + req.params.pkmId
        });
    }
    return res.status(500).send({message: "Could not delete PKM with id " + req.params.pkmId
});
});
}

// update a pkm
exports.update = (req, res) => {
    PKM.findByIdAndUpdate(req.params.pkmId, {
        name: req.body.name,
        type: req.body.type,
        level: req.body.level,
    }, {new: true})
    .then(pkm => {
        if(!pkm) {
            return res.status(404).send({
                message: "PKM not found with id " + req.params.pkmId
            });
        }
        res.send(pkm);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "PKM not found with id " + req.params.pkmId
            });
        }
        return res.status(500).send({
            message: "Error updating PKM with id " + req.params.pkmId
        });
    });
}
