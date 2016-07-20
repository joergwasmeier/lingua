/**
 * Created by creativecode on 20.04.16.
 */


module.exports = {
  mediator: require('./AccountMediator'),
  store: require('./AccountStore'),
  view: require('./view/Login'),
  signUp: require('./view/SignUp'),
  forgotPass: require('./view/ForgotPass')
};

