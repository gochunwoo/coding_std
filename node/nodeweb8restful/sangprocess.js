import pool from './db.js';

// select
export const getAllSangdata = async () => {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM sangdata');
    conn.release();
    return rows;
};

// select one
export const getSangdataByCode = async (code) => {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM sangdata WHERE code = ?', [code]);
    conn.release();
    return rows;
};

// insert
export const createSangdata = async (code, sang, su, dan) => {
    const conn = await pool.getConnection();
    const result = await conn.query(
        'INSERT INTO sangdata (code, sang, su, dan) VALUES (?, ?, ?, ?)',
        [code, sang, su, dan]
    );
    conn.release();
    return result;
};

// update
export const updateSangdata = async (code, sang, su, dan) => {
    const conn = await pool.getConnection();
    const result = await conn.query(
        'UPDATE sangdata SET sang = ?, su = ?, dan = ? WHERE code = ?',
        [sang, su, dan, code]
    );
    conn.release();
    return result;
};

// delete
export const deleteSangdata = async (code) => {
    const conn = await pool.getConnection();
    const result = await conn.query('DELETE FROM sangdata WHERE code = ?', [code]);
    conn.release();
    return result;
};
