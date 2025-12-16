// 대메뉴만 렌더링
const navMenuHTML = navMenu.map(menu =>
  `<li class="${menu.mainEng}"><a href="#">${menu.mainCategory}</a></li>`
).join('');

document.querySelector('.header-nav').innerHTML = navMenuHTML;

// 전체 서브메뉴를 세로로 쭉 렌더링
const fullDropdownHTML = `
  <ul class="dropdown-columns">
    ${navMenu.map(menu => `
      <li class="column ${menu.mainEng}">
        ${menu.subCategory.map(sub =>
  `<a href="#">${sub}</a>`
).join('')}
      </li>
    `).join('')}
  </ul>
`;

document.querySelector('.full-dropdown').innerHTML = fullDropdownHTML;


// 내가 구독 중인 소식 탭 메뉴
const newsTabMenu = myNewsCat.map(news =>
  `<li class="${news.nameEng}">${news.name}</li>
`
).join('');

document.querySelector('.news-type-list').innerHTML = newsTabMenu;

// 내가 구독 중인 소식 내용
const getNewsText = (news) => {
  switch (news.type) {
    case "artist":
      return `${news.name}의 새로운 공연 소식이 있어요.`;
    case "region":
      return `${news.name}에서 새로운 공연이 열려요.`;
    case "performance":
      return `내가 관심 있는 공연의 새로운 소식이에요.`;
    case "company":
      return `${news.name}에서 새로운 공연을 제작했어요.`;
    default:
      return "새로운 소식입니다.";
  }
};

const newsContents = myNewsList.map(news =>
  `<li class="flex">
    <div class="img-box">
      <a href="#">
        <img src="./img/profile.png" alt="#" />
      </a>
    </div>
    <div class="text-box">
      <p class="news-type">${getNewsText(news)}</p>
      <p class="performance-name">${news.performanceName}</p>
      <p class="date">${news.createdAt}</p>
    </div>
  </li>`

).join('');

document.querySelector('.news-container').innerHTML = newsContents;

// 섹션 별 메인 카테고리
const mainCatTap = mainCat.map(main =>
  `<li class="${main.nameEng}">${main.name}</li>`
).join('');

document.querySelectorAll('.performance-type-list').forEach(element => {
  element.innerHTML = mainCatTap;
});

// 오픈 예정
const comingSoonList = performanceData.map(coming =>
  `
<li class="sortid-${coming.sortId} ${coming.type}">  
  <div class="img-box">
    <a href="#"><img src="./img/poster.png" alt="" /></a>
  </div>
  <div class="text-box">
    <p class="performance-name">${coming.name} (${coming.nameEng})</p>
    <p class="hall-name">${coming.hall}</p>
    <p class="period">${coming.period[0]} - ${coming.period[1]}</p>
  </div>
</li>
`).join('');

document.querySelector('.slide-container').innerHTML = comingSoonList;


const rankingList = realtimeRanking.map(rank => `

  <li class="${rank.performanceId}">
    <span class="rank-num">${rank.sortId}</span>
    <span class="performance-name">${rank.name}</span>
  </li>
  `).join('');

document.querySelector('.ranking-list-container').innerHTML = rankingList;

const reviewList = reviewData.map(review => `
  <li class="review-box performance-${review.performanceId}">
    <div class="img-box">
      <a href="#"><img src="./img/poster.png" alt="" /></a>
    </div>
    <div class="text-box">
      <p class="performance-name">${review.performanceName}</p>
      <p class="review-title">${review.reviewTitle}</p>
      <p class="keyword">
        ${review.keyword.map(word => `<span>#${word}</span>`).join('')}
      </p>
      <p class="review-content">${review.reviewText}</p>
      <div class="review-info-box flex">
        <p class="date">작성일 ${review.createdAt}</p>
        <p class="score">${review.score}/5</p>
      </div>
    </div>
  </li>
  `).join('')

document.querySelector('.review-container').innerHTML = reviewList;