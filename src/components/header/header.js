import adminNotice from '../../pages/admin/notice/adminNotice.js';
import absentRequest from '../../pages/admin/absent-request/absentRequest.js';
import employeeList from '../../pages/admin/employee-list/employeeList.js';

function app() {
  window.addEventListener("popstate", (event) => {
    console.log("popstate");
    route();
  });

  document.body.addEventListener("click", navigatePage);
  route();
}

function navigatePage(event) {
  event && event.preventDefault();
  const anchor = event.target.closest("a");

  // 앵커에 값이 없을 수도 있으니 방어코드 작성
  if (anchor && anchor.href) {
    const path = anchor.getAttribute("href");
    history.pushState(null, null, path);
    route();
  }
}

function route() {
  // const content = document.querySelector("#app");
  const path = location.pathname;

  switch (path) {
    case "/employee-list":
      employeeList('#app');
      break;
    case "/notice":
      adminNotice('#app');
      break;
    case "/absent-request":
      absentRequest('#app');
      break;
  }
}

document.addEventListener("DOMContentLoaded", app);
