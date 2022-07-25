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
 *          id:
 *            type: string
 *            description: the title of product
 *            example: 2222222222222
 *          username:
 *            type: string
 *            description: the title of product
 *            example: username123 
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
 *  post:
 *    summary: add user
 *    tags: [UserPage]
 *    description: add user
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/Add-User'
 *    responses:
 *      201:
 *        description: success
 *      400:
 *        description: not found
 *      404:
 *        description: A user with the specified ID was not found.
 *      500:
 *        description: Internal Server Error
 */