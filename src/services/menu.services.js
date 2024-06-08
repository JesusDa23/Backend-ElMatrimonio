const MenuModel = require ('../models/Menu');

const getMenu = async () => {
    return await MenuModel.find()
}
const getMenuById = async (idMenu) => {
    return await MenuModel.findOne({_id: idMenu})
}
const createMenu = async (newMenu) => {
    return await MenuModel.create(newMenu)
}
const removeMenu = async (_id) => {
    return await MenuModel.findOneAndDelete({_id}) 
}
const updateMenu = async (_id, newData) => {
    return await MenuModel.findOneAndUpdate({_id}, newData, {new: true})
}

module.exports = {
    getMenu,
    getMenuById,
    createMenu,
    removeMenu,
    updateMenu
}