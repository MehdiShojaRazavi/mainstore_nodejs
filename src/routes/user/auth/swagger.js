/**
 * @swagger
 * tags: User-Authentication
 * description: auth Section
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      GetOTP:
 *        type: object
 *        required:
 *          -   mobile
  *        properties:
 *          mobile:
 *            type: string
 *            description: the user mobile for signup/signin
 *            example: '09123456789'
 *      CheckOTP:
 *        type: object
 *        required:
 *          -   mobile
 *          -   code
 *        properties:
 *          mobile:
 *            type: string
 *            description: the user mobile for signup/signin
 *            example: '09123456789'
 *          code:
 *            type: string
 *            description: the user mobile for signup/signin
 *            example: '84539'
 *      refresh-token:
 *        type: object
 *        required:
 *          -   refreshToken
 *        properties:
 *          refreshToken:
 *            type: string
 *            description: refreshToken
 */

/**
 * @swagger
 *  /user/get-otp:
 *    post:
 *      tags: [User-Authentication]
 *      summary: login user in userpanel with phone number
 *      description: one time password(OTP) login
 *      requestBody:
 *        required: true
 *        content: 
 *          application/x-www-form-urlencoded:
 *            schema:
 *              $ref: '#/components/schemas/GetOTP'
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetOTP'
 *      responses:
 *        201: 
 *          description: Success
 *        400: 
 *          description: Bad Request
 *        401: 
 *          description: Unauthorization
 *        500: 
 *          description: Internal Server Error 
 */

/**
 * @swagger
 *  /user/check-otp:
 *    post:
 *      tags: [User-Authentication]
 *      summary: login user in userpanel with phone number
 *      description: one time password(OTP) login
 *      requestBody:
 *        required: true
 *        content: 
 *          application/x-www-form-urlencoded:
 *            schema:
 *              $ref: '#/components/schemas/CheckOTP'
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CheckOTP'
 *      responses:
 *        201: 
 *          description: Success
 *        400: 
 *          description: Bad Request
 *        401: 
 *          description: Unauthorization
 *        500: 
 *          description: Internal Server Error 
 */

/**
 * @swagger
 *  /user/refresh-token:
 *    post:
 *      tags: [User-Authentication]
 *      summary: send refresh token for get new token and refresh token
 *      description: refresh token
 *      requestBody:
 *        required: true
 *        content: 
 *          application/x-www-form-urlencoded:
 *            schema:
 *              $ref: '#/components/schemas/refresh-token'
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/refresh-token'
 *      responses:
 *        201: 
 *          description: Success
 *        400: 
 *          description: Bad Request
 *        401: 
 *          description: Unauthorization
 *        500: 
 *          description: Internal Server Error 
 */
