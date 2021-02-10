# Express JS REST Quickstart
> A base REST API project using Express and Node

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/express-rest-quickstart?include_prereleases=&sort=semver)](https://github.com/MichaelCurrin/express-rest-quickstart/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![Package - express](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/express-rest-quickstart/express?logo=express&logoColor=white)](https://www.npmjs.com/package/express)


## Requirements

- [Node.js](https://nodejs.org)


## Installation

### Install system dependencies

Install Node.js using this [gist](https://gist.github.com/MichaelCurrin/aa1fc56419a355972b96bce23f3bccba).

### Clone project

Clone repo.

```sh
$ git clone git@github.com:MichaelCurrin/express-rest-quickstart.git
$ cd express-js-create-app-quickstart
```

### Install project dependencies

```sh
npm install
```


## Usage

### Serve

Start local dev server.

```sh
$ npm start
```

Open in the browser:

- http://localhost:3000/

### Request

While the server is running, you can run these in another terminal tab.

```sh
$ curl http://localhost:3000/

$ curl http://localhost:3000/foo

$ curl http://localhost:3000/foo -X POST

$ # Form data.
$ curl http://localhost:3000/foo -X POST -d 'a=b'
$ # JSON data.
$ curl http://localhost:3000/foo -X POST -d '{"a": "b"}' -H "Content-Type: application/json"

$ curl http://localhost:3000/foo -X DELETE

$ curl http://localhost:3000/foo/123

$ curl http://localhost:3000/bar

$ # Verbose flag shows the error code.
$ curl -v http://localhost:3000/baz
$ curl -v http://localhost:3000/admin
```


## Developer notes

### Attributes of the request object

```javascript
req.body
req.url
req.headers
req.query
req.params
```

### Body parse

You do not need use use `bodyparser` package anymore to handle JSON body - see resources.

The `.urlencoded` middleware is needed to parse the form data. You pass explicitly pass it `extended` option (default is `true`), to avoid a deprecation warning. See [express #3650](https://github.com/expressjs/express/issues/3650).

The `.json` middleware parse JSON-formatted text for bodies with a Content-Type of `application/json`.


## Resources

- [expressjs.com](https://expressjs.com/) homepage.
- [express](https://www.npmjs.com/package/express) package on NPM.
- Express docs
    - [Quickstart](https://expressjs.com/en/starter/hello-world.html)
    - [Routing](https://expressjs.com/en/starter/basic-routing.html)
    - [Route paths](http://expressjs.com/en/guide/routing.html#route-paths)
    - [express Methods](http://expressjs.com/en/api.html#express.json)
- Posts
    - [You may not need bodyparser](https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c)
    - [Get HTTP POST Body in Express.js](https://stackabuse.com/get-http-post-body-in-express-js/)
    - [How to setup Express JS server](https://dev.to/kyrelldixon/how-to-setup-an-express-js-server-in-node-js-56hp) - includes how to test in multiple ways


## Related projects

- [![MichaelCurrin - express-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=express-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/express-quickstart)
- [![MichaelCurrin - node-project-template](https://img.shields.io/static/v1?label=MichaelCurrin&message=node-project-template&color=blue&logo=github)](https://github.com/MichaelCurrin/node-project-template)


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
