import { DAO } from '../data-access/index.js'

export const editOne = async (collection, editedDocument) => {
    const data = await DAO.editOne(collection, editedDocument);
    return data;
};