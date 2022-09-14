'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        avatar: DataTypes.STRING,
        gender: DataTypes.STRING,
        description: DataTypes.TEXT,
        RoleId: DataTypes.INTEGER,
        isActive: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    }, {});
    User.associate = function (models) {
        models.User.belongsTo(models.Role, { foreignKey: 'RoleId' });
        models.User.hasOne(models.Post);
        models.User.hasOne(models.Doctor_User, { foreignKey: 'doctorId' });
        models.User.hasMany(models.Patient, { foreignKey: 'doctorId' });
        models.User.hasMany(models.Schedule, { foreignKey: 'doctorId' });
        models.User.hasMany(models.Comment, { foreignKey: 'doctorId' });
    };

    return User;
};