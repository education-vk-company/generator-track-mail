const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

class FunctionsGenerator extends Generator {
  welcome () {
    this.log(
      yosay(
        `
        ${chalk.red('Functions ')} are on the way!!
        This generator gives tasks and tests for them.
        Enjoy coding and be a diligent student!
      `,
      ),
    )
  }

  // eslint-disable-next-line max-lines-per-function,max-statements
  writing () {
    this.fs.copy(
      this.templatePath('convertBytesToHuman.js'),
      this.destinationPath('convertBytesToHuman.js')
    )
    this.fs.copy(
      this.templatePath('convertBytesToHuman.test.js'),
      this.destinationPath('convertBytesToHuman.test.js')
    )
    this.fs.copy(
      this.templatePath('correctSentence.js'),
      this.destinationPath('correctSentence.js')
    )
    this.fs.copy(
      this.templatePath('correctSentence.test.js'),
      this.destinationPath('correctSentence.test.js')
    )
    this.fs.copy(
      this.templatePath('nonUniqueElements.js'),
      this.destinationPath('nonUniqueElements.js')
    )
    this.fs.copy(
      this.templatePath('nonUniqueElements.test.js'),
      this.destinationPath('nonUniqueElements.test.js')
    )
  }
}

module.exports = FunctionsGenerator
