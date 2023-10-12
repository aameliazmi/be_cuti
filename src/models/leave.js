const dbPool = require('../config/database');

const getAllLeave = async () => {
  try {
    const result = await dbPool.query('SELECT * FROM tb_leave')
    return result.recordset; // Mengambil hasil record
  } catch (error) {
    throw error; // Lempar error untuk penanganan di controller
  }
}

const createNewLeave = async (body) => {
  const { Id, name, role, type, reason, date, period, phone, emergency } = body;
  const sqlQuery = `INSERT INTO tb_leave (Id, name, role, type, reason, date, period, phone, emergency) VALUES ('${body.Id}', '${body.name}', '${body.role}', '${body.type}', '${body.reason}', '${body.date}', '${body.period}', '${body.phone}', '${body.emergency}')`;

  try {
    const result = await dbPool.query(sqlQuery, {
        Id, name, role, type, reason, date, period, phone, emergency
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const updateLeave = async (body, id) => {
  const { Id, name, role, type, reason, date, period, phone, emergency } = body;
  const sqlQuery = `UPDATE tb_leave SET name='${body.name}', role='${body.role}', type='${body.type}', reason='${body.reason}', date='${body.date}', period='${body.period}', phone='${body.phone}', emergency='${body.emergency}' WHERE id='${id}'`;

  try {
    const result = await dbPool.query(sqlQuery, {
        Id, name, role, type, reason, date, period, phone, emergency
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const deleteLeave = async (id) => {
  const sqlQuery = `DELETE FROM tb_leave WHERE id='$Id'`;

  try {
    const result = await dbPool.query(sqlQuery, {
      id,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllLeave, // Perbarui nama fungsi ini untuk sesuai dengan nama yang benar
  createNewLeave,
  updateLeave,
  deleteLeave,
};
