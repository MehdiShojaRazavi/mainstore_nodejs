const service = require('./../../../controller');
const {StatusCodes: HttpStatus} = require('http-status-codes')
module.exports =  new (class extends service {

  async getUsers(req, res){
    await this.User.find().then((users) => {
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data : {
          users
        }
      })
    }).catch((error) => {
      next(error);
    })
  }

  async addUser(req, res) {

    const user = this.User({
      id: req.body.id,
      contact: req.body.contact,   
      profilePictureUrl: req.body.profilePictureUrl,
      username: req.body.username
    });
    const result = await user.save();
    console.log('result <<<<', result, ">>>>");

    this.response({
      res,
      message: "ok",
      data: user
    })
 
 }
})();