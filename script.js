import html2canvas from "html2canvas";

const inp = document.querySelector("#inp");
const view = document.querySelector("#view-btn");
const content = document.querySelector("#content");


view.addEventListener("click", () => viewSet(eval(inp.value)));


function viewSet(...values)
{
    console.log(values);
    content.innerHTML = `{ ${values} }`;
}


function separetValuesBy(seprator, content)
{
    content = content.toString();
    seprator = seprator.toString();
    let arr = [];
    let arrayIndex = 0;

    for (let i = 0; i < content.length; i += 1)
    {
        if (content.charAt(i) == seprator)
        {
            i += 1;
            arrayIndex += 1;
        }
        
        arr[arrayIndex] == undefined ?
            arr[arrayIndex] = content.charAt(i)
            :
            arr[arrayIndex] = arr[arrayIndex].toString() + content.charAt(i);
    }

    return arr;
}

console.log(separetValuesBy(",", "1,2,3,5,6,7,8,9,9,9,9,   111"));

// html2canvas test

const txt = document.getElementById("txt");
const captureBtn = document.getElementById("capture-btn");

captureBtn.addEventListener("click", () => 
{
    html2canvas(txt)
        .then((canvas) => 
        {
            saveAs(canvas.toDataURL(), "wow.png");
        })
});

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}
