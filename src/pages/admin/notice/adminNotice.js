import { route } from "../../../components/header/header.js";
import "../../admin/admin-notice/adminNotice.css";
import "../../admin/admin-notice/adminNoticeCreate.css";
import "../../admin/admin-notice/adminNoticeContent.css";

export default function adminNotice(container) {
  const content = document.querySelector(container);
  content.innerHTML = `<div class="container">
      <div class="content-wrapper">
        <div class="content">
          <div class="board" data-path="/notice/noticeContent">
            <div class="content-image">이미지존</div>
            <div class="content-title">이서미님의 퇴사</div>
          </div>
          <div class="board" data-path="/notice/noticeContent">
            <div class="content-image">이미지존</div>
            <div class="content-title">이서미님의 퇴사</div>
          </div>
          <div class="board" data-path="/notice/noticeContent">
            <div class="content-image">이미지존</div>
            <div class="content-title">이서미님의 퇴사</div>
          </div>
          <button class="add-button" data-path="/notice/noticeCreate">+</button>
        </div>
      </div>
    </div>`;

  const addButton = document.querySelector(".add-button");
  const boards = document.querySelectorAll(".board");

  boards.forEach((board) => {
    board.addEventListener("click", (event) => {
      event.preventDefault();
      const path = board.dataset.path;
      if (path) {
        history.pushState(null, null, path);
        route();
      }
    });
  });

  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const path = addButton.dataset.path;
    if (path) {
      history.pushState(null, null, path);
      route();
    }
  });
}

export function adminNoticeCreate(container) {
  const content = document.querySelector(container);
  content.innerHTML = `<div class="container">
      <div class="content-wrapper">
        <div class="content">
          <div class="title-box">
            제목
            <input type="text" placeholder="제목을 입력하세요" />
          </div>
          <div class="description">
            내용
            <textarea type="text" placeholder="내용을 입력하세요"></textarea>
          </div>
          <div class="image-upload">
            첨부 사진
            <div class="image-upload-box"></div>
          </div>
          <div class="button-zone">
            <button id="cancel">취소</button>
            <button id="submit">등록</button>
          </div>
        </div>
      </div>
    </div>`;

  const cancelButton = document.querySelector("#cancel");
  cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    history.pushState(null, null, "/notice");
    route();
  });
}

export function adminNoticeContent(container) {
  const content = document.querySelector(container);
  content.innerHTML = `
   <div class="container">
      <div class="content-wrapper">
        <div class="content">
          <div class="title-box">
            <div id="title">이서미님의 퇴사</div>
            <div id="writer">이서미</div>
          </div>
          <hr class="divider" />
          <div class="img-box">이미지</div>
          <div class="description-box">공지내용문구</div>
          <hr class="divider2" />
          <div class="button-zone">
            <button id="delete">삭제</button>
            <button id="submit">수정</button>
          </div>

          <!-- 모달창 -->
          <div id="modal" class="modal">
            <div class="modal-content">
              <h4>정말 삭제 하시겠습니까?</h4>
              <div class="button-zone">
                <button id="deleteCancel">취소</button>
                <button id="deleteConfirm">확인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
