const moment = require("moment")
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const {User} = require('./../models/user');
const { ACCESS_TOKEN_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } = require("./constants");
const redisClient = require("../../startup/initRedis");
const {Category: CategoryModel} = require('./../models/category');
function idGenerator(){
    return moment().format("YYYYMMDDHHmmssSSS") + String(process.hrtime()[1]).padStart(9, 0)
}
function randomNumberGenarator(){
    return Math.floor((Math.random() * 90000) + 10000);
}
function signAccessToken(userId){
    return new Promise(async (resolve, reject) => {
        const user = await User.findById(userId);
        if (!user) throw createError.NotFound();
        const payload = {
            mobile: user.mobile,
        };
        const SECRET_KEY = ACCESS_TOKEN_SECRET_KEY
        const options = {
            expiresIn : '1h'
        };
        jwt.sign(payload, SECRET_KEY, options, (error, token) => {
            if (error) reject(createError.InternalServerError());
            resolve(token);
        })
    });
};
function signRefreshToken(userId){
    console.log('signRefreshToken');
    return new Promise(async (resolve, reject) => {
        const user = await User.findById(userId);
        if (!user) throw createError.NotFound();
        const payload = {
            mobile: user.mobile,
        };
        const options = {
            expiresIn : '1y'
        };
        jwt.sign(payload, REFRESH_TOKEN_SECRET_KEY, options, async(error, token) => {
            if (error) reject(createError.InternalServerError());
            await redisClient.set(userId.valueOf(), token, {
                EX: (365*24*60*60),
                NX: true
              });
            resolve(token);
        })
    });
};
function verifyRefreshToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, REFRESH_TOKEN_SECRET_KEY, async (err, payload) => {
            if (err) reject(createError.Unauthorized("Please login"))
            const { mobile } = payload || {};
            const user = await User.findOne({ mobile }, { password: 0, otp: 0 })
            if (!user) reject(createError.Unauthorized("Account not found"))
            const refreshToken = await redisClient.get(user._id.valueOf());
            if (token === refreshToken) return resolve(mobile);
            reject(createError.Unauthorized('Login Faild'));
        });
    });
};
async function checkExistCategory(categoryId) {
    const category = await CategoryModel.findById(categoryId);
    if (!category) throw createError.NotFound('Category not found');
    return category;
};
module.exports = {
    idGenerator,
    randomNumberGenarator,
    signAccessToken,
    signRefreshToken,
    verifyRefreshToken,
    checkExistCategory
}