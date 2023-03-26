Install nvm-windows
====================

See:
- https://github.com/coreybutler/nvm-windows
- https://github.com/coreybutler/nvm-windows/releases


```bash
$ nvm install latest
...

$ nvm use latest
Now using node v19.8.1 (64-bit)

$ node --version
v19.8.1

```

Create Node.js Project
------------------------

See:
- https://www.twilio.com/docs/usage/tutorials/how-to-set-up-your-node-js-and-express-development-environment

```bash
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (mockserver)
version: (1.0.0)
description: Playing with @r35007/mock-server
entry point: (index.js)                                                                                                                                           
test command:                                                                                                                                                     
git repository: https://github.com/ivangeorgiev/poc-mockserver                                                                                                    
keywords:                                                                                                                                                         
author: Ivan Georgiev                                                                                                                                             
license: (ISC) GPL-3.0-or-later
About to write to C:\Sandbox\PoC\vscode\mockserver\package.json:

{
  "name": "mockserver",
  "version": "1.0.0",
  "description": "Playing with @r35007/mock-server",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ivangeorgiev/poc-mockserver.git"
  },
  "author": "Ivan Georgiev",
  "license": "GPL-3.0-or-later",
  "bugs": {
    "url": "https://github.com/ivangeorgiev/poc-mockserver/issues"
  },
  "homepage": "https://github.com/ivangeorgiev/poc-mockserver#readme"
}


Is this OK? (yes)
```

Install Mock Server
-------------------

See:
- https://r35007.github.io/Mock-Server/

```bash
$ npm install -g @r35007/mock-server

added 156 packages in 21s

```

Create `db.json`:

```json
{
    "posts": [{ "id": 1, "title": "mock-server", "author": "r35007" }],
    "comments": [{ "id": 1, "body": "some comment", "postId": 1 }],
    "profile": { "name": "r35007" }
}
```

```bash
$ mock-server --watch ./db.json

{^_^}/~ Hi!

Mock Server Started!

Access URLs:
-----------------------------------
Localhost: http://localhost:3000
      LAN: http://::1:3000
-----------------------------------
Press CTRL+C to stop

listening...
Number of routes: 8


Type s + enter at any time to create a snapshot of the database

```

```bash
$ npm install -g nodemon
# Without this for some reason server.js could not find the mock-server
$ npm install --save-develop @r35007/mock-server
```
