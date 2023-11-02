import user from "../models/signup.models.js";
export const signupapi = async (req, res) => {
  const usernamename = await user.findOne({ username: req.body.username });
  if (usernamename) {
    res.send({
      status: true,
    
      data: usernamename,
    });
  
  } else {
    res.send({
      status: false,
     
      data: {},
    });
  }
  
  var createdata = await user.create(req.body);

  res.send(createdata);
};

export const login = async (req, res) => {
  const loginapi = await user.findOne({ username: req.body.username });
  if (loginapi) {
    res.send({
      status: true,
      msg: "Login Succesfully",
      data: loginapi,
    });
  } else {
    res.send({
      status: false,
      msg: "Login not Succesfully",
      data: {},
    });
  }
};
