module.exports = {
    MongoIDPattern : /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i ,
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
    ACCESS_TOKEN_SECRET_KEY : "CCEBD888251E547C877C43A324B5DE12468F431EA0D19A259751E2C80EE35876",
    REFRESH_TOKEN_SECRET_KEY : "782285F688AC9B7CFF599230A39C49558A9D4B615B85AF706A80FAF52C897FB5"
}

