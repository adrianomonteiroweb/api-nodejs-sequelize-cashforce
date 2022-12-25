import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/config';

import CNPJs from './CNPJsModel';

class Sponsors extends Model {
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
  bank!: string;
  bankAgency!: string;
  account!: string;
  phoneNumber!: string;
  situation!: string;
  situationDate!: string;
  cnpjId!: number;
  email!: string;
}

Sponsors.init(
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
      allowNull: true,
    },
    cashforceTax: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    responsibleName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    responsibleEmail: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    responsiblePosition: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    responsiblePhone: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    responsibleMobile: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    postalCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    number: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    complement: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    neighborhood: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    bank: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    bankAgency: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    account: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    situation: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    situationDate: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

Sponsors.belongsTo(CNPJs, { foreignKey: 'cnpjId', as: 'cnpjs' });

export default Sponsors;
