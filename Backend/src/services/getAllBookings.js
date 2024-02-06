import { DAO } from '../data-access/index.js'

export const getAllBookings = async (boatId) => {
    const data = await DAO.getManyBookings(boatId);
    return data;
};