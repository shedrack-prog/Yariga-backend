import { validateEmail, validateLength, validateUsername } from '../helpers';
import Agent from '../models/Agent';
import bcrypt from 'bcryptjs';

const createAgent = async (req, res) => {
  try {
    const {
      email,
      first_name,
      last_name,
      middlename,
      country,
      city,
      password,
      gender,
      bYear,
      bDay,
      bMonth,
      phone,
    } = req.body;

    if (
      !email ||
      !first_name ||
      !last_name ||
      !middlename ||
      !country ||
      !city ||
      !password ||
      !gender ||
      !bYear ||
      !bMonth ||
      !bDay ||
      !phone
    ) {
      return res.status(400).json({ message: 'Please provide all values' });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid Email' });
    }
    if (!validateLength(first_name, 3, 30)) {
      return res
        .status(400)
        .json({ message: 'first name must be between 3 and 30 characters' });
    }

    if (!validateLength(last_name, 3, 40)) {
      return res
        .status(400)
        .json({ message: 'last name must be between 3 and 30 characters' });
    }

    if (!validateLength(password, 6, 30)) {
      return res
        .status(400)
        .json({ message: 'password must be at least 6 characters' });
    }

    const userAlreadyExist = await Agent.findOne({ email });
    if (userAlreadyExist) {
      return res
        .status(400)
        .json({ message: 'Agent already exist with email provided' });
    }
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    let tempUsername = first_name + last_name;
    const newUsername = await validateUsername(tempUsername);
    const agent = await new Agent({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      username: newUsername,
      bYear,
      bMonth,
      bDay,
      country,
      city,
      gender,
      phone,
    }).save();

    res.status(201).json({
      email: agent.email,
      first_name: agent.first_name,
      last_name: agent.last_name,
      username: agent.username,
      message: 'Account created successfully!',
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { createAgent };
