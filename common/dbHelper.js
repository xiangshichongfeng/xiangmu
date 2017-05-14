var sd = require('silly-datetime');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    models = require('./models');

for (var m in models) {
    mongoose.model(m, new Schema(models[m]));
}

module.exports = {
    getModel: function (type) {
        return _getModel(type);
    }
};

var _getModel = function (type) {
    return mongoose.model(type);
};

//initialize database
var User = mongoose.model('user');
User.findOne({name: 'admin'}, function (error, doc) {
	if(error) {
       console.log(error);
	} else {
		if(!doc) {
      var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm'); //添加用户时间
		   User.create({
             name: 'admin',
             password: 'admin',
             createTime: time,
             type: 1 //admin user
          }, function (error, doc)	{

          }); }
	}
});


