const { Sequelize } = require("sequelize");
const db = require("../config/database.js");
const Balian = require("./BalianModel.js");
const Pengobatan = require("./PengobatanModel.js");

const { DataTypes } = Sequelize;

const Alternatif = db.define('alternatif_balian', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        primaryKey: true
    },
    balian_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    pengobatan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true,
    timestamps: 'true',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

Balian.belongsToMany(Pengobatan, { through: 'alternatif_balian', foreignKey: 'balian_id' });
Pengobatan.belongsToMany(Balian, { through: 'alternatif_balian', foreignKey: 'pengobatan_id' });

module.exports = Alternatif;