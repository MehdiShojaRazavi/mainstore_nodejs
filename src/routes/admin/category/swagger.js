/**
 * @swagger
 * tags: CategoryPage
 * description: Category page section
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Add-Category:
 *        type: object
 *        properties: 
 *          title:
 *            type: string
 *            description: Enter title
 *            example: johndoe123 
 *          parent:
 *            type: string
 *            allowEmptyValue: true
 *            description: Enter parent
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