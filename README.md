# editor-picoc

This is an online **C-editor** that uses a **client-side compiler (picoc)**.  
  
[Demo](https://editor-picoc.glitch.me/)  
  
![editor-client-side](preview.gif "editor-client-side")  
  
I am using some well-known toolchains and frameworks such as [emscripten](https://emscripten.org/), [picoc-js](https://www.npmjs.com/package/picoc-js) or [monaco-editor](https://microsoft.github.io/monaco-editor/) in this project.  
Because of is small size, the [picoc](https://gitlab.com/zsaleeba/picoc) interpreter from *Zik Saleeba* is suitable for our purposes.  
Special thanks to *Krithik Rao* for recompiling *picoc* to WASM = [picoc-js]().  

## installation

Install [node.js](https://nodejs.org) and download all [dependencies](package.json).  
  
```
npm install
npm start
```
