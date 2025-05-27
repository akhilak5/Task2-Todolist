
let btn=document.querySelector('#add button');
let f1=document.getElementById('form');
let tbody = document.getElementById('task-body');
btn.addEventListener('click',()=>{
    f1.style.display='block';
});

let task=document.getElementById('task-list')
f1.addEventListener('submit',function(event){
    event.preventDefault();
    const name=f1.elements[0].value;

    let tr=document.createElement('tr');
    let tdname=document.createElement('td');
    tdname.textContent=name;
    tr.appendChild(tdname);

    let tdcomplete=document.createElement('td');
    let checkbx=document.createElement('input');
    checkbx.type='checkbox';
    tdcomplete.appendChild(checkbx);
    tr.appendChild(tdcomplete);


    let trRemove=document.createElement('td');
    let removebtn=document.createElement('button');
    removebtn.textContent='remove';
    removebtn.addEventListener('click',()=>{
        tr.remove();
    });
    trRemove.appendChild(removebtn);
    tr.appendChild(trRemove);
    tbody.appendChild(tr);

    

    f1.reset();
    f1.style.display='none';


})

