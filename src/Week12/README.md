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
1. What is a Server? <br>
_A server is a computer or program that distributes resources or supplies services to other computers or programs (known as clients) that are connected across a network._
2. What is a Client? <br>
_A client is a computer or program that requests services or resources from a server over a network._
3. Is a server just another physical computer? <br>
_Yes, a server is just another physical computer._
- Why do we refer to a certain class of applications as Servers? <br>
_We refer to a certain class of applications as servers because they provide services to other computers on a network._
- What is the difference? <br>
_The main difference between a server and a client is that a server provides services or resources to clients, while a client requests services or resources from a server._
4. Is there any similarity between human communication and the client-server model? <br>
_Yes, there is a similarity between human communication and the client-server model. Both are based on exchanging information in a two-way communication system, where one party ("the client") requests information or a service from another ("the server") and the server provides it._
- List some examples <br>
_A person ordering food at a restaurant (client) and the waiter delivering the food (server), or a person making a phone call (client) and the other person answering the call (server)._
5. Is the client-server model applicable only to the Web? <br>
_No, the client-server model can be applied to many different types of applications. It is most commonly used in applications like web services, web applications, email, file sharing, and remote computer access._
- Do desktop applications use the client-server model? <br>
_Yes, desktop applications can use the client-server model, such as a messaging application that connects to a messaging server to send and receive messages._
- Can you mention any other example of this model outside the Web? <br>
_Other instances of the client-server model that are not limited to the Web, such as servers for email, files, and databases._
## HTTP Core Understanding
1. What is HTTP?
2. What is a Communication Protocol?
   - Do humans use communication protocols?
3. What is a Request in HTTP?
4. What is a Response in HTTP?
5. What is an HTTP method?
6. What are HTTP request headers?
## APIs Core Understanding
1. What is an API?
2. What is a Protocol?
3. Is the term API only applicable to the communication of programs over the Internet?
4. Why is structured communication between two programs important?
   - Do we humans use APIs when communicating without technology?
5. Is an API just another program or a standard?
6. Do you know any API? Can you list at least 5 examples of APIs?
## From JSON to REST
1. What is JSON?
   - Is JSON the same as a plain Javascript object?
2. What is REST?
   - Is REST a programming language, framework, technology, or architecture pattern?
3. What is a Resource in REST?
   - What is a resource identifier?
4. How are HTTP and REST related?
   - What HTTP methods does REST use within its architecture rules?
   - Why do we use HTTP methods in REST and how do they relate to resources?
5. Is REST the same as HTTP?
## REST API Clients
   - Postman only works with REST APIs?

   - Is there an alternative to Postman?
