import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/config';

class Users extends Model {
  id!: number;
  name!: string;
  email!: string;
  phoneNumber!: string;
  mobile!: string;
  departament!: string;
  verificationCode!: string;
  emailChecked!: string;
  cashforceAdm!: number;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    departament: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    verificationCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    emailChecked: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cashforceAdm: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

export default Users;
