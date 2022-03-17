// 반복문 돌릴거 아니니까 필요없을듯
// const postDetailTemplate = `<div class="category">온라인 집들이</div>
// <div class="title">200개의 식물과 사는, 가드너의 빈티지 무드 하우스</div>

// <div class="profile">
//   <div class="profile-image-container">
//     <img
//       src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/163797496600670255.jpeg?gif=1&w=144&h=144&c=c"
//       alt="프로필 이미지"
//       class="profile-image"
//     />
//   </div>
//   <div class="profile-detail">
//     <span class="profile-detail-nickname">sophiegamgak</span>
//     <span class="profile-detail-date">2021년 11월 27일</span>
//   </div>
// </div>`;
const $detailContainer = document.querySelector('.content-container');
const $coverImage = document.querySelector('.cover-image');
const $postContent = document.querySelector('.post-content');

// ID가 하드코딩되어있는데, ID를 URL에서 뽑아와야함
// URLSearchParams API(MDN 참고)를 사용하면 편리하게 추출가능
const postId = new URLSearchParams(window.location.search).get('id');
console.log(postId);    // id숫자값 나옴

// id숫자값을 이용하여 fetch함. ID추출
async function fetchPost(postId) {
    // fetch가 제대로 호출되었는지는 개발자도구 - 네트워크에서 확인 가능
    const response = await fetch(`http://localhost:1234/posts/${postId}`);
    const data = await response.json();

    return data;
}

fetchPost(postId).then((post) => {
    $coverImage.src = post.image;
    $postContent.innerText = post.content;
    $detailContainer.innerHTML = `<div class="category">온라인 집들이</div>
    <div class="title">${post.title}</div>
    
    <div class="profile">
      <div class="profile-image-container">
        <img
          src="${post.authorImage}"
          alt="프로필 이미지"
          class="profile-image"
        />
      </div>
      <div class="profile-detail">
        <span class="profile-detail-nickname">${post.author}</span>
        <span class="profile-detail-date">2021년 11월 27일</span>
      </div>
    </div>`},
);