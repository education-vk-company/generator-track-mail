const helpers = require('yeoman-test')
const fs = require('fs')
const path = require('path')

const cases = [
  {
    'desc': 'generates an index.html file',
    'files': ['public/index.html'],
  },
  {
    'desc': 'generates a favicon.ico file',
    'files': ['public/favicon.ico'],
  },
  {
    'desc': 'generates a manifest.json file',
    'files': ['public/manifest.json'],
  },
  {
    'desc': 'generates docker files',
    'files': [
      'docker',
      'docker-compose.yml',
      'docker-compose-prod.yml',
    ],
  },
  {
    'desc': 'generates a src folder',
    'files': ['src'],
  },
  {
    'desc': 'generates an .editorconfig file',
    'files': ['.editorconfig'],
  },
  {
    'desc': 'generates an .env file',
    'files': ['.env'],
  },
  {
    'desc': 'generates a .gitignore file',
    'files': ['.gitignore'],
  },
  {
    'desc': 'generates a .gitattributes file',
    'files': ['.gitattributes'],
  },
  {
    'desc': 'generates a .eslintignore file',
    'files': ['.eslintignore'],
  },
  {
    'desc': 'generates a eslintrc.json file',
    'files': ['.eslintrc.json'],
  },
  {
    'desc': 'generates a .prettierrc file',
    'files': ['.prettierrc'],
  },
  {
    'desc': 'generates a stylelint.config.js file',
    'files': ['stylelint.config.js'],
  },
  {
    'desc': 'generates a .babelrc file',
    'files': ['.babelrc'],
  },
  {
    'desc': 'generates a .travis.yml file',
    'files': ['.travis.yml'],
  },
  {
    'desc': 'generates package.json files',
    'files': [
      'package.json',
      'package-lock.json',
    ],
  },
  {
    'desc': 'generates a .dockerignore file',
    'files': ['.dockerignore'],
  },
  {
    'desc': 'generates a jest.config.js file',
    'files': ['jest.config.js'],
  },
  {
    'desc': 'generates a .nvmrc file',
    'files': ['.nvmrc'],
  },
  {
    'desc': 'generates a README.md file',
    'files': ['README.md'],
  },
]

describe('run yeoman generator-track-mail ', () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, '../generators/app'))
    .withPrompts({
      'projectName': 'projectName',
      'projectDescription': 'projectDescription',
      'projectVersion': 'projectVersion',
      'authorName': 'authorName',
    })
    .toPromise())

  // test included files
  for (const { desc, files } of cases) {
    files.forEach((filePath) => {
      test(desc, () => {
        expect.hasAssertions()
        expect(fs.existsSync(filePath)).toBe(true)
      })
    })
  }
})
