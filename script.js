let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e)=>{
        console.log('Button clicked:', e.target.innerHTML)
  if(e.target.innerHTML == '='){
    string = eval(string);
    input.value = string;
  }
  string += e.target.innerHTML;
  input.value = string;
        })
       
})