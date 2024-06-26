const inEmailEl=document.querySelector("#email");
const inIdEl=document.querySelector("#id");
// const idError=document.querySelector("#idError");
const inDepartmentEl=document.querySelector("#department");
const inPositionEl=document.querySelector("#position");

inEmailEl.setAttribute('pattern','^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
);
inEmailEl.setAttribute('placeholder','admin@gmail.com');
inIdEl.setAttribute('pattern','^[0-9]*$');
inDepartmentEl.setAttribute('pattern','^[a-zA-Z0-9 ]*$');
inPositionEl.setAttribute('pattern','^[a-zA-Z0-9 ]*$');

// inIdEl.addEventListener('input',function(){
//   if(!inIdEl.checkValidity()){
//     idError.textContent="숫자만 입력하세요";
//   }else{
//     idError.textContent='';
//   }
// })
