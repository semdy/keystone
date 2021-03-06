var keystone = require('../../../../index.js');
var Types = keystone.Field.Types;

var Bool = new keystone.List('Boolean', {
	autokey: {
		path: 'key', 
		from: 'name', 
		unique: true,
	},
	track: true,
});

Bool.add({
	name: {
		type: String, 
		initial: true, 
		required: true, 
		index: true,
	},
	fieldA: {
		type: Boolean, 
		initial: true, 
		index: true,
	},
	fieldB: {
		type: Boolean, 
		index: true,
	},
});

Bool.defaultColumns = 'name, fieldA, fieldB';
Bool.register();

module.exports = Bool;
