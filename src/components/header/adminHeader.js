import adminNotice, {
  adminNoticeCreate,
} from "../../pages/admin/notice/adminNotice.js";
import adminAbsentRequest from "../../pages/admin/absent-request/adminAbsentRequest.js";
import employeeList from "../../pages/admin/employee-list/employeeList.js";
import adminProfile, {
  adminProfileModify,
} from "../../pages/admin/admin-profile/adminProfile.js";
import adminMainPage from "../../pages/admin/admin.js";
// import { showMainContent } from '../../main.js';
import './header.css'

export default function adminHeader() {
  const content = document.querySelector("#header");
  content.innerHTML = `<header class="header-mobile">
      <nav>
        <ul class="header-menu">
          <li>
            <a data-back>
              <img src="public/images/header/back.svg" alt="back-button"/>
            </a>
          </li>
          <li>
            <a href="/employee-list">
              <img src="public/images/header/employee-list.svg" alt="employee-list"/>
            </a>
          </li>
          <li>
            <a href="/admin-notice">
              <img src="public/images/header/notice.svg" alt="notice"/>
            </a>
          </li>
          <li>
            <a href="/admin-absent-request">
              <img src="public/images/header/absent-request.svg" alt="absent-request"/>
            </a>
          </li>
        </ul>
        <ul class="header-profile">
          <li>
            <button class="header-time">Working Hours</button>
          </li>
          <li class="header-profile-image">
            <a href="/profile">
              <img src="public/images/header/header-profile.jpg" alt="my-profile"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <header class="header-desktop">
      <nav>
        <ul class="header-menu">
          <li>
            <a href="/admin">
              <img src="public/images/header/favicon.ico" alt="oasis"/>
            </a>
          </li>
          <li>
            <a href="/employee-list">임직원 리스트</a>
          </li>
          <li>
            <a href="/admin-notice">공지사항</a>
          </li>
          <li>
            <a href="/admin-absent-request">부재신청</a>
          </li>
        </ul>
        <ul class="header-profile">
          <li>
            <button class="header-time">Working Hours</button>
          </li>
          <li class="header-profile-image">
            <a href="/admin-profile">
              <img src="public/images/header/header-profile.jpg" alt="my-profile"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    

    <!-- Working Hours Modal -->
    <div class="start-time-modal hidden">
      <div class="modal-background">
        <div class="modal-content">
          <p>근무를 시작하시겠습니까?</p>
          <div class="time-button">
            <button class="start">Yes</button>
            <button class="close">No</button>
          </div>
        </div>
      </div>
    </div>
    <div class="end-time-modal hidden">
      <div class="modal-background">
        <div class="modal-content">
          <p>근무를 종료하시겠습니까?</p>
          <div class="time-button">
            <button class="end">Yes</button>
            <button class="close">No</button>
          </div>
        </div>
      </div>
    </div>`;

  workTimeButton();
  window.addEventListener("popstate", (event) => {
    console.log("popstate");
    route();
  });

  document.body.addEventListener("click", navigatePage);
  route();
}

function workTimeButton() {
  const openButtons = document.querySelectorAll(".header-time");
  const startTimeModal = document.querySelector(".start-time-modal");
  const endTimeModal = document.querySelector(".end-time-modal");
  const startButton = startTimeModal.querySelector(".start");
  const endButton = endTimeModal.querySelector(".end");
  // const closeButtonStart = startTimeModal.querySelector('.close');
  // const closeButtonEnd = endTimeModal.querySelector('.close');
  const modalBackgroundStart =
    startTimeModal.querySelector(".modal-background");
  const modalBackgroundEnd = endTimeModal.querySelector(".modal-background");

  let workStartTime;
  let workInterval;

  function toggleStartTimeModal() {
    startTimeModal.classList.toggle("hidden");
  }

  function toggleEndTimeModal() {
    endTimeModal.classList.toggle("hidden");
  }

  function startWork() {
    workStartTime = Date.now();
    workInterval = setInterval(updateWorkTime, 1000);
    openButtons.forEach((button) => (button.textContent = "0시간 0분 0초"));
    toggleStartTimeModal();
  }

  function endWork() {
    clearInterval(workInterval);
    openButtons.forEach((button) => (button.textContent = "Working Hours"));
    toggleEndTimeModal();
  }

  function updateWorkTime() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - workStartTime;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    openButtons.forEach(
      (button) => (button.textContent = `${hours}시간 ${minutes}분 ${second}초`)
    );
  }

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "Working Hours") {
        toggleStartTimeModal();
      } else {
        toggleEndTimeModal();
      }
    });
  });

  startButton.addEventListener("click", () => {
    startWork();
    toggleStartTimeModal();
  });
  endButton.addEventListener("click", () => {
    endWork();
    toggleEndTimeModal();
  });
  modalBackgroundStart.addEventListener("click", toggleStartTimeModal);
  modalBackgroundEnd.addEventListener("click", toggleEndTimeModal);
}

function navigatePage(event) {
  event.preventDefault();
  const anchor = event.target.closest("a, .add-button");
  if (anchor) {
    if (anchor.hasAttribute("data-back")) {
      history.back();
    } else {
      const path = anchor.getAttribute("href") || anchor.dataset.path;
      if (path) {
        history.pushState(null, null, path);
        route();
      }
    }
  }
}

export function route() {
  const path = location.pathname;

  switch (path) {
    case "/admin":
      adminMainPage("#content");
      break;
    case "/employee-list":
      employeeList("#content");
      break;
    case "/admin-notice":
      adminNotice("#content");
      break;
    case "/admin-absent-request":
      adminAbsentRequest("#content");
      break;
    case "/admin-notice/noticeCreate":
      adminNoticeCreate("#content");
      break;
    case "/admin-profile":
      adminProfile("#content");
      document.querySelector("#header").style.display = "none";
      break;
    case "/admin-profile/profileModify":
      adminProfileModify("#content");
      document.querySelector("#header").style.display = "none";
      break;
  }
}

document.addEventListener("DOMContentLoaded", adminHeader);