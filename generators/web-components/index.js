const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

class WCGenerator extends Generator {
  welcome() {
    this.log(
      yosay(
        `
        ${chalk.red('Web Components')} are on the way!!
        This generator gives you template with the web component.
        Enjoy coding and be a diligent student!
      `,
      ),
    );
  }

  // eslint-disable-next-line max-lines-per-function,max-statements
  writing() {
    this.fs.copy(this.templatePath('src'), this.destinationPath('web-components/src'));
    this.fs.copy(this.templatePath('package.json'), this.destinationPath('web-components/package.json'));
    this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('web-components/webpack.config.js'));
  }
}

module.exports = WCGenerator;
