import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Jemaah = db.define(
  'jemaah',
  {
    Nama_Lengkap: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    NIK: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Tempat_Lahir: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Tanggal_Lahir: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: true,
      },
    },
    Alamat: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Provinsi: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Jenis_Kelamin: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    No_Passport: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Masa_Berlaku_Passport: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: true,
      },
    },
    Lampiran_KTP: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Lampiran_KK: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Lampiran_Foto_Diri: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Lampiran_Paspor: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    No_Visa: DataTypes.STRING,
    Masa_Berlaku_Visa: DataTypes.DATE,
    Paket: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Kamar: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Jemaah;
