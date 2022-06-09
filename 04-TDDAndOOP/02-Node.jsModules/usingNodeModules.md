# Using Node.js Modules 

> Each js file has a module. Modules defined in a project are called local modules. Where each module is focused on implementing a single bit of functionality 

>4 pillars of OOP

### Core Modules 
Native modules to `Node.js` that perform tasks or functionality to API. 

- File paths `paths`
- Reading data from a stream of one line `readline` 
- Reading and writing files to the local system `fs` 
- Creating HTTP servers `http` 

### Third Party Modules 
Developers can publish modules for other developers to use distributed on `npm` 

## Adding a local module to Node.js Application 
Check classes.js in the relative folder 

The classes module will define the classes for a simple library catalog application

```js 
// Classes 

// The classes module will define the classes for a simple library catalog application

class CatalogItem { 
    constructor(title, series) { 
        this.title = title; 
        this.series = series;
    }

    getInformation() { 
        if (this.series) { 
            return `${this.title} (${this.series})`; 
        } else { 
            return this.title; 
        }
    }
}

class Book extends CatalogItem { 
    constructor(title, series, author) {
        super(title, series); 
        this.author = author; 
    }
}

class Movie extends CatalogItem { 
    constructor(title, series, director) {
        super(title, series); 
        this.director = director; 
    }

    getInformation() { 
        let result = super.getInformation(); 
        
        if (this.director) { 
            result +=` [directed by ${this.director}]`; 
        }
    }
}
```

> CatalogItem class represents an item in the library catalog. It serves as the parent class to the `Book` and `Movie` 

## Exporting from a module 
> Code contained within a module (.js file) is private by default. To make certain classes or variables accessible to other modules in the application, need to export them. 

### Set properties on the `module.exports` object 
To define a property for that item on the `module.exports` object. 

```js 
classes.js 

class CatalogItem{ 
    
}

class Book extends CatalogItem { 

}

class Movie extends CatalogItem { 

}

// Export the Book and Movie classes 
module.exports.Book = Book; 
module.exports.Movie = Movie; 
```

### Assign a new object to `module.exports` object 
```js 
module.exports = { 
    Book, 
    Movie, // Movie: movie,
}
```

### `exports` shortcut 
`exports` is intialzed to `module.exports` property value. Howver cannot use `exports` variable if you want to assign to a new object. 

```js
exports.book = Book; 
exports.Movie = movie; 
```

## Importing from a module 
Consider the `index.js` (application entry point)

```js 
// index.js 

// Use the `require()` function to import the `classes` module. 
const classes = require("./classes"); 

// Declare variables for each of the properties 
// defined on the `classes` object 
const Book = classes.Book; 
const Movie = classes.Movie;

// const { Book, Movie } = require("./classes"); 

const the GrapesofWrath = new Book(
    "The Grapes of Wrath", 
    null, 
    "John Steinback"
); 

const aNewHope = new Movie(
    "Epsiode 4: A New Hope", 
    "Star Wars", 
    "George Lucas"
); 

console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath 

console.log(aNewHope.getInformation()); // Epsiode 4: A New Hope (Star Wars) [directed by George Lucas]
```

To run the application `node index.js` in the directory 

- `index` module has a dependency on the `classes` module. 
