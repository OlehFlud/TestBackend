module.exports = (sequelize,DataTypes) =>{
    const User = sequelize.define('User', {


        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        statusId:{
            type: DataTypes.INTEGER,
            allowNull: true
        }

    },{
        tableName: 'user',
        timestamps: false
    });


    return User;

};
