/* MONACO-EDITOR */

require.config({ 
    paths: { 
        vs: '../node_modules/monaco-editor/min/vs' 
    } 
});

// https://microsoft.github.io/monaco-editor/playground.html

/* SET MONACO EDITOR */

require(['vs/editor/editor.main'], function () {

    var editor = document.getElementById('editor');

    window.ociEditor = monaco.editor.create(editor, {                        
        language: 'c',
        theme: 'vs-dark',
        value: [
            '#include <stdio.h>',
            '',
            'void main() {', 
            '   printf("Hello world!");',
            '}'
        ].join('\n'),
    });

    /* REGISTER MONACO LANGUAGE */

    monaco.languages.register({id: 'console'});

    monaco.languages.setMonarchTokensProvider('console', {
        tokenizer: {
            root: [
                [/(\[stderr\])(.*)/, 'stderr'],
                [/(\[stdout\])(.*)/, 'stdout'],
                [/(\[output\])(.*)/, 'output'],
            ]
        }
    });

    monaco.editor.defineTheme('console', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            {token: 'stderr', foreground: '#ce9178'},
            {token: 'stdout', foreground: '#32cd32'},
            {token: 'output', foreground: '#569cd6'}
        ]
    });

    /* SET MONACO OUTPUT */

    var output = document.getElementById('output');

    window.ociOutput = monaco.editor.create(output, {
        language: 'console',
        theme: 'console',
        value: '[output] ↓\n...',
        folding: false,
        lineNumbers: 'off',
        lineDecorationsWidth: 0,
        minimap: {enabled: false}
    });

});

/* ADJUST MONACO EDITOR */

window.onresize = () => {
    window.location.reload();
}

/* PICO-JS */

function run() {
    picocjs.runC(window.ociEditor.getValue(), (output) => { 
        window.ociOutput.setValue(output);
    });
}