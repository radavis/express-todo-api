# express-todo-api

## Debugging Express

[source](https://expressjs.com/en/guide/debugging.html)

```
$ DEBUG=express:* node server.js
```

## Create Database

```
$ mongo
> use express-todo-api_development
```

## Testing

[source](https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/)


```
$ mocha -R spec spec.js
```

TODO: change response codes
