import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/config';

import Orders from './OrdersModel';

class Orderportions extends Model {
  id!: number;
  nDup!: string;
  dVenc!: string;
  vDup!: string;
  availableToMarket!: number;
  orderId!: number;
}

Orderportions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    nDup: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    dVenc: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    vDup: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    availableToMarket: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: 'orderportions',
  }
);

export default Orderportions;
