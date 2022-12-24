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
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    departament: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    verificationCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    emailChecked: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cashforceAdm: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

export default Users;
