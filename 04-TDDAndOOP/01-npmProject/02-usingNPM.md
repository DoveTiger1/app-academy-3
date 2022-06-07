# 02 Using NPM

## Outline 

## Installing an existing project's dependencies 
`npm install`

## Uninstalling a dependency 
`npm uninstall package_name`

## Updating a dependency 
`npm update package_name`
`npm update` - to update all project dependencies 

## Re-installing a depndency with updated semver information 
`npm install package_name@latest`

## Finding package security vulnerabilites 
details about the vulnerabilities `npm audit`

## Fixing package security vulnerabilites
`npm audit fix`

- to resolve a security vulnerability, 
`npm audit fix --force`

## Writing npm scripts 

Npm scripts are defined using the `scripts` field in the `package.json` file 

```js 
{
  "scripts": {
    "start": "node index.js"
  }
}
```

Once defined, can run from terminal `npm start`

## Running npm scripts 
To run tests, write a test script to execute for example mocha like below. 

```js 
{
  "scripts": {
    "start": "node index.js"
    "tests": "mocha --watch"
  }
}
```

- to run test script `npm test`

## Defining custom scripts 
Consider `nodemon` package, a file watcher that will restart the application when changes are made to the project files 

To define a custom script, simply define a script with a name that's not in the list of predefined npm scripts. 

```js
{ 
    "scripts": {
        "start": "node index.js", 
        "test": "mocha --watch", 
        "watch": "nodemon index.js"
    }
}
```

To run watch script, you'd run in the terminal `npm run watch`
