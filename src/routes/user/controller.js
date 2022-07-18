const service = require('./../../../controller');

module.exports =  new (class extends service {

  async getUsers(req, res){
    const users = await this.User.find();

    if (!users) {
      res.json({
        code: 400,
        message: "invalid eamil or password",
      });
    }
 
    res.json({
      message: "ok",
      data: users
    })

  }

  async addUser(req, res) {

    console.log('add user route is active');
    console.log('req.body:', req.body);

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