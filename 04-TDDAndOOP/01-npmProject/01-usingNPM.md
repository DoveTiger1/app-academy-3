# NPM Packages 

[packages-vs-project-vs-class](http://techtuts.techismylife.com/cs-i-java/intro-to-java/project-vs-package-vs-class/)

## Outline 
- using npm to intialise a new package or project 
- using npm to install a package 
- using an npm package in code 
- difference between dependencies and devDependencies 

package.json is a package however unpublished packages are referred to as projects 

## Intialising a project to use npm 
- npm will prompt you to supply the following field values, one at a time:

- package name (or simply name) - If you're going to publish your package, setting your package name to something useful is very important. For typical development projects, it's okay to just accept the default value, which will be the name of the current folder.

- version - Node uses the semver (semantic versioning) package to manage your package/project's versioning. The default is 1.0.0, but the recommended standard is 0.1.0, indicating the first minor version. See here for an introduction to SemVer.

- description - A description is really only necessary if you're going to publish your package, as it's displayed to users when they're searching the npm registry.

- entry point (or main) - The file to use as the entry point to your application (typically index.js or app.js).

- test command - If you're going to write tests for your package, you can provide the command to run those tests. For now, just press enter without providing a value to accept the default value.

- git repository - If you want other developers to be able to find the Git repository for your package, you can provide the URL to the repo here. For now, it's okay to skip it by pressing enter.

- keywords - Keywords are used to help people find your package in the npm registry. For now, just leave this field blank.

- author - If you're the author of the package and you want your name (and contact information) associated with the package, you can provide that information here. For now, let's just leave this field blank.

- license - This is the license for your package. It's only important to provide if you're going to publish your package. This defaults to the ISC License, which for our purposes, will work just fine (since we're not going to publish our package).

## Display preview of package.json
```js
{
  "name": "introduction-to-npm",
  "version": "1.0.0",
  "description": "A simple project to explore using npm",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },`
  "author": "",
  "license": "ISC"
}
```
### Using default values 
```npm init --y```

## Dependency types 
`Dependencies` packages that needed to run when in production. 

`Development dependencies` packages needed locally when doing development on the project. To test the API. 

### Installing a development dependency 
`npm install mocha --save-dev`

The `--save-dev` falg causes npm will add to the package to the devDependecies field in the package.json file 

```js 
{
  "dependencies": {
    "colors": "^1.4.0"
  },
  "devDependencies": {
    "mocha": "^7.0.1"
  }
}
```
