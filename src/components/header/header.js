function app() {
    window.addEventListener('popstate', (event) => {
        console.log('popstate');
        route();
    });

    document.body.addEventListener('click', navigatePage);
    route();
}

function navigatePage(event) {
    event.preventDefault();

    const anchor = event.target.closest('a');
    const path = anchor.getAttribute('href');
    history.pushState(null, null, path);

    route();
}

function route() {
    const content = document.querySelector('#app');
    const path = location.pathname;

    switch(path) {
        case '/employee-list':
            content.innerHTML = `<h1>임직원 리스트 페이지</h1>`
            break;
        case '/notice':
            content.innerHTML = `<h1>공지사항 페이지</h1>`
            break;
        case '/absent-request':
            content.innerHTML = `<h1>부재신청 페이지</h1>`
            break;
    }
}

document.addEventListener('DOMContentLoaded', app);