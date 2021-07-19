const { registerValidation, loginValidation } = require("../validation");
const Kullanici = require("../model/Kullanici");
const bcrypt = require("bcryptjs");
const jtw = require("jsonwebtoken");

exports.register = async (req,res) => {
    try {
          // kullanıcı kayıt olmadan kontrol
          const { error } = registerValidation(req.body);
          if (error) return res.status(400).json({ success:false,
            message: error.details[0].message });
        
          // email db kontrol
        
          const emailExist = await Kullanici.findOne({ email: req.body.email });
          if (emailExist) return res.status(400).json({
            success:false,  
              msg:"Email already exists"});
        
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
          // yeni kullanıcı oluşturma
          const user = new Kullanici({
            email: req.body.email,
            password: hashedPassword,
          });
            const savedUser = await user.save();
            res.send({ user: user});  
    } catch (error) {
        console.log(error,"erro");
    }
}

exports.login = async (req,res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    const user = await Kullanici.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({success:false, message: "Yanlış email " });
    //password dogru değil ise
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({success:false, message: "yanlis sifre" });
  
    //token oluşturma ve assing etme
    console.log(user._id);
    const token = jtw.sign({ id: user._id,role:user.role,email:user.email }, process.env.TOKEN_SECRET);
    res
      .header("auth-token", token)
      .status(200)
      .json({ token: token, id: user._id });
}
