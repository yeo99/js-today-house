// 제목을 입력받는 .title-input input태그를 가져옴
const $titleInput = document.querySelector('.title-input');
const $contentInput = document.querySelector('.content-input');
const $currentTitleLength = document.querySelector('.current-title-length');
const $publishButton = document.querySelector('.publish-button');
const $postForm = document.querySelector('.post-form');

// 인풋 입력이 되면 입력값을 체크하는 함수
// 근데 별 다른 요청사항이 없다면 그냥 html maxlength속성 쓰자
function checkInputLength({ target }) {
    if (target.value && target.value.length > 30) {
        alert('30자를 초과한 제목은 입력할 수 없습니다.');
        return;
    }

    // 현재 입력한 글자수가 몇 자인지 알려준다.
    $currentTitleLength.innerHTML = target.value.length;
}

// 인풋 입력이 되면 입력값을 체크
$titleInput.addEventListener('input', checkInputLength);

// 24번째줄 굳이..?
$postForm.addEventListener('submit', () => console.log("제출!"));
$publishButton.addEventListener('submit', () => alert('제출!'));