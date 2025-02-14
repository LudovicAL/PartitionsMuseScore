function addSet() {
   console.log("Add set button clicked");
}

window.onload = function initEditor() {
   console.log("Loading ABCJS Editor");
   new ABCJS.Editor("abcTextArea", { 
      canvas_id: "renderingDiv", 
      warnings_id:"warningsDiv", 
      print: true,
      responsive: "resize",
      scale: 0.5
   });
   console.log("ABCJS Editor Loaded");
}
