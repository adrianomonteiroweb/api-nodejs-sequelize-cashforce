import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/config';

class CNPJs extends Model {
  id!: number;
  cnpj!: string;
  companyType!: string;
}

CNPJs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    cnpj: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    companyType: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

export default CNPJs;
