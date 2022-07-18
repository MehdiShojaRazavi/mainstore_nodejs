const service = require('./../../controller');

module.exports =  new (class extends service {


  async home(req, res){
    this.response({
      res,
      message: "home",
      data: ""
    })
  };

  async getUsers(req, res){
    const users = await this.User.find({});

    if (!users) {
      return this.response({
        res,
        code: 400,
        message: "invalid eamil or password",
      });
    }
 
    this.response({
      res,
      message: "ok",
      data: users
    })

  }

  //addUser

  async addUser(req, res) {

    console.log('add user route is active');
    console.log('req.body:', req.body);
    // console.log('req.body.profilePictureUrl:', req.body.profilePictureUrl);

    const user = this.User({
      id: req.body.id,
      contact: req.body.contact,    // req.body.contact = {firstName, lastName, email}
      profilePictureUrl: req.body.profilePictureUrl,
      username: req.body.username
      // favorites: ["productivity", "programming", "music"],
    });
    const result = await user.save();
    console.log('result <<<<', result, ">>>>");

    this.response({
      res,
      message: "ok",
      data: user
    })
 
//==================

  // let newUser = new User({
  //   first_name: req.body.first_name,
  //   last_name: req.body.last_name,
  //   email: req.body.email,
  // });

  // newUser = await newUser.save();
  // res.json({
  //   data: newUser,
  //   message: "ok",
  // });


 }
})();