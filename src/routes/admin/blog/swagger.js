/**
 * @swagger
 * tags: admin-panel
 * description: Category page section
 */

/**
 * @swagger
 *  /admin/blogs/all:
 *    get:
 *      tags: [CategoryPage]
 *      summary: get all item of blogs
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
