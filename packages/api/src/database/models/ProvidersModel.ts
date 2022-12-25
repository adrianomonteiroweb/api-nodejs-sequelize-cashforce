import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/config';

class Providers extends Model {
  id!: number;
  name!: string;
  tradingName!: string;
  cashforceTax!: string;
  responsibleName!: string;
  responsibleEmail!: string;
  responsiblePosition!: string;
  responsiblePhone!: string;
  responsibleMobile!: string;
  website!: string;
  postalCode!: string;
  address!: string;
  number!: string;
  complement!: string;
  neighborhood!: string;
  city!: string;
  state!: string;
  phoneNumber!: string;
  situation!: string;
  situationDate!: string;
  cnpjId!: number;
  confirm!: number;
  email!: string;
}

Providers.init(
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
    tradingName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cashforceTax: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    responsibleName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    responsibleEmail: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    responsiblePosition: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    responsiblePhone: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    responsibleMobile: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    complement: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    neighborhood: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    bank: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    bankAgency: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    account: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    documents: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    situation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    situationDate: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

export default Providers;
