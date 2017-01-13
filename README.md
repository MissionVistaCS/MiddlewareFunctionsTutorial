##What are middleware functions?

* Middlewares are functions that handle an incoming HTTP request. That is, whenever a browser makes a request to your website (e.g. a reload or password submit), the request is processed through all the middleware functions and eventually a response is sent back to you.

* Essentially, an express server is a stack of middlewares that a request can traverse through. The last middleware (technically called a response handler) sends a response back to the client (i.e. browser).

##How do I register a middleware function?

* Use 
```javascript
app.use(PATH, function(req, res, next) {/* Middleware function code goes here */} );
```

* PATH is just a string specifying for what requests the middleware should be used for. For example, for a path of '/hello', the middleware function would only be called when going to 'http://your_cool_domain_name.com/hello'.

* You can omit PATH and the middleware will be called for ALL requests.
##How are middleware functions processed?

* Middlewares are called in the order they are registered.

##What are some uses for middleware functions?
