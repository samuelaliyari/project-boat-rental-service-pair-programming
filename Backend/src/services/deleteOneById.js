import { DAO } from '../data-access/index.js'

export const deleteOneById = async (collection, id) => {
    const data = await DAO.deleteOneById(collection, id);
    return data;
};