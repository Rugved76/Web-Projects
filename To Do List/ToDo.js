let addtodobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');
let i = 1;

    addtodobutton.addEventListener('click',(f)=>
    {
        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText=i+" "+inputfield.value;
        i++;
        todocontainer.appendChild(paragraph);
        inputfield.value="";
    

    paragraph.addEventListener('click',(f)=>
    {
        paragraph.style.textDecoration="line-through";
        paragraph.style.color="white";
    })

    paragraph.addEventListener('dblclick',(f)=>
    {
        todocontainer.removeChild(paragraph);
    })

})