const { Schema, model } = require('mongoose');

const jobSchema = new Schema({
	"id": {
		"type": "Number"
	},
	"company": {
		"type": "String"
	},
	"logo": {
		"type": "String"
	},
	"logoBackground": {
		"type": "String"
	},
	"position": {
		"type": "String"
	},
	"postedAt": {
		"type": "String"
	},
	"contract": {
		"type": "String"
	},
	"location": {
		"type": "String"
	},
	"website": {
		"type": "String"
	},
	"apply": {
		"type": "String"
	},
	"description": {
		"type": "String"
	},
	"requirements": {
		"content": {
			"type": "String"
		},
		"items": {
			"type": [
				"String"
			]
		}
	},
	"role": {
		"content": {
			"type": "String"
		},
		"items": {
			"type": [
				"String"
			]
		}
	}
})

const Job = model('Job', jobSchema);
module.exports = Job;