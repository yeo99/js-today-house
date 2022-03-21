// 제목을 입력받는 .title-input input태그를 가져옴


const $goBack = document.querySelector('.go-back');
const $titleInput = document.querySelector('.title-input');
const $contentInput = document.querySelector('.content-input');
const $currentTitleLength = document.querySelector('.current-title-length');
const $publishButton = document.querySelector('.publish-button');
const $postForm = document.querySelector('.post-form');
const $coverImage = document.querySelector('.cover-image');
const $imageUpload = document.querySelector('#cover-image-upload');
const $imageReUpload = document.querySelector('#cover-image-re-upload');
const $fileReUpload = document.querySelector('.file-re-upload-wrapper');

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

function uploadImage(event) {
    const file = event.target.files[0]; // .files는 리스트, 0번 index 꺼냄
    console.log(file);

    // fileReader에 있는 생성자를 인스턴스화
    const fileReader = new FileReader()
    // 데이터를 URL로
    fileReader.readAsDataURL(file);
    // onload event 발생시(사진 업로드 완료시). 
    fileReader.onload = (event) => {
        // 업로드한 이미지 미리 보기 기능,
        // 이런식으로 작성하면 서버와 통신하지 않고 보여줄 수 있기에, 서버자원을 아낄 수 있다.
        $coverImage.src = event.target.result;
    };
    $coverImage.style.display = 'block'; // none으로 설정해놨었음.
    $fileReUpload.style.display = 'block';  // 사진 다시올리기
}


// db.json에서 입력한 글이 추가된것을 알 수 있음
async function postSubmit(event) {
    event.preventDefault(); // 새로고침 방지

    try {
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
            image: $coverImage.src,
            author: '새로운 유저',
            authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }),
    });
    // 업로드 성공시 글 목록으로 보냄
    window.location.assign('/postList.html');
    } catch (error) {
        // 업로드 실패시 오류메세지 출력
        alert(error);
    }
}

// $imageUpload에 change시 uploadImage()실행하는 이벤트 리스너
$imageUpload.addEventListener('change', uploadImage);
// $imageReUpload에 change시 uploadImage()실행하는 이벤트 리스너
$imageReUpload.addEventListener('change', uploadImage);

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