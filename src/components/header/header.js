import adminNotice, {
  adminNoticeCreate,
} from "../../pages/admin/notice/adminNotice.js";
import absentRequest from "../../pages/admin/absent-request/absentRequest.js";
import employeeList from "../../pages/admin/employee-list/employeeList.js";

function app() {
  window.addEventListener("popstate", (event) => {
    console.log("popstate");
    route();
  });

  document.body.addEventListener("click", navigatePage);
  route();
}

function navigatePage(event) {
  event.preventDefault();
  const anchor = event.target.closest("a, .add-button"); // add-button도 이벤트를 감지하도록 수정
  if (anchor) {
    const path = anchor.getAttribute("href") || anchor.dataset.path; // href나 data-path 속성을 가져옴
    if (path) {
      history.pushState(null, null, path);
      route();
    }
  }
}

function loadCSS(filename) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = filename;
  document.head.appendChild(link);
}

function route() {
  const path = location.pathname;

  switch (path) {
    case "/employee-list":
      employeeList("#app");
      break;
    case "/notice":
      adminNotice("#app");
      loadCSS("../../src/pages/admin/admin-notice/adminNotice.css");
      break;
    case "/absent-request":
      absentRequest("#app");
      break;
    case "/notice/noticeCreate": // 새로운 경로 추가
      adminNoticeCreate("#app");
      loadCSS("../../src/pages/admin/admin-notice/adminNoticeCreate.css");
      break;
  }
}

document.addEventListener("DOMContentLoaded", app);
