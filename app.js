
const fiverr_order = document.getElementById('fiverr_order');
const counter = document.getElementById('counter');


fiverr_order.addEventListener('submit', function(e){

    e.preventDefault();

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;


setInterval(() => {

  

    let start_date = new Date();
    let end_date = new Date(date + ' ' + time);


    let time_dff = Math.floor(Math.abs(start_date.getTime() - end_date.getTime()));

    let total_sec = Math.floor(time_dff / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hours = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hours / 24);

    let hours = total_hours - (total_day * 24);
    let min = total_min - (total_day * 24 * 60) - (hours * 60);
    let sec = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);


    
counter.innerHTML = ` ${total_day > 31 ? total_day : '0'+ total_day} : ${hours > 9 ? hours : '0'+ hours} : ${min > 9 ? min : '0'+ min} : ${sec > 9 ? sec : '0'+ sec} `;
     
    
},1000);




});


// todo_item 


const todo_item = document.getElementById('todo_item');
const list = document.getElementById('list');



todo_item.addEventListener('submit', function(e){

e.preventDefault();

let doname = this.querySelector('input[name="doname"]').value;
let todo = this.querySelector('select[name="todo"]').value;

if(doname == '' || todo == ''){
    alert('All feides requerds*')
}else{

let li = document.createElement('li');
li.className = 'list-group-item';

let closebtn = document.createElement('button');
closebtn.classList.add('btn-close');
li.classList.add('d-flex');
li.classList.add('justify-content-between');


let dotext = document.createTextNode(doname);


li.appendChild(closebtn);
li.insertBefore(dotext , closebtn);
list.appendChild(li);



this.querySelector('input[name="doname"]').value = '';

closebtn.addEventListener('click', function(){
    this.parentElement.remove();
});

}




});



