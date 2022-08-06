module.exports = (sequelize, DataTypes)=>{
    const Message = sequelize.define("Message", {
        sender: {
            type: DataTypes.STRING,
            allowNull:false
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false
        },
        message_body: {
            type: DataTypes.STRING,
            allowNull:false
        },
        recipient: {
            type: DataTypes.STRING,
            allowNull:false
        },
    }, 
    {
     timestamps: true,
        createdAt: false,
        updatedAt: false,}
    )

   return Message;
};