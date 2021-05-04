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

    window.picocEditor = monaco.editor.create(editor, {                        
        language: 'c',
        theme: 'vs-dark',
        value: [
            '#include <stdio.h>',
            '',
            'void main() {', 
            '   printf("Hello world!\\n");',
            '}'
        ].join('\n'),
    });

    /* REGISTER MONACO LANGUAGE */

    monaco.languages.register({id: 'console'});

    monaco.languages.setMonarchTokensProvider('console', {
        tokenizer: {
            root: [
                [/file.c:(\d+):(\d+) (.*)/, 'error']
            ]
        }
    });

    monaco.editor.defineTheme('console', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            {token: 'error', foreground: '#ce9178'}
        ]
    });

    /* SET MONACO OUTPUT */

    var output = document.getElementById('output');

    window.picocOutput = monaco.editor.create(output, {
        language: 'console',
        theme: 'console',
        value: '...',
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
    window.picocOutput.setValue('');
    picocjs.runC(
        window.picocEditor.getValue(), (output) => {
        window.picocOutput.setValue(
            window.picocOutput.getValue() + 
            output + '\n'
        );
    });
}