const actionDefault = (req, res) => {
  return res.status(200).json({ message: 'Default action executed' });
}

const actionOne = (req, res) => {
  return res.json({ message: 'Action one executed' });
}

const actionTwo = (req, res) => {
  return res.json({ message: 'Action two executed' });
}

const actionSpecial = (req, res) => {
  res.send('Special action executed');
}

export default {
  actionDefault,
  actionOne,
  actionTwo,
  actionSpecial
}