const error = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ message: "Something failed!!" });
};

export { error };
