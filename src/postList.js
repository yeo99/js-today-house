// postList.html에 .posting-container에다가 json데이터를 넣어줄 예정
const $postsContainer = document.querySelector('.posting-container');

// db.json에 있는 내용들을 fetch를 통해 const post에 가져올것
const post = {};

async function fetchPosts() {
    // json-server로 localhost:1234/posts에 mock db 미리 열고
    // localhost:1234에서 열린 한칸 아래의 posts를 가져옴
    const response = await fetch('http://localhost:1234/posts');
    // 데이터를 json으로 바꿔줌
    const data = await response.json();

    return data;
}


// url의 쿼리 파라미터를 통해 id를 넘겨줄 예정이다.
const postTemplate = (post) => `<a href="/postDetail.html?id=${post.id}">
<div class="posting-wrapper">
        <div class="posting-image-container">
          <img
            src="${post.image}"
            alt="게시글 이미지"
          />
        </div>
        <h2 class="">${post.title}</h2>

        <div class="profile-wrapper">
          <div class="profile-image-container">
            <img
              class="profile-image"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/162090803586611477.png?gif=1&w=72&h=72&c=c"
              alt="profile-image"
            />
          </div>
          <span class="profile-nickname">kate 홈스타일링</span>
        </div>
      </div>

      <div class="posting-wrapper">
        <div class="posting-image-container">
          <img
            src="${post.image}"
            alt="게시글 이미지"
          />
        </div>
        <h2 class="">${post.title}</h2>

        <div class="profile-wrapper">
          <div class="profile-image-container">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/159617747722993706.png?gif=1&w=72&h=72&c=c"
              alt="profile-image"
            />
          </div>
          <span class="profile-nickname">벨류인테리어디자인</span>
        </div>
      </div>

      <div class="posting-wrapper">
        <div class="posting-image-container">
          <img
            src="${post.image}"
            alt="게시글 이미지"
          />
        </div>
        <h2 class="">${post.title}</h2>

        <div class="profile-wrapper">
          <div class="profile-image-container">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/163453273125132962.jpg?gif=1&w=72&h=72&c=c"
              alt="profile-image"
            />
          </div>
          <span class="profile-nickname">(주)제이디자인</span>
        </div>
      </div>

      <div class="posting-wrapper">
        <div class="posting-image-container">
          <img
            src="${post.image}"
            alt="게시글 이미지"
          />
        </div>
        <h2 class="">${post.title}</h2>

        <div class="profile-wrapper">
          <div class="profile-image-container">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/163007390985736959.jpg?gif=1&w=72&h=72&c=c"
              alt="profile-image"
            />
          </div>
          <span class="profile-nickname">유마디자인</span>
        </div>
      </div>

      <div class="posting-wrapper">
        <div class="posting-image-container">
          <img
            src="${post.image}"
            alt="게시글 이미지"
          />
        </div>
        <h2 class="">${post.title}</h2>

        <div class="profile-wrapper">
          <div class="profile-image-container">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/162986643900123214.JPG?gif=1&w=72&h=72&c=c"
              alt="profile-image"
            />
          </div>
          <span class="profile-nickname">(주)어썸인테리어앤디자인</span>
        </div>
      </div>

      <div class="posting-wrapper">
        <div class="posting-image-container">
          <img
            src="${post.image}"
            alt="게시글 이미지"
          />
        </div>
        <h2 class="">${post.title}</h2>

        <div class="profile-wrapper">
          <div class="profile-image-container">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/162262311286852156.jpg?gif=1&w=72&h=72&c=c"
              alt="profile-image"
            />
          </div>
          <span class="profile-nickname">수디자인</span>
        </div>
      </div>

      <div class="posting-wrapper">
        <div class="posting-image-container">
          <img
            src="${post.image}"
            alt="게시글 이미지"
          />
        </div>
        <h2 class="">${post.title}</h2>

        <div class="profile-wrapper">
          <div class="profile-image-container">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/159713388135755393.png?gif=1&w=72&h=72&c=c"
              alt="profile-image"
            />
          </div>
          <span class="profile-nickname">코이디자인</span>
        </div>
      </div>
`;


fetchPosts().then((posts) => {
    console.log(posts);
    // map으로 안에 있는 post를 돌림
    $postsContainer.innerHTML = posts.map((post) => postTemplate(post)).join('');    // string이니까 join으로 불필요한 문자열 제거
    // innerHTML = 문자열을 파싱해서 html로 만들어 줌
    // 이걸 안쓰면 위의 html은 그냥 문자열
});