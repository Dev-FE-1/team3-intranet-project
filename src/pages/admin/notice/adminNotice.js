function loadCSS(filename) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = filename;
  document.head.appendChild(link);
}

export default function adminNotice(container) {
  const content = document.querySelector(container);
  content.innerHTML = `<div class="container">
      <div class="content-wrapper">
        <div class="content">
          <div class="board">
            <div class="content-image">이미지존</div>
            <div class="content-title">이서미님의 퇴사</div>
          </div>
          <div class="board">
            <div class="content-image">이미지존</div>
            <div class="content-title">이서미님의 퇴사</div>
          </div>
          <div class="board">
            <div class="content-image">이미지존</div>
            <div class="content-title">이서미님의 퇴사</div>
          </div>
          <button class="add-button" data-path="/notice/noticeCreate">+</button>
        </div>
      </div>
    </div>`;

  const addButton = document.querySelector(".add-button");

  addButton.addEventListener("click", function (event) {
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
}
