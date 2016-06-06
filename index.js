var exec = require('child_process').exec;
var moment = require('momentjs')

module.exports = (message) => {
    exec('git add -A', (err, stdout, stderr) => {
    	if(err) throw err;
    	console.log(stdout);
        message = message || 'Updated at ' + moment().format('f');
    	exec(`git commit -m "${message}"`, (err, stdout, stderr) => {
    		if(err) throw err;
    		console.log(stdout);
    		exec('git push', (err, stdout, stderr) => {
    			if(err) throw err;
    			console.log(stdout);
    		})
    	});
    });
}
