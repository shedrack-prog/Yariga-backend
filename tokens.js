import jwt from 'jsonwebtoken';

const createToken = (payload, lifetime) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: lifetime,
  });
};

export { createToken };
