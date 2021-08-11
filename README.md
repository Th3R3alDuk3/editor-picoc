# editor-picoc

This is an online **C-editor** that uses a **client-side compiler (picoc)**.  
  
[DEMO](https://editor-picoc.glitch.me/)  
  
![editor-client-side](preview.gif "editor-client-side")  
  
I am using some well-known toolchains and frameworks in this project.
- [emscripten](https://emscripten.org/)
- [picoc-js](https://www.npmjs.com/package/picoc-js)
- [monaco-editor](https://microsoft.github.io/monaco-editor/)  
Because of is small size, the [picoc](https://gitlab.com/zsaleeba/picoc) interpreter from *Zik Saleeba* is suitable for our purposes.  
Special thanks to *Gregor Richards* and *Krithik Rao* for recompiling *picoc* to WASM ([picoc-js](https://www.npmjs.com/package/picoc-js)).  

## installation

Install [node.js](https://nodejs.org) and download all [dependencies](package.json).  
  
```
npm install
npm start
```
