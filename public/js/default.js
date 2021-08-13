"use strict";

/**
 * PICOC-JS 
 */

function run() {

    window.output.setValue("");

    picocjs.runC(
        window.editor.getValue(), output => {            
            window.output.setValue(
                window.output.getValue() + output + "\n"
            );            
        }
    );

}

/**/

window.onresize = () => {
    window.location.reload();
}