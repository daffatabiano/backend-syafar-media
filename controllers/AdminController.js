import Admin from '../models/AdminModel.js';

const login = async (req, res) => {
  try {
    const admin = await Admin.findOne({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
    });
    if (admin) {
      const { username, id, createdAt, updatedAt } = admin.dataValues;
      res.status(200).json({
        message: 'Login successful',
        data: {
          username,
          id,
          createdAt,
          updatedAt,
        },
        token:
          '7oyLIRo4AhWLzubkQm7uFJXlZMQzOVb4zEgud6fdGRqUSl77E0pMXy9x0t9KYs50druioOvIxktVK',
      });
    } else {
      res.status(401).json({
        message: 'Invalid username or password',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export { login };
