const mongoose = require('mongoose')
const {uuid} = require('uuidv4')

const mahasiswaSchema = new mongoose.Schema({
    nama_depan:{
        type:String,
        required: true
    },
    nama_belakang:{
        type:String,
        required: true
    },
    nim:{
        type:String,
        required: true
    },
    jurusan:{
        type:String,
        required: true
    },
},
{
    collection: 'mahasiswa'
})

const MahasiswaDB = mongoose.model('Mahasiswa', mahasiswaSchema)

module.exports = MahasiswaDB;