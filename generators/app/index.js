const Generator = require('yeoman-generator');
const path = require('path');
const chalk = require('chalk');
const to = require('to-case');
const yosay = require('yosay');

class TrackMailGenerator extends Generator {
	welcome() {
		this.log(
			yosay(
				`
					Welcome to ${chalk.red('generator-mail-ru')}!
					This generator gives react, redux, tests, hooks and ci.
					Enjoy coding and be a diligent student!
				`,
			),
		);
	}

	// eslint-disable-next-line max-lines-per-function
	prompting() {
		const year = new Date().getFullYear();
		const user = process.env.USER;

		return this.prompt([
			{
				name: 'course',
				type: 'list',
				message: 'Your course:',
				choices: [
					{
						name: 'Techno-atom',
						value: 'atom',
					},
					{
						name: 'Techno-track',
						value: 'track',
					},
				],
			},
			{
				name: 'projectName',
				type: 'input',
				message: 'Project name:',
				default(answers) {
					return `${answers.course}-mail-${year}-${to.slug(
						user || path.basename(this.destinationPath()) || '',
					)}`;
				},
			},
			{
				name: 'projectDescription',
				type: 'input',
				message: 'Project description:',
				default(answers) {
					// eslint-disable-next-line max-len
					return `Mail.Ru Group Frontend ${to.title(answers.course || '')} course, ${year}`;
				},
			},
			{
				name: 'projectVersion',
				type: 'input',
				message: 'Project version:',
				default: '0.1.0',
			},
			{
				name: 'authorName',
				type: 'input',
				message: 'Author name:',
				default: to.title(user || 'No.Name'),
				store: true,
			},
			// eslint-disable-next-line max-len
		]).then((props) => {
			// To access props later use this.props.projectName;
			this.props = props;
		});
	}

	// eslint-disable-next-line max-lines-per-function,max-statements
	writing() {
		this.fs.copyTpl(
			this.templatePath('public/index.html'),
			this.destinationPath('public/index.html'),
			{
				projectName: to.title(this.props.projectName),
			},
		);
		this.fs.copyTpl(
			this.templatePath('public/manifest.json'),
			this.destinationPath('public/manifest.json'),
			{
				projectName: to.title(this.props.projectName),
			},
		);
		this.fs.copy(
			this.templatePath(`public/favicon-${this.props.course}.ico`),
			this.destinationPath('public/favicon.ico'),
		);
		this.fs.copy(
			this.templatePath('stylelint.config.js'),
			this.destinationPath('stylelint.config.js'),
		);
		this.fs.copy(this.templatePath('travis.yml'), this.destinationPath('.travis.yml'));
		this.fs.copy(
			this.templatePath('docker/frontend/Caddyfile'),
			this.destinationPath('docker/frontend/Caddyfile'),
		);
		this.fs.copy(
			this.templatePath('docker/frontend/dockerfile-prod'),
			this.destinationPath('docker/frontend/dockerfile-prod'),
		);
		this.fs.copy(
			this.templatePath('docker/frontend/Dockerfile'),
			this.destinationPath('docker/frontend/Dockerfile'),
		);
		this.fs.copy(
			this.templatePath('docker-compose.yml'),
			this.destinationPath('docker-compose.yml'),
		);
		this.fs.copy(
			this.templatePath('docker-compose-prod.yml'),
			this.destinationPath('docker-compose-prod.yml'),
		);
		this.fs.copy(this.templatePath('dockerignore'), this.destinationPath('.dockerignore'));
		this.fs.copy(this.templatePath('nvmrc'), this.destinationPath('.nvmrc'));
		this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {
			projectName: to.title(this.props.projectName),
		});

		this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
		this.fs.copy(this.templatePath('env'), this.destinationPath('.env'));

		this.fs.copy(this.templatePath('gitattributes'), this.destinationPath('.gitattributes'));

		this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
		this.fs.copy(this.templatePath('prettier.config.js'), this.destinationPath('prettier.config.js'));
		this.fs.copy(this.templatePath('eslintignore'), this.destinationPath('.eslintignore'));
		this.fs.copy(this.templatePath('eslintrc.json'), this.destinationPath('.eslintrc.json'));
		this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
		this.fs.copyTpl(
			this.templatePath('src/components/Header.js'),
			this.destinationPath('src/components/Header.js'),
			{
				course: to.title(this.props.course),
			},
		);
		this.fs.delete(this.destinationPath('src/assets'));
		this.fs.copy(
			this.templatePath(`src/assets/logo-${this.props.course}.svg`),
			this.destinationPath('src/assets/logo.svg'),
		);
		this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {
			projectName: this.props.projectName,
			projectDescription: this.props.projectDescription,
			projectVersion: this.props.projectVersion,
			authorName: this.props.authorName,
		});
		this.fs.copyTpl(
			this.templatePath('package-lock.json'),
			this.destinationPath('package-lock.json'),
			{
				projectName: this.props.projectName,
				projectVersion: this.props.projectVersion,
			},
		);
	}
}

module.exports = TrackMailGenerator;
