const createProperty = async (req, res) => {
  try {
    console.log('jj');
    // res.json({ message: 'create property here' });
    res.send('credentials');
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export { createProperty };
