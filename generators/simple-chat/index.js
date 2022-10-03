const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

class FunctionsGenerator extends Generator {
	welcome() {
		this.log(
			yosay(
				`
					${chalk.red('Simple Chat Example')} is being generated!
				`,
			),
		);
	}

	writing() {
		this.fs.copy(
			this.templatePath('src'),
			this.destinationPath('simple-chat/src'),
		);
		this.fs.copy(
			this.templatePath('package.json'),
			this.destinationPath('simple-chat/package.json'),
		);
		this.fs.copy(
			this.templatePath('webpack.config.js'),
			this.destinationPath('simple-chat/webpack.config.js'),
		);
	}
}

module.exports = FunctionsGenerator;
