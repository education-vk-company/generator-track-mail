const Generator = require('yeoman-generator')
const path = require('path')
const chalk = require('chalk')
const to = require('to-case')
const yosay = require('yosay')

class TrackMailGenerator extends Generator {
  welcome() {
    this.log(
      yosay(
        `
        Welcome to ${chalk.red('generator-track-mail')}!
        This generator gives react, redux, tests, hooks and ci.
        Enjoy coding and be a diligent student!
      `,
      ),
    )
  }

  prompting() {
    const year = new Date().getFullYear()
    const user = process.env.USER

    return this.prompt([
      {
        name: 'projectName',
        type: 'input',
        message: 'Project name:',
        default: `track-mailru-${year}-${to.slug(user || path.basename(this.destinationPath()))}`,
      },
      {
        name: 'projectDescription',
        type: 'input',
        message: 'Project description:',
        default: `Mail.Ru Group Frontend course, ${year}`,
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
        default: to.title(user),
        store: true,
      },
    ]).then((props) => {
      // To access props later use this.props.projectName;
      this.props = props
    })
  }

  writing() {
    // Return {
    //   public() {
    this.fs.copyTpl(this.templatePath('public/index.html'), this.destinationPath('public/index.html'), {
      projectName: to.title(this.props.projectName),
    })
    this.fs.copyTpl(this.templatePath('public/manifest.json'), this.destinationPath('public/manifest.json'), {
      projectName: to.title(this.props.projectName),
    })
    this.fs.copy(this.templatePath('public/favicon.ico'), this.destinationPath('public/favicon.ico'))
    // },
    // jestConfig() {
    this.fs.copy(this.templatePath('jest.config.js'), this.destinationPath('jest.config.js'))
    // },
    // styleLintConfig() {
    this.fs.copy(this.templatePath('stylelint.config.js'), this.destinationPath('stylelint.config.js'))
    // },
    // travis() {
    this.fs.copy(this.templatePath('travis.yml'), this.destinationPath('.travis.yml'))
    // },
    // babelrc() {
    this.fs.copy(this.templatePath('babelrc'), this.destinationPath('.babelrc'))
    // },
    // docker() {
    this.fs.copy(this.templatePath('docker/frontend/Dockerfile'), this.destinationPath('docker/frontend/Dockerfile'))
    this.fs.copy(this.templatePath('docker-compose.yml'), this.destinationPath('docker-compose.yml'))
    // },
    // dockerignore() {
    this.fs.copy(this.templatePath('dockerignore'), this.destinationPath('.dockerignore'))
    // },
    // nvmrc() {
    this.fs.copy(this.templatePath('nvmrc'), this.destinationPath('.nvmrc'))
    // },
    // readme() {
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {
      projectName: to.title(this.props.projectName),
    })
    // },

    // gitignore() {
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'))
    // },
    this.fs.copy(this.templatePath('env'), this.destinationPath('.env'))

    // gitattributes() {
    this.fs.copy(this.templatePath('gitattributes'), this.destinationPath('.gitattributes'))
    // },

    // editorconfig() {
    this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'))
    // },

    // prettierrc() {
    this.fs.copy(this.templatePath('prettierrc'), this.destinationPath('.prettierrc'))
    // },

    // eslintignore() {
    this.fs.copy(this.templatePath('eslintignore'), this.destinationPath('.eslintignore'))
    // },

    // eslintrc() {
    this.fs.copy(this.templatePath('eslintrc.json'), this.destinationPath('.eslintrc.json'))
    // },

    // src() {
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'))
    // },

    // packageJSON() {
    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {
      projectName: this.props.projectName,
      projectDescription: this.props.projectDescription,
      projectVersion: this.props.projectVersion,
      authorName: this.props.authorName,
    })
    // },
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false,
    })
  }
}

module.exports = TrackMailGenerator
