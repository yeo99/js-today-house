// 인덱스 페이지의 스크립트

// 햄버거 버튼 가져옴
const $sidebarToggleButton = document.querySelector('.side-bar-toggle');
// 사이드 바 가져옴
const $sidebar = document.querySelector('.side-bar');
// backDrop(사이드바 닫기)
const $backDrop = document.querySelector('.back-drop');

// 이벤트리스터(타입=클릭), 콜백
$sidebarToggleButton.addEventListener('click', () => {
    // classList.toggle을 통해서
    // open이 있으면 제거하고, 없으면 open클래스를 붙여서 화면에 표시
    $sidebar.classList.toggle('open');

    // backdrop의 display를 block처리
    $backDrop.style.display = 'block';  // 사이드바 열었을때 나머지 영역이 dim해짐
})

// 백드롭 부분이 클릭시 사이드바가 닫힘
$backDrop.addEventListener('click', () => {
    $sidebar.classList.toggle('open');
    $backDrop.style.display = 'none'
})