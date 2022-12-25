import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/config';
import Orders from './OrdersModel';
import Sponsors from './SponsorsModel';

class Offers extends Model {
  id!: number;
  tax!: string;
  tariff!: string;
  adValorem!: string;
  float!: string;
  iof!: string;
  expiresIn!: Date;
  paymentStatusSponsor!: number;
  paymentStatusProvider!: number;
  orderId!: number;
  sponsorId!: number;
}

Offers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    tax: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tariff: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    adValorem: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    float: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    iof: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paymentStatusSponsor: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    paymentStatusProvider: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sponsorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

Offers.belongsTo(Orders, { foreignKey: 'orderId', as: 'orders' });
Offers.belongsTo(Sponsors, { foreignKey: 'sponsorId', as: 'sponsors' });

export default Offers;
