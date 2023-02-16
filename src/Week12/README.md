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
## Node.JS Module System
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
## Node.JS Hello World - Practice
0. **Why do we run the npm init command and not node init to create a new Node.JS project?** <br>
    _Npm init is used to create a package.json file for a Node.JS project, which is used for configuration. Node init is not a valid command._
1. **When you entered the npm init command and answered the questions you saw in the terminal, a new file called packacke.json was generated.**
    - **What does this file do?**
_The package.json file is a manifest file that describes the attributes and dependencies of the project._
    - **Why is this file generated?**
_This file is generated to provide a consistent way to manage and track all the information associated with a project, including its dependencies and versions._
