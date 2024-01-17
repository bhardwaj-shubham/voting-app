const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const Voter = require('../models/voterModel');

const registerVoter = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {
        votername,
        email,
        password,
        aadharNo,
        dateOfBirth,
        address,
        pincode,
        aadharFront,
        realPhoto,
    } = req.body;

    const voterExists = await Voter.findOne({ aadharNo });

    if (voterExists) {
        res.status(400);
        throw new Error('Voter already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const voter = await Voter.create({
        votername,
        email,
        password: hashedPassword,
        aadharNo,
        dateOfBirth,
        address,
        pincode,
        aadharFront,
        realPhoto,
    });

    if (voter) {
        res.status(201).json({
            _id: voter._id,
            votername: voter.votername,
            email: voter.email,
            aadharNo: voter.aadharNo,
            dateOfBirth: voter.dateOfBirth,
            address: voter.address,
            pincode: voter.pincode,
            aadharFront: voter.aadharFront,
            realPhoto: voter.realPhoto,
        });
    } else {
        res.status(400).json({ message: 'Invalid voter data' });
    }
    res.json(voter);
});

const loginVoter = asyncHandler(async (req, res) => {
    const { aadharNo, password } = req.body;
    if (!aadharNo || !password) {
        res.status(400);
        throw new Error('Please enter all the fields');
    }

    const voter = await Voter.findOne({ aadharNo });

    if (voter && (await bcrypt.compare(password, voter.password))) {
        res.sendStatus(200);
    } else {
        res.status(401);
        throw new Error('Invalid aadhar number or password');
    }
});

const getVoterProfile = asyncHandler(async (req, res) => {
    const voter = await Voter.findById(req.voter._id);

    if (voter) {
        res.json({
            _id: voter._id,
            votername: voter.votername,
            email: voter.email,
            aadhar: voter.aadhar,
            dateOfBirth: voter.dateOfBirth,
            address: voter.address,
            pincode: voter.pincode,
            aadharFront: voter.aadharFront,
            realPhoto: voter.realPhoto,
        });
    } else {
        res.status(404);
        throw new Error('Voter not found');
    }
});

module.exports = { registerVoter, loginVoter, getVoterProfile };