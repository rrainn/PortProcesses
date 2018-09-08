const { exec } = require('child_process');

module.exports = cmd => {
	return new Promise((resolve, reject) => {
		exec(cmd, (err, stdout, stderr) => {
			if (err) {
				reject(err);
			} else {
				resolve({output: stdout, error: stderr});
			}
		});
	});
};
