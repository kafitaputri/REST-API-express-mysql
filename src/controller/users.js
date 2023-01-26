const {
    request
} = require('express');
const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'Get all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            massage: 'Server Error',
            serverMessage: error,
        })
    }

}

const creatNewUser = async (req, res) => {
    const {
        body
    } = req;

    if (!body.email || !body.name || !body.address) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }


    try {
        await UsersModel.creatNewUser(body);
        res.status(201).json({
            message: 'CREAT new users success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            massage: 'Server Error',
            serverMessage: error,
        })
    }

}

const updateUser = async (req, res) => {
    const {
        idUser
    } = req.params;
    const {
        body
    } = req;
    try {
        await UsersModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            massage: 'Server Error',
            serverMessage: error,
        })
    }

}

const deleteUser = async (req, res) => {
    const {
        idUser
    } = req.params;
    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            message: 'DELETE User Success',
            data: null
        })

    } catch (error) {
        res.status(500).json({
            massage: 'Server Error',
            serverMessage: error,
        })
    }

}


module.exports = {
    getAllUsers,
    creatNewUser,
    updateUser,
    deleteUser,
}