// const inEmailEl=document.querySelector("#email");
// const inIdEl=document.querySelector("#id");
// const inDepartmentEl=document.querySelector("#department");
// const inPositionEl=document.querySelector("#position");

// inEmailEl.setAttribute('pattern','^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
// inEmailEl.setAttribute('placeholder','admin@gmail.com');
// inIdEl.setAttribute('pattern','^[0-9]*$');
// inDepartmentEl.setAttribute('pattern','^[a-zA-Z0-9 ]*$');
// inPositionEl.setAttribute('pattern','^[a-zA-Z0-9 ]*$');




// const idError=document.querySelector("#idError");
// inIdEl.addEventListener('input',function(){
//   if(!inIdEl.checkValidity()){
//     idError.textContent="숫자만 입력하세요";
//   }else{
//     idError.textContent='';
//   }
// })


// const btnSubmit=document.querySelector('.btn-button');
// btnSubmit.addEventListener('click',()=>{
//   const nameEl=document.querySelector('#name');
//   .value=nameEl;
// });

// input 태그를 받아올 상수 선언
const inputName=document.querySelector('#name');
const inputEmail=document.querySelector('#email');
const inputId=document.querySelector('#id');
const inputPhoneNumber=document.querySelector('#phoneNumber');
const inputDepartment=document.querySelector('#department');
const inputPosition=document.querySelector('#position');
const inputAddress=document.querySelector('#address');
const inputDateOfBirth=document.querySelector('#dateOfBirth');
const inputEtc=document.querySelector('#etc');

function isEmailRight(str){
  return /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(str);
}
function isIdRight(str){
  return /^[0-9]*$/.test(str);
}
function isDepartmentRight(str){
  return /^[a-zA-Z0-9 ]*$/.test(str);
}
function isPositionRight(str){
  return /^[a-zA-Z0-9 ]*$/.test(str);
}

//! email check
inputEmail.onkeyup = function () {
  // 데이터가 있을 경우
  if (inputEmail.value.length !== 0) {
    // 이메일형식이 아닐경우
    if(isEmailRight(inputEmail.value) === false) {
      inputEmail.classList.add("incorrect");
    }
    // 조건을 모두 만족할 경우
    else{
      inputEmail.classList.remove("incorrect");
    }
  }
  // 데이터가 없을 경우 (빈 인풋)
  else{
    inputEmail.classList.remove("incorrect");
  }
}

//! id check
inputId.onkeyup = function () {
  // 값을 입력한 경우
  if (inputId.value.length !== 0) {
    // 이메일형식이 아닐경우
    if(isIdRight(inputId.value) === false) {
      inputId.classList.add("incorrect");
    }
    // 조건을 모두 만족할 경우
    else{
      inputId.classList.remove("incorrect");
    }
  }
  // 데이터가 없을 경우 (빈 인풋)
  else{
    inputId.classList.remove("incorrect");
  }
}

//! department check
inputDepartment.onkeyup = function () {
  // 값을 입력한 경우
  if (inputDepartment.value.length !== 0) {
    // 이메일형식이 아닐경우
    if(isDepartmentRight(inputDepartment.value) === false) {
      inputDepartment.classList.add("incorrect");
    }
    // 조건을 모두 만족할 경우
    else{
      inputDepartment.classList.remove("incorrect");
    }
  }
  // 데이터가 없을 경우 (빈 인풋)
  else{
    inputDepartment.classList.remove("incorrect");
  }
}

//! position check
inputPosition.onkeyup = function () {
  // 값을 입력한 경우
  if (inputPosition.value.length !== 0) {
    // 이메일형식이 아닐경우
    if(isPositionRight(inputPosition.value) === false) {
      inputPosition.classList.add("incorrect");
    }
    // 조건을 모두 만족할 경우
    else{
      inputPosition.classList.remove("incorrect");
    }
  }
  // 데이터가 없을 경우 (빈 인풋)
  else{
    inputPosition.classList.remove("incorrect");
  }
}