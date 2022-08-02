/**
 * @swagger
 * tags: Developer-Tools
 * description: developer tools section
 */

/**
 * @swagger
 *  /developer/hash-password/{password:}:
 *    get:
 *      summary: hash password
 *      tags: [Developer-Tools]
 *      description: get hash password
 *      parameters:
 *        - in: path
 *          type: string
 *          name: password
 *          required: true
 *      responses:
 *        200:
 *          description: success
 *        400:
 *          description: not found
 *        404:
 *          description: A user with the specified ID was not found.
 *        500:
 *          description: Internal Server Error
 */
