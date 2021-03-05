const sequelize = require('../db')
const {DataTypes}=require('sequelize')
const { dasherize } = require('inflection')
const { REPL_MODE_SLOPPY } = require('repl')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncriment: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type:DataTypes.STRING, defaultValue: "USER"},
})
const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncriment: true},
})
const BasketDevice = sequelize.define('basket_device',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncriment: true},
})

const Device = sequelize.define('device',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncriment: true},
    name:{type: DataTypes.STRING,unique: true, allowNull:false},
    price:{type: DataTypes.INTEGER, allowNull:false},
    rating:{type: DataTypes.INTEGER,defaultValue:0},
    img:{type: DataTypes.STRING, allowNull:false},
})
const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncriment: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})
const Brand = sequelize.define('brand',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncriment: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})
const Rating = sequelize.define('rating',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncriment: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})
const DeviceInfo = sequelize.define('deviceInfo',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncriment: true},
    title: {type: DataTypes.STRING,  allowNull: false},
    description: {type: DataTypes.STRING,  allowNull: false},
})

const TypeBrand=sequelize.define('type_brand',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncriment: true},
})
User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

Type.belongsTo(Brand, {through:TypeBrand})
Brand.belongsToMany(Type, {through:TypeBrand})

module.exports
{
    User,
     Basket,
      Device,
       DeviceInfo,
        Rating,
         BasketDevice,
         Type,
         Brand,
      TypeBrand
}

