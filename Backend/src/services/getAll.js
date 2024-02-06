import { DAO } from '../data-access/index.js'

export const getAll = async (collection) => {
    const data = await DAO.getAll(collection);
    return data;
};