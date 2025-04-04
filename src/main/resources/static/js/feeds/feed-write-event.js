// 2025 조승찬 작성

// ? 버튼을 눌렀을 때 모달창이 열리고, 모달창 이외 부분을 누르면 모달창이 닫히게 작동
const questionButton = document.querySelector(".bSEWFr");
const modal = document.querySelector("#modal-root");
const modalDiv = document.createElement("div");
modalDiv.innerHTML = `<div class="ActionSheet__Container-akkdcx-0 jgFMVr">
        <div class="ActionSheet__Overlay-akkdcx-1 eCzJv"></div>
        <div class="ActionSheet__Content-akkdcx-2 cyEVkt">
            <header class="ActionSheet__Header-akkdcx-3 dNCiPY"></header>
            <header class="Ver4__TitleVer4-d1i4tu-0 kNwzQK">피드 유형</header>
            <div class="WhatIsFeedTypeActionSheet__Body-sc-1ifwafz-0 gKShYF">
                <div class="WhatIsFeedTypeActionSheet__InformationContainer-sc-1ifwafz-1 bwbCin">
                    <strong class="WhatIsFeedTypeActionSheet__Summary-sc-1ifwafz-2 bXAzoH">일반 피드</strong>
                    <p class="WhatIsFeedTypeActionSheet__Description-sc-1ifwafz-3 cDJNKc">
                        일상, 취미, 여행 등 다양한 주제에 대해 자유롭게 이야기하고, 다른 크루와 소통해 보세요.
                    </p>
                </div>
                <div style="width: 100%; border: 0.5px solid lightgray;"></div>
                <div class="WhatIsFeedTypeActionSheet__InformationContainer-sc-1ifwafz-1 bwbCin">
                    <strong class="WhatIsFeedTypeActionSheet__Summary-sc-1ifwafz-2 bXAzoH">같이해요</strong>
                    <p class="WhatIsFeedTypeActionSheet__Description-sc-1ifwafz-3 cDJNKc">
                        원하는 프립을 소개하고, 함께 할 크루를 찾아보세요. 새로운 인연을 만들며 다양한 경험을 해보세요.
                    </p>
                    <p class="WhatIsFeedTypeActionSheet__Comment-sc-1ifwafz-4 hDGrky">
                        #같이해요 태그가 자동 생성됩니다.
                    </p>
                </div>
            </div>
        </div>
    </div>`;

questionButton.addEventListener("click", () => {
    setTimeout(() => {
        modal.appendChild(modalDiv);

        const noModal = document.querySelector(".eCzJv"); // 모달창이 열렸을 때 생기는 요소이므로 EventListener 내에서 설정
        noModal.addEventListener("click", () => {
            modal.removeChild(modalDiv);
        });
    }, 300); // 1000 밀리초 = 1초
});

// ? 버튼을 눌렀을 때 모달창이 열리고, 모달창 이외 부분을 누르면 모달창이 닫히게 작동

// 일반피드 같이해요  버튼을 눌렀을 때 양쪽의 바탕색과 글자색이 반대로 바뀌도록 함
const generalFeed = document.querySelector("#general");
const togetherFeed = document.querySelector("#together");
const textarea = document.querySelector(".Textarea__StyledTextarea-sc-1b9phu6-1.kmqQeB");

generalFeed.addEventListener("click", () => {
    if (!generalFeed.classList.contains("ennMMJ")) {
        generalFeed.classList.remove("jkxdpP");
        generalFeed.classList.add("ennMMJ");
        togetherFeed.classList.remove("ennMMJ");
        togetherFeed.classList.add("jkxdpP");
        textarea.placeholder = "오늘 어떤 것을 경험하고 느끼셨나요?";
        // 피드타입 세팅 25.03.18 조승찬
        document.querySelector(".feedType-input").value = "GENERAL";
    }
});
togetherFeed.addEventListener("click", () => {
    if (!togetherFeed.classList.contains("ennMMJ")) {
        togetherFeed.classList.remove("jkxdpP");
        togetherFeed.classList.add("ennMMJ");
        generalFeed.classList.remove("ennMMJ");
        generalFeed.classList.add("jkxdpP");
        textarea.placeholder = "저랑 같이 피커스 하실래요?";
        // 피드타입 세팅 25.03.18 조승찬
        document.querySelector(".feedType-input").value = "TOGETHER";
    }
});
// 일반피드 같이해요  버튼을 눌렀을 때 양쪽의 바탕색과 글자색이 반대로 바뀌도록 함

// textarea에 글자 입력시 입력된 글자 수 보여주기
document.querySelector(".kmqQeB").addEventListener("input", (e) => {
    e.target.closest(".iFxPyq").querySelector(".jvAusQ").textContent = `${
        document.querySelector(".kmqQeB").value.length
    } / 1200 (추천 글자수: 30자 이내)`;
});
// textarea에 글자 입력시 입력된 글자 수 보여주기

// 엔터키를 눌렀을 때 태그 생성
let tagCount = 0;
const tagParentDiv = document.querySelector(".bmexYY-container");
const tagInput = document.querySelector(".SocialFeedTagsContainer__SocialFeedTagsWrapper-sc-2762su-0.bmexYY input");
tagInput.addEventListener("keydown", (e) => {

    if (e.key == "Enter") {
        e.preventDefault(); //  폼 제출 방지 keyup이면 이미 제출되므로 keydown으로 바꾸고

        if (tagCount > 9) {
            //alert(`10개 까지만 입력 가능합니다.`);
            showAlertModal(`10개 까지만 입력 가능합니다.`);
            return;
        }
        const tagChildDiv = document.createElement("div");
        tagChildDiv.className = "SocialFeedTagsContainer__TagsItemContainer-sc-2762su-2 bJjaqH";
        tagChildDiv.innerHTML = `<span>#${tagInput.value}</span>
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='nonzero' stroke='%23999' stroke-linecap='square'%3E %3Cpath d='M11.828 6.172l-5.656 5.656M11.828 11.828L6.172 6.172'/%3E %3C/g%3E %3C/svg%3E" alt="delete tags item">`;
        tagParentDiv.appendChild(tagChildDiv);
        tagInput.value = "";

        tagCount += 1;
        tagInput.placeholder = `태그를 입력 후 엔터를 누르면 태그가 생성돼요! (${tagCount}/10)`;
    }
});
// 엔터키를 눌렀을 때 태그 생성

// 태그의 이미지(x)를 눌렀을 때 div 삭제 :: 동적으로 생성된 요소일 때는 부모 요소에 위임
tagParentDiv.addEventListener("click", (e) => {
    e.preventDefault(); // 폼 제출 방지

    if (e.target.tagName == "IMG") {
        e.target.closest(".SocialFeedTagsContainer__TagsItemContainer-sc-2762su-2").remove();

        tagCount -= 1;
        tagInput.placeholder = `태그를 입력 후 엔터를 누르면 태그가 생성돼요! (${tagCount}/10)`;
    }
});

// 모달 열기 함수
function showAlertModal(message) {
    // 모달 요소
    var modal = document.getElementById("alertModal");
    // 모달 닫기 요소
    var closeBtn = document.getElementsByClassName("close")[0];

    modal.querySelector("p").textContent = message;

    modal.style.display = "block";

    // 닫기 버튼 클릭 시 모달 닫기
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // 모달 외부 클릭 시 모달 닫기
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

//25.03.18 조승찬 추가 시작

// 파일 추가시 기존 파일에 추가되는 형식으로 모여서 서버로 전송
const fileParentDiv = document.querySelector(".ImageList-sc-9v1mt2-0.hGJMVS");
const fileInput = document.querySelector(".InputImageReview__Wrapper-sc-1oapt4s-0.ipbuZD input");
const allFiles = []; // 파일 추가시 기존 파일 유지되게 하기 위한 배열
fileInput.addEventListener("change", (e) => {

    const files = e.target.files;

    Array.from(files).forEach(newFile => {
        // 중복이 있는지 확인하고 없을 때 추가
        const isDup = allFiles.some(existingFile => {
            return existingFile.name == newFile.name && existingFile.size == newFile.size;
        });

        if (!isDup) { // 중복이 없을 때만 추가
            allFiles.push(newFile);
        }
    });

    const formData = new FormData();
    allFiles.forEach( file => {
       formData.append("files", file);
    });
    console.log(allFiles);

    // 서버로 전송하여 path와 썸네일 생성
    inputFileUpload(formData);
});

// 새로 생성된 썸네일 삭제버튼 클릭시
// 신규 추가된 파일이 추가될 수 있도록 기존 배열에서 삭제처리
document.querySelector(".ImageList-sc-9v1mt2-0.hGJMVS").addEventListener("click", e => {
    if (e.target.className == "file-cancel"){
        const index = e.target.closest("li").dataset.index; // 클릭된곳의 인덱스 찾아오기
        allFiles.splice(index, 1); // 배열에서 파일 제거
        e.target.closest(".uploadFile").remove()
    }
})

// 등록하기 버튼 클릭시 태그와 파일 정보들을 모아서 input value에 세팅
// 텍스트에어리어에 글자가 없으면 경고
document.querySelector(".jULzvQ").addEventListener("click", (e) => {
    if (document.querySelector(".kmqQeB").value.length == 0){
        alert("피드 내용을 입력하세요 ");
        return;
    }

    e.preventDefault(); // 폼 제출 방지

    // DOM 요소가 동적으로 생성되는 경우, 부모 요소에 이벤트를 위임한다.
    // 서버로 전송할 인풋 데이터 생성
    let text = "";
    document.querySelector(".bmexYY-container").querySelectorAll(".bJjaqH span").forEach((span, index) => {
        text += `
	            <input type="hidden" name="tags[${index}]" value="${span.textContent}">
			 `;
    })

    // DOM 요소가 동적으로 생성되는 경우, 부모 요소에 이벤트를 위임한다.
    // 서버로 전송할 인풋 데이터 생성
    document.querySelector(".ImageList-sc-9v1mt2-0.hGJMVS").querySelectorAll(".uploadFile").forEach((li, index) => {
        text += `
	            <input type="hidden" name="files[${index}].fileName" value="${li.dataset.fileName}">
	            <input type="hidden" name="files[${index}].filePath" value="${li.dataset.filePath}">
	            <input type="hidden" name="files[${index}].fileSize" value="${li.dataset.fileSize}">
			 `;
    });
    document['feed-input-form'].insertAdjacentHTML("beforeend", text)
//  document['feed-input-form'].append(text);    //form은 텍스트 형식을 받는데, text는 html 방식이라서 오류가 남

    document['feed-input-form'].submit();  // form  제출
});


// 25.03.18 조승찬 추가 끝.
