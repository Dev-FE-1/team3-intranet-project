// function app(){
//   const btnEdit=document.querySelector(".btn-edit");
//   // const btnBack=document.querySelector(".btn-back");

//   btnEdit.addEventListener("click", toEditPage);
//   // btnBack.addEventListener("click", history.back());

//   function toEditPage(){
//     window.location.href="admin-profile-mod.html";
//   }
// }
// document.addEventListener("DOMContentLoaded",app);
export default function adminProfile(container) {
    const content = document.querySelector(container);
    content.innerHTML = `<div class="container">
    <div class="card">
      <div class="proflie-header semi-bold">
        <img src="/public/images/profile/Vector 9.png" alt="back" class="btn-back">
        <p>Profile</p>
      </div>
      <div class="profile">
        <form class="data">
          <div class="frame">
            <label for="image"><img src="https://shorturl.at/x0AaY" alt="profile" id="image"></label> 
            <label for="name"><span id="name" class="bold">이윤환</span></label>
          </div>
          <div class="frame-bottom">
            <label for="email">이메일
              <span id="email" placeholder="">cyzhqly@gmail.com</span>
            </label>
            <label for="id">사번<span id="id" required>2040917</span></label>
            <label for="phoneNumber">핸드폰<span id="phoneNumber">010-1234-5678</span></label>
            <label for="department">부서<span id="department">R&D</span></label>
            <label for="position">직급<span id="position">Manager</span></label>
            <label for="address">자택 주소<span id="address">서울 송파구 올림픽로 240</span></label>
            <label for="dateOfBirth">생년월일<span id="dateOfBirth">1998-02-15</span></label>
            <label for="etc">기타 사항<span id="etc">강아지를 매우 좋아함</span></label>
            <label>
              <button type="button" class="btn-edit bold" data-path="/profile/profileModify">EDIT</button>
            </label>
          </div>   
        </form>
      </div>
    </div>
  </div>`;

  const editButton=document.querySelector(".btn-edit");
  editButton.addEventListener('click',(event)=>{
    event.preventDefault();
    
    const path=editButton.dataset.path;
    if(path){
      history.pushState(null,null,path);
      route();
    }
  });
}
function loadCSS(filename) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  // link.type = "text/css";
  link.href = filename;
  document.head.appendChild(link);
}

function route(){
  const path=location.pathname;
  switch(path){
    case "/profile/profileModify":
      adminProfileModify('#app');
      loadCSS("../../src/pages/admin/admin-profile/admin-profile-mod.css");
      break;
  }
}

export function adminProfileModify(container){
  const content=document.querySelector(container);
  content.innerHTML=`
    <div class="container">
    <div class="card">
      <div class="proflie-header semi-bold">
        <img src="/public/images/profile/Vector 9.png" alt="back">
        <p>Profile</p>
      </div>
      <div class="profile">
        <div class="data">
          <div class="frame">
            <label for="image"><img src="https://shorturl.at/x0AaY" alt="profile" id="image"></label>
            <label for="name"><input type="text" id="name" class="bold"></label>
          </div>
          <div class="frame-bottom">
            <label for="email">이메일
              <input type="email"
              placeholder="admin@gmail.com" 
              id="email" 
              required>
            </label>
            <label for="id">사번<input type="text" pattern="^[0-9]*$" id="id" required></label>
            <label for="phoneNumber">핸드폰<input type="text" id="phoneNumber"></label>
            <label for="department">부서<input type="text" pattern="^[a-zA-Z0-9 ]*$" id="department" required></label>
            <label for="position">직급<input type="text" pattern="^[a-zA-Z0-9 ]*$" id="position" required></label>
            <label for="address">자택 주소<input type="text" id="address"></label>
            <label for="dateOfBirth">생년월일<input type="text" id="dateOfBirth"></label>
            <label for="etc">기타 사항<input type="text" id="etc"></label>
            <label>
              <button type="button" class="btn-submit bold")>SAVE</button>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
