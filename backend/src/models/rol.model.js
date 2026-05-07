'use strict';

module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('Rol', {
    id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre:      { type: DataTypes.STRING(50), allowNull: false, unique: true },
    descripcion: { type: DataTypes.TEXT },
  }, {
    tableName:  'roles',
    timestamps: true,
    createdAt:  'fecha_creacion',
    updatedAt:  'fecha_actualizacion',
  });

  return Rol;
};
