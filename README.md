# react-typescript-hotloader-boilerplate
Boilerplate application for react+typescript+hotloader.

One of the mandatory step is to compile typescript code to Javascript on save. Use MS Code to get that feature.

Install MS Code
https://code.visualstudio.com/

Install Typescript
https://code.visualstudio.com/docs/languages/typescript#_installing-the-typescript-compiler

Then enable compile on save for ts or tsx files.
C+S+B > tsc:watch - tsconfig.json


## Installation
```
npm install
npm run dev
```

Then open http://localhost:3000

In MS Code update files under src-ts folder, and 'compile on save' feature will generate js file in build folder, and webpack will send that change to browser using hotloader.

Static folder will contain html and root sass files. Individual sass file can stay inside src-ts folder, and that should be imported to static/styles.scss file.

## Image/icons
For images or other static content, you may add rules to express, or may create a separeate simple server that serves that static contents.

For example, creating simple server using python:
```
python -m SimpleHTTPServer 8000
```