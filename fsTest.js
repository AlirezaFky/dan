

const fs = require("fs");

let content = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAEpJREFUKFO1kDEOACAMAuni/9/rgsGkDcakcbFThwNagiTxMAGgwE6zwQlgaGnMP4L6R/E+fkpFJ+DwBSakp1xwgNljhMyb6NfCF/WLMONtVd4TAAAAAElFTkSuQmCC";

fs.writeFile("./uuuu.png", content, (err) => 
{
    if (err) console.log("An error occured! ", err);
});