# Express JS Rest Quickstart
> A base REST API project using Express and Node


## Requirements

- NodeJS


## Installation


### Install system dependencies

Install NodeJS using this [gist](https://gist.github.com/MichaelCurrin/aa1fc56419a355972b96bce23f3bccba).

### Clone project

Clone repo.

```sh
$ git clone git@github.com:MichaelCurrin/express-js-create-app-quickstart.git
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
$ npm serve
```

Open in the browser.

- http://localhost:3000


### Request

While the server is running:


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


## Resources

- Express
    - [Quickstart](https://expressjs.com/en/starter/hello-world.html)
    - [Routing](https://expressjs.com/en/starter/basic-routing.html)
    - [Route paths](http://expressjs.com/en/guide/routing.html#route-paths)
    - [express Methods](http://expressjs.com/en/api.html#express.json)
- Posts
    - [You may not need bodyparser](https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c)
    - [Get HTTP POST Body in Express.js](https://stackabuse.com/get-http-post-body-in-express-js/)


## Notes


### Attributes of request object

```javascript
req.body
req.url
req.headers
req.query
req.params
```

### Body parse

You do not need use use `bodyparser` package anymore to handle JSON body - see resources.

The `.urlencoded` middleware is needed to parse the form data.

The `.json` middleware parse JSON-formatted text for bodies with a Content-Type of `application/json`.


## License

Released under [MIT](/LICENSE)
