// 제목을 입력받는 .title-input input태그를 가져옴
const $titleInput = document.querySelector('.title-input');
const $goBack = document.querySelector('.go-back');
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


// db.json에서 입력한 글이 추가된것을 알 수 있음
async function postSubmit(event) {
    event.preventDefault(); // 새로고침 방지

    await fetch('http://localhost:1234/posts', {
        method: 'POST',
        headers: {
            // 헤더에 json타입을 넣어준다고 명시.
            // axios의 경우 자동으로 넣어준다고 함
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title: $titleInput.value,
            content: $contentInput.value,
        })
    });
}

// 인풋 입력이 되면 입력값을 체크
$titleInput.addEventListener('input', checkInputLength);

$postForm.addEventListener('submit', postSubmit);
$publishButton.addEventListener('click', () => {
    // eventTarget.dispatchEvent()
    // eventTarget 인터페이스의 dispatchEvent() 메서드는 eventTarget객체로 Event를 발송
    // 그리고 해당 이벤트에 대해 등록된 이벤트 리스너들을 (동기적)순서대로 호출
    $postForm.dispatchEvent(new Event('submit'));
});

// 뒤로가기 이벤트
$goBack.addEventListener('click', () => {
    window.history.back(1);
})