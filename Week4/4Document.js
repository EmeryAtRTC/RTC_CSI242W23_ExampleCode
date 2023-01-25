//The document object contains all of the html elements from the page
console.log(document);
//log the head
console.log(document.head);
//log the body
console.log(document.body);
//I can write directly to the document. Do not actuall do this
//except for testing
document.writeln(`<h3>Writing to the document</h3>`);

//get all of the forms on the page
let forms = document.forms;
console.log(forms);

//get all of the links on the page
let links = document.links;
console.log(links);

for(let i = 0; i < links.length; i++){
    if(links[i].id == "link1"){
        console.log('This is link 1');
    }
    console.log(`Id: ${links[i].id} Classes: ${links[i].classList}`);
    //lets change the content of each of the links
    //innerhtml property - change the content of an html element
    links[i].innerHTML = `<em>Hello</em> <strong>from</strong> Link ${i + 1}<br>`;
}