module.exports = function(sequelize, DataTypes) {
    var Time = sequelize.define('Time', {
        id: {
	  		primaryKey: true,
	  		type: DataTypes.INTEGER,
	  		autoIncrement: true
	  	},
	    hora: {
	    	type: DataTypes.DATE,
	    	allowNull: false
	    }
	}, {
	    tableName: 'Times'
	});
  return Time;
};