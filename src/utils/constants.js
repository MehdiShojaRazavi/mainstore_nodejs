module.exports = {
    MongoIDPattern : /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i ,
    EXPIRES_IN : new Date().getTime() + 120000,
    ROLES : Object.freeze({
        USER : "USER",
        ADMIN : "ADMIN",
        WRITER : "WRITER",
        TEACHER : "TEACHER",
        SUPPLIER : "SUPPLIER"
    }),
    PERMISSIONS : Object.freeze({
        USER : ["profile"],
        ADMIN : ["all"],
        SUPERADMIN : ["all"],
        CONTENT_MANAGER :[ "course", "blog", "category", "product"],
        TEACHER :[ "course", "blog"],
        SUPPLIER : ["product"],
        ALL : "all"
    }),
    ACCESS_TOKEN_SECRET_KEY : "BA0013EE0CB7526536BDAB9AA4D778FFCD074B706F1F22255D51670BBBE5FD17",
    REFRESH_TOKEN_SECRET_KEY : "83593D3846A908D7C6C5B349BF1B39C76D00FECE8D50770DC653359CA388BE43"
}

