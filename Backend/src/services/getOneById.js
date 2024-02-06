import { DAO } from '../data-access/index.js'

export const getOneById = async (collection, id) => {
    const data = await DAO.getOneById(collection, id);
    return data;
};