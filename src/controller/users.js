const usersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers();
        res.json({
            message: 'Get all user success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }

}

const createNewUser = (req, res) => {
    res.json({
        message: 'CREATE new user success',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const { id } = req.params;
    console.log('idUser: ', id);
    res.json({
        message: 'Update user success',
        data: req.body,
    })
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    console.log('idUser: ', id);
    res.json({
        message: 'Delete user success',
        id: id,
        name: 'Rahmani',
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}