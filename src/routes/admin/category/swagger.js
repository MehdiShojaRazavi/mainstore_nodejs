/**
 * @swagger
 * tags: admin-panel
 * description: Category page section
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *       Add-Category:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *              description: Enter unique category
 *              example: johndoe123 
 *            parent:
 *              type: string
 *              description: Enter category Id
 *              example: 62ea34a2cac9041c8941636a 
 */

/**
 * @swagger
 *  /admin/category/add:
 *    post:
 *      tags: [CategoryPage]
 *      summary: add category
 *      description: add category
 *      requestBody:
 *        content:
 *          application/x-www-form-urlencoded:
 *            schema:
 *              $ref: '#/components/schemas/Add-Category'
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

/**
 * @swagger
 *  /admin/category/parents:
 *    get:
 *      tags: [CategoryPage]
 *      summary: get all category
 *      description: get all category
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

/**
 * @swagger
 *  /admin/category/children/{parent}:
 *    get:
 *      tags: [CategoryPage]
 *      summary: get all category
 *      description: get all category
 *      parameters:
 *         -   in: path
 *             name: parent
 *             type: string
 *             description: Enter parentID
 *             example: 62ea34a2cac9041c8941636a
 *      responses:
 *        201:
 *          description: success
 *        400:
 *          description: not found
 *        404:
 *          description: A children of category with the specified ParentID was not found.
 *        500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 *  /admin/category/all:
 *    get:
 *      tags: [CategoryPage]
 *      summary: get all category
 *      description: get all category
 *      responses:
 *        201:
 *          description: success
 *        400:
 *          description: not found
 *        404:
 *          description: A children of category with the specified ParentID was not found.
 *        500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 *  /admin/category/remove/{categoryId}:
 *    delete:
 *      tags: [CategoryPage]
 *      summary: remove category By Id
 *      description: remove category with sub category By Id
 *      parameters:
 *      -   in: path
 *          name: categoryId
 *          type: string
 *          required: true
 *          example: 62ea37bc0c07b3e53000015f
 *      responses:
 *        201:
 *          description: success
 *        400:
 *          description: not found
 *        404:
 *          description: A children of category with the specified ParentID was not found.
 *        500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 *  /admin/category/{id}:
 *    get:
 *      tags: [CategoryPage]
 *      summary: get category by Id
 *      parameters:
 *      -   in: path
 *          name: id
 *          type: string
 *          required: true
 *          example: '62ef7af4182dac1b8ffde30d'
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
