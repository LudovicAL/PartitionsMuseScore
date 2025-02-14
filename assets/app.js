import abcjs from 'abcjs-basic-min'

function buttonClick() {
   console.log("Button clicked");
}

function initEditor() {
   new abcjs.Editor("abcTextArea", { 
      canvas_id: "renderingDiv", 
      warnings_id:"warningsDiv" 
   });
}
