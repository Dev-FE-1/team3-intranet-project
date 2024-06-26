import adminNotice from '../../pages/admin/notice/adminNotice.js';
import absentRequest from '../../pages/admin/absent-request/absentRequest.js';
import employeeList from '../../pages/admin/employee-list/employeeList.js';

function app() {
  workTimeButton();
  window.addEventListener("popstate", (event) => {
    console.log("popstate");
    route();
  });

  document.body.addEventListener("click", navigatePage);
  route();
}

function workTimeButton() {
  const openButtons = document.querySelectorAll('.header-time');
  const startTimeModal = document.querySelector('.start-time-modal');
  const endTimeModal = document.querySelector('.end-time-modal');
  const startButton = startTimeModal.querySelector('.start');
  const endButton = endTimeModal.querySelector('.end');
  // const closeButtonStart = startTimeModal.querySelector('.close');
  // const closeButtonEnd = endTimeModal.querySelector('.close');
  const modalBackgroundStart = startTimeModal.querySelector('.modal-background');
  const modalBackgroundEnd = endTimeModal.querySelector('.modal-background');

  let workStartTime;
  let workInterval;

  function toggleStartTimeModal() {
    startTimeModal.classList.toggle('hidden');
  }

  function toggleEndTimeModal() {
    endTimeModal.classList.toggle('hidden');
  }

  function startWork() {
    workStartTime = Date.now();
    workInterval = setInterval(updateWorkTime, 1000);
    openButtons.forEach(button => button.textContent = '0시간 0분 0초');
    toggleStartTimeModal();
  }

  function endWork() {
    clearInterval(workInterval);
    openButtons.forEach(button => button.textContent = 'Working Hours');
    toggleEndTimeModal();
  }

  function updateWorkTime() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - workStartTime;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor(((elapsedTime % (1000 * 60)) / 1000));
    openButtons.forEach(button => button.textContent = `${hours}시간 ${minutes}분 ${second}초`);
  }

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent === 'Working Hours') {
        toggleStartTimeModal();
      } else {
        toggleEndTimeModal();
      }
    });
  });

  startButton.addEventListener('click', () => {
    startWork();
    toggleStartTimeModal();
  });
  endButton.addEventListener('click', () => {
    endWork();
    toggleEndTimeModal();
  });
  modalBackgroundStart.addEventListener('click', toggleStartTimeModal);
  modalBackgroundEnd.addEventListener('click', toggleEndTimeModal);
}


function navigatePage(event) {
  const anchor = event.target.closest("a");
  if (anchor && anchor.href) {
    event.preventDefault();
    const path = anchor.getAttribute("href");
    history.pushState(null, null, path);
    route();
  }
}

function route() {
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
