[Return](https://github.com/LuisVA29/core-code-from-scratch-readme)
# Martes 14 de febrero de 2023
## Node.JS Core Understanding 
1. **What is Node.JS** <br>
    _Node.js is an open-source, cross-platform, JavaScript-based runtime environment which enables server-side scripting. It is used to develop networking and        server-side applications._<br>
    - **What is NPM?**<br>
    _NPM (Node Package Manager) is a package manager for JavaScript and Node.js that allows developers to install and manage packages of reusable code._<br>
2.  **What problem does Node.JS solve (Is there any problem that can be solved with Node.JS 🤔)?** <br>
    _Node.js solves the challenge of building fast and scalable network applications. It allows developers to use JavaScript, a language they are already familiar with, to build back-end services like web applications, mobile APIs, microservices and real-time applications. Node.js also allows developers to share code between the server and the client, enabling code reusability and faster development cycles._<br>
3.  **What is the V8 Javascript Engine?** <br>
    _The V8 Javascript Engine is an open source high-performance Javascript engine developed by Google and used in their Chrome web browser. It is used to convert code written in Javascript language into fast machine code, so that webpages might work faster._<br>
4.  **Is Node.JS really necessary in the Development ecosystem?** <br>
    _Yes, Node.js is necessary in the development ecosystem due to its maintainability, scalability, and the ability to use JavaScript for both the front and back end. Additionally, it provides modules which are organized into JavaScript files and reusable throughout the Node.js application._<br>
    - **Why not use PHP or Golang?** <br>
    _PHP is not suitable for web development due to its lack of restrictions and security issues, while Golang is not an object-oriented language and does not provide classes to use. Additionally, Node.js has better server-side I/O performance than both PHP and Golang._<br>
5.  **What is the difference between Node.JS and any other browser?** <br>
_Node.js is a JavaScript runtime environment that allows you to run JavaScript code on the server, outside of a browser. Other browsers are used to run JavaScript code inside of a browser._<br>
    - **Are Node.JS and a browser the same?** <br>
   _No. Node.js is a JavaScript runtime environment for running server-side code and handling server-side tasks, while a browser is used for viewing and interacting with webpages and applications._<br>
6.  **What is NVM and Why is it useful for Node.JS developers?** <br>
_Node Version Manager (NVM) is a tool used to manage multiple active Node.js versions, allowing developers to quickly install and use different versions of Node.js via the command line. It also helps keep developers away from errors and switch between different versions of Node on a per-shell basis._
## Node.JS Module System Core Understanding 
1. **What is a Javascript Module?**
_A Javascript Module is a piece of pre-written code that can be reused in other programs._
3. **Why are Javascript Modules necessary?**
_Javascript Modules are necessary for code organization and for preventing dependencies from conflicting._
4. **What module standards are available in Node.JS?**
_The module standards available in Node.JS are ESModules and CommonJS modules._
5. **What are the differences between ESModules and CommonJS modules?**
_The main difference between ESModules and CommonJS modules is that ESModules use static imports and exports, while CommonJS modules use require and module.exports._
6. **Which types of modules exist in Node.JS?**
_The types of modules that exist in Node.JS are ESModules, CommonJS modules, and JSON modules._
## Node.JS Hello World! - Practice
- [Node.JS Hello World! (Solution)](src/README.md) 
0. **Why do we run the npm init command and not node init to create a new Node.JS project?** <br>
    _Npm init is used to create a package.json file for a Node.JS project, which is used for configuration. Node init is not a valid command._
1. **When you entered the npm init command and answered the questions you saw in the terminal, a new file called packacke.json was generated.**
    - **What does this file do?**
_The package.json file is a manifest file that describes the attributes and dependencies of the project._
    - **Why is this file generated?**
_This file is generated to provide a consistent way to manage and track all the information associated with a project, including its dependencies and versions._
## Node.JS Module System - Practice
- [Node.JS Module System (Solution)](src/README.md) 
# Miércoles 15 de febrero de 2023
## Client-Server Model
1. **What is a Server?** <br>
_A server is a computer or program that distributes resources or supplies services to other computers or programs (known as clients) that are connected across a network._
2. **What is a Client?** <br>
_A client is a computer or program that requests services or resources from a server over a network._
3. **Is a server just another physical computer?** <br>
_Yes, a server is just another physical computer._
- **Why do we refer to a certain class of applications as Servers?** <br>
_We refer to a certain class of applications as servers because they provide services to other computers on a network._
- **What is the difference?** <br>
_The main difference between a server and a client is that a server provides services or resources to clients, while a client requests services or resources from a server._
4. **Is there any similarity between human communication and the client-server model?** <br>
_Yes, there is a similarity between human communication and the client-server model. Both are based on exchanging information in a two-way communication system, where one party ("the client") requests information or a service from another ("the server") and the server provides it._
- **List some examples** <br>
_A person ordering food at a restaurant (client) and the waiter delivering the food (server), or a person making a phone call (client) and the other person answering the call (server)._
5. **Is the client-server model applicable only to the Web?** <br>
_No, the client-server model can be applied to many different types of applications. It is most commonly used in applications like web services, web applications, email, file sharing, and remote computer access._
- **Do desktop applications use the client-server model?** <br>
_Yes, desktop applications can use the client-server model, such as a messaging application that connects to a messaging server to send and receive messages._
- **Can you mention any other example of this model outside the Web?** <br>
_Other instances of the client-server model that are not limited to the Web, such as servers for email, files, and databases._
## HTTP Core Understanding
1. **What is HTTP?** <br> _HTTP (Hypertext Transfer Protocol) is a protocol used for communications between servers and web clients. It is the foundation for data communication for the World Wide Web. HTTP allows clients (e.g. web browsers) to communicate with servers that host websites and sends and receives information in the form of messages._
2. **What is a Communication Protocol?** <br> _A communication protocol is a set of rules that govern how two or more entities communicate with each other. These rules define how data is transmitted and include message types, transmission sequences, error handling, and more._
   - **Do humans use communication protocols?** <br> _Yes, humans use communication protocols._
3. **What is a Request in HTTP?** <br> _A request in HTTP is a message sent from a client to a server asking for some sort of information or resource._
4. **What is a Response in HTTP?** <br> _In HTTP, a response is a message sent from a server in response to a client's request. It typically consists of a status line, headers, and a message body._
5. **What is an HTTP method?** <br> _HTTP methods are the actions most commonly used by clients to interact with a web server. Common methods are GET, POST, PUT, and DELETE._
6. **What are HTTP request headers?** <br> _HTTP request headers are fields of information sent by a user agent (such as a web browser) to a server to provide context and additional information about the request. They contain metadata associated with the request, such as the requested resource, the user agent submitting the request, authentication details, and other information._
## APIs Core Understanding
1. **What is an API?** <br> _An API (Application Programming Interface) is a set of functions, protocols, and tools that developers can use to build software applications. APIs allow developers to access data and functionality from other applications, services, and databases, making it easier to combine and mash up data from multiple sources._
2. **What is a Protocol?** <br> _A protocol is a set of rules and standards that define how information is exchanged between two or more devices across a network._
3. **Is the term API only applicable to the communication of programs over the Internet?** <br> _No, the term API is not only applicable to the communication of programs over the internet. An API is a type of software interface that enables two or more computer programs to communicate with each other._
4. **Why is structured communication between two programs important?** <br> _Structured communication between two programs is important because it enables efficient and reliable data exchange between the two systems. Structured communication also helps to ensure data integrity, security and consistency._
   - **Do we humans use APIs when communicating without technology?** <br> _No, humans do not use APIs when communicating without technology. APIs are used to enable communication between two systems or applications, and are not necessary for human-to-human communication._
5. **Is an API just another program or a standard?** <br> _A API is neither a program nor a standard. APIs are an interface that allow separate applications and systems to communicate with each other, regardless of the platform or language._
6. **Do you know any API? Can you list at least 5 examples of APIs?** 
    _1. Google Maps API_
    _2. Amazon Web Services (AWS) API_
    _3. Twitter API_
    _4. Facebook API_
    _5. Stripe API_
## From JSON to REST
1. **What is JSON?** <br> _JSON (JavaScript Object Notation) is a text-based, human-readable data interchange format used primarily to transmit data between a server and web application, as an alternative to XML. It is based on a subset of the JavaScript programming language and is used as a data format for many web services and APIs._
   - **Is JSON the same as a plain Javascript object?** <br> _No, JSON (JavaScript Object Notation) is a lightweight data-interchange format, but is it not the same as a plain JavaScript object. JSON is based on structural conventions from JavaScript objects and has a syntax that is recognizable to JavaScript, but is not exactly the same._
2. **What is REST?** <br> _REST (Representational State Transfer) is a type of software architecture that allows different applications to communicate with each other over the web using existing web standards such as HTTP. It is a popular way to access and modify data, and is a powerful alternative to SOAP._
   - **Is REST a programming language, framework, technology, or architecture pattern?** <br> _REST is a software architectural style because it provides a set of design rules to create stateless services that are scalable, extensible, and modifiable._
3. **What is a Resource in REST?** <br> _A resource in REST is an entity or object that can be accessed by an HTTP request, typically through a RESTful API. A resource typically represents a single data object, such as a customer, product, or order._
   - **What is a resource identifier?** <br> _A resource identifier is a unique identifier for a resource, such as web pages, digital images, web services, and databases. It can be used as a reference to quickly locate the specified resource._
4. **How are HTTP and REST related?** <br> _HTTP and REST are related in that REST is an architectural style that can be implemented using HTTP, but it is not necessarily tied to HTTP. REST is a simple way to organize interactions between independent systems, inspiring the design of web services, such as those using HTTP._
   - **What HTTP methods does REST use within its architecture rules?** <br> _REST uses the HTTP methods GET, POST, PUT, DELETE, HEAD, and OPTIONS to perform operations on resources. HTTP is a connectionless protocol that is stateless and can transmit any data._
   - **Why do we use HTTP methods in REST and how do they relate to resources?** <br> _They are used to create a uniform interface for distributed systems that rely on predefined methods_
5. **Is REST the same as HTTP?** <br> _No, REST and HTTP are not the same thing. HTTP stands for HyperText Transfer Protocol and is a way to transfer files, while REST is an architectural style that doesn't care about the building materials per say._
## REST API Clients
   - **Postman only works with REST APIs?** <br> _No, Postman can work with any type of API, including SOAP, GraphQL, and gRPC._
   - **Is there an alternative to Postman?** <br> _Yes, there are many alternatives to Postman, such as Insomnia, cURL, REST Client (for VS Code), Paw, SoapUI, HTTPRequester, OkHttp, and Advanced REST Client._
# Jueves 16 de febrero de 2023
## Express.JS Core Understanding
0. [Express JS Hello World](src/README.md)
1. [Forrest Gump Ping-Pong API](src/README.md)
2. [Forrest Gump Ping-Pong API](src/README.md)
