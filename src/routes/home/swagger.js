/**
 * @swagger
 * tags: index-page
 * description: index Section
 */

/**
 * @swagger
 *  /:
 *    get:
 *      tags: [index-page]
 *      summary: login user in userpanel with phone number
 *      description: one time password(OTP) login
 *      parameters:
 *        - in: header
 *          name: access-token
 *          example: Bearer YourToken..
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
