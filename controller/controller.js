const MahasiswaDB = require("../model/mahasiswa");

exports.getAllMahasiswa = (req, res) => {
  MahasiswaDB.find()
    .then((response) => {
      res
        .status(200)
        .json({ message: "Success get all mahasiswa", data: response });
      console.log("Data sent!");
    })
    .catch((err) => {
      res.status(400).send({ message: "Something went wrong!" });
      console.log(err);
    });
};

exports.createMahasiswa = async (req, res) => {
  const mahasiswa = new MahasiswaDB(req.body);
  try {
    mahasiswa.save();

    res.status(201).json({
      message: "Mahasiswa successfully added!",
      data: mahasiswa,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

exports.getByIdMahasiswa = (req, res) => {
  const id = req.params.id;

  MahasiswaDB.findById(id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(400).send("Can not get mahasiswa by id!", err);
    });
};

exports.updateMahasiswa = async (req, res) => {
  const updateData = await MahasiswaDB.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  try {
    res.status(201).json({ message: "Update successful", data: updateData });
  } catch (err) {
    res.status(400).send({ message: "Something went wrong" });
    console.log("Error occurred", err);
  }
};

exports.deleteMahasiswa = async (req, res) => {
  await MahasiswaDB.findByIdAndRemove(req.params.id);
  try {
    res.status(201).send({ message: "Mahasiswa deleted!" });
  } catch (err) {
    res.status(400).send({ message: "Something went wrong" });
    console.log("Error occurred", err);
  }
};
