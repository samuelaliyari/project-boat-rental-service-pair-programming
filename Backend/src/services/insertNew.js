import { DAO } from '../data-access/index.js'

export const insertNew = async (collection, newDocument) => {
    const data = await DAO.insetNew(collection, newDocument);
    return data;
};