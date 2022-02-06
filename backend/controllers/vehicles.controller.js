const models = require('../models');
const validator = require('fastest-validator');

// Function to add vehicle

function save(req, res) {
    const post = {
        saccoName: req.body.saccoName,
        vehicleRegNo: req.body.vehicleRegNo,
        routeCost: req.body.routeCost

    }

    const schema = {
        saccoName: { type: "string", empty: false, optional: false, max: "100" },
        vehicleRegNo: { type: "string", empty: false, optional: false, max: "15" },
        routeCost: { type: "string", empty: false, optional: false, max: "500" }
    }

    const v = new validator();

    const validationResponse = v.validate(post, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Vehicle.create(post).then(result => {
        res.status(201).json({
            message: "Vehicle added successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });

}

//Showing a single vehicle

function show(req, res) {
    const id = req.params.id;

    models.Vehicle.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Vehicle not found!"
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "Somehting went wrong!"
        })

    })
}

//Showing all vehicles

function showAll(req, res) {
    models.Vehicle.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        })
    });
}

//updating a vehicle

function update(req, res) {
    const id = req.params.id;
    const updatedVehicle = {
        saccoName: req.body.saccoName,
        vehicleRegNo: req.body.vehicleRegNo,
        routeCost: req.body.routeCost
    }

    const schema = {
        saccoName: { type: "string", empty: false, optional: false, max: "100" },
        vehicleRegNo: { type: "string", empty: false, optional: false, max: "15" },
        routeCost: { type: "string", empty: false, optional: false, max: "500" }
    }

    const v = new validator();

    const validationResponse = v.validate(updatedVehicle, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Vehicle.update(updatedVehicle, { where: { id: id } }).then(result => {
        if (result) {
            res.status(200).json({
                message: "Vehicle updated successfully",
                post: updatedVehicle
            })
        } else {
            res.status(404).json({
                message: "Vehicle not available!",
                error: error
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

//Delete vehicle

function destroy(req, res) {
    const id = req.params.id;

    models.Vehicle.destroy({ where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Vehicle deleted successfully",
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}



module.exports = {
    save: save,
    show: show,
    showAll: showAll,
    update: update,
    destroy: destroy


}