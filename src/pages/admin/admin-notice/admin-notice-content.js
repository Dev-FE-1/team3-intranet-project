const modal = document.querySelector(".modal");
const modalOpen = document.querySelector("#delete");
const modalDelete = document.querySelector("#deleteConfirm");
const modalDeleteCancel = document.querySelector("#deleteCancel");

//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen.addEventListener("click", function () {
  console.log("Open button clicked."); // 버튼 클릭 시 로그 확인
  modal.classList.add("on");
  console.log(modal.classList);
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalDelete.addEventListener("click", function () {
  //'on' class 제거

  modal.classList.remove("on");
});
