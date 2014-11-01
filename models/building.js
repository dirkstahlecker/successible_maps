var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = mongoose.Schema({
	name: String,
	floorplans: [{type: Schema.Types.ObjectId, ref: 'Floorplan'}]
});


module.exports = mongoose.model('Building', buildingSchema);