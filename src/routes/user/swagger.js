/**
 * @swagger
 * tags: UserPage
 * description: user page section
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Add-User:
 *        type: object
 *        properties: 
 *          username:
 *            type: string
 *            description: Enter unique username
 *            example: johndoe123 
 *          email:
 *            type: string
 *            description: Enter unique email
 *            example: johndoe123@ccc.com 
 *          mobile:
 *            type: string
 *            description: Enter unique mobile
 *            example: '09123456789' 
 */

/**
 * @swagger
 *  /user/list:
 *  get:
 *    summary: list of all users
 *    tags: [UserPage]
 *    description: get all users
 *    responses:
 *      200:
 *        description: success
 *      400:
 *        description: not found
 *      404:
 *        description: A user with the specified ID was not found.
 *      500:
 *        description: Internal Server Error
 */

/**
 * @swagger
 *  /user/{id}:
 *  get:
 *    summary: get user by id
 *    tags: [UserPage]
 *    description: get user by id
 *    parameters:
 *    - name: id
 *      description: user Id
 *      in: path
 *      required: true
 *      type: string
 *      example: '20220711000914145000000001'
 *    responses:
 *      200:
 *        description: removed the Permission
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/publicDefinition'
 *      400:
 *        description: not found
 *      404:
 *        description: A user with the specified ID was not found.
 *      500:
 *        description: Internal Server Error
 */

/**
 * @swagger
 *  /user/add:
 *    post:
 *      tags: [UserPage]
 *      summary: add user
 *      description: add user
 *      requestBody:
 *        required: true
 *        content:
 *          application/x-www-form-urlencoded:
 *            schema:
 *              $ref: '#/components/schemas/Add-User'
 *      responses:
 *        201:
 *          description: success
 *        400:
 *          description: not found
 *        404:
 *          description: A user with the specified ID was not found.
 *        500:
 *          description: Internal Server Error
 */