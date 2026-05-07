'use strict';

module.exports = (sequelize, DataTypes) => {
  const Reporte = sequelize.define('Reporte', {
    id:                   { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo:               { type: DataTypes.STRING(150), allowNull: false },
    descripcion:          { type: DataTypes.TEXT, allowNull: false },
    direccion_referencia: { type: DataTypes.STRING(255) },
    latitud:              { type: DataTypes.DECIMAL(9, 6), allowNull: false },
    longitud:             { type: DataTypes.DECIMAL(9, 6), allowNull: false },
    usuario_id:           { type: DataTypes.INTEGER, allowNull: false },
    estado_id:            { type: DataTypes.INTEGER, allowNull: false },
    categoria_id:         { type: DataTypes.INTEGER, allowNull: false },
    votos:                { type: DataTypes.INTEGER, defaultValue: 0 },
    votantes:             { type: DataTypes.JSONB, defaultValue: [] },
    asignado_a:           { type: DataTypes.INTEGER, allowNull: true },
    reportes_contenido:   { type: DataTypes.JSONB, defaultValue: [] },
    motivo_rechazo:       { type: DataTypes.TEXT, allowNull: true },
    estado_bloqueado:     { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    tableName:  'reports',
    timestamps: true,
    createdAt:  'fecha_reporte',
    updatedAt:  'fecha_actualizacion',
  });

  return Reporte;
};
