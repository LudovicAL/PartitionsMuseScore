var listOfTunes = [];

requestTitles()
   .then(response => response.json())
   .then(data => {
      if (data.message === "Not Found") {
         console.log("Data not found");
         return;
      }
      console.log("Data retrieved!\nProcessing data...");
      let tuneDatalistDiv = document.getElementById("tuneDatalistDiv")
      for(let i = 0, max = data.tree.length; i < max; i++) {
         let tunePath = data.tree[i].path;
         let indexOfPdf = tunePath.toLowerCase().indexOf(".mscz");
         if (indexOfPdf !== -1) {
            let tuneName = tunePath.substring(0, indexOfPdf).replaceAll(";", " | ");
            listOfTunes.push(tuneName);
            let tuneDataOption = createElem(tuneDatalistDiv, null, "option", null, null, null, null);
            tuneDataOption.setAttribute("value", tuneName);
         }
      }
   })

function requestTitles() {
   console.log("Sending http request for data...");
   return Promise.resolve(fetch(`https://api.github.com/repos/LudovicAL/PartitionsMuseScore/git/trees/main`));
}