"use strict";

/**/

var output = document.getElementById("output");

/**
 * MONACO-EDITOR 
 * https://microsoft.github.io/monaco-editor/playground.html
 */

require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });

require(["vs/editor/editor.main"], function () {

    monaco.languages.register({ id: "console" });

    monaco.languages.setMonarchTokensProvider(
        "console", {
            tokenizer: {
                root: [
                    [/file.c:(\d+):(\d+) (.*)/, "error"]
                ]
            }
        }
    );

    monaco.editor.defineTheme(
        "console", {
            base: "vs-dark",
            inherit: true,
            rules: [
                { token: "error", foreground: "#ce9178" }
            ]
        }
    );

    /**/

    window.output = monaco.editor.create(
        output, {
            language: "console",
            theme: "console",
            value: "...",
            readOnly: true,
            folding: false,
            lineNumbers: "off",
            lineDecorationsWidth: 0,
            minimap: { enabled: false }
        }
    );

});