function app(){
  const btnEdit=document.querySelector(".btn-edit");
  // const btnBack=document.querySelector(".btn-back");

  btnEdit.addEventListener("click", toEditPage);
  // btnBack.addEventListener("click", history.back());

  function toEditPage(){
    window.location.href="admin-profile-mod.html";
  }

  // const inNameEl=document.querySelector("#name");
  
  
  // const inPhoneNumberEl=document.querySelector("#phoneNumber");
  
  
  // const inAddressEl=document.querySelector("#address");
  // const inDateOfBirthEl=document.querySelector("#dateOfBirth");
  // const inEtcEl=document.querySelector("#etc");
}
document.addEventListener("DOMContentLoaded",app);export default function adminProfile(container) {
    const content = document.querySelector(container);
    content.innerHTML = `<h1>관리자 프로필 페이지</h1>`;
}