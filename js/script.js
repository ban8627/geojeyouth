// 모든 리소스가 준비가 되었는가?

// jquery 를 이용(html, css, js)
$(document).ready(function () {
  // 모바일 메뉴 기능b
  // .mb-bt 를 저장해서 활용하자.
  $('.mb-bt').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('mb-bt-open');
    $('.mb-dim').toggleClass('mb-dim-open');
    $('.mb-wrap').toggleClass('mb-wrap-open');
  });


  // 모바일 메뉴 펼치기 기능
  // 1. 모바일 메뉴 저장
  let mb_mainmenu = $('.mb-mainmenu');
  // = 할당/대입 연산자(assingment)

  // 2. 모바일 서브메뉴 저장
  let mb_submenu = $('.mb-submenu');
  // 3. 펼쳐질 서브메뉴의 높이값
  let mb_submenu_high = [];
  // [] 여러 데이터 입력

  // 높이값 계산을 실행
  $.each(mb_submenu, function (index) {
    // 각각의 .mb-submenu 로 가서
    // li 의 개수를 파악한다.
    let count = $(this).find('li').length;
    // 최종 결과를 저장(56*count)
    mb_submenu_high[index] = (56 * count);
  });

  // 최종 결과
  let mb_li = $('.mb-menu > li');
  $.each(mb_mainmenu, function (index) {
    $(this).click(function (e) {
      //  웹브라우저 갱신 막기
      e.preventDefault();

      // mb-mainmenu 를 toggleClass 한다.
      $(this).toggleClass('mb-mainmenu-open');
      let active = $(this).hasClass('mb-mainmenu-open');
      if (active == true) {
        let temp = mb_submenu_high[index];
        mb_li.eq(index).height(temp + 60);
      } else {
        mb_li.eq(index).height(60);
      }

    });



  });



  // 화면 사이즈 체크
  $(window).resize(function () {
    // 화면 너비를 계산한다.
    let temp = $(window).width();
    // 1000 px 보다 크면
    if (temp > 1000) {
      // 모바일 버튼 기능 초기화
      $('.mb-bt').removeClass('mb-bt-open');
      $('.mb-dim').removeClass('mb-dim-open');
      $('.mb-wrap').removeClass('mb-wrap-open');
      $('.mb-menu>li').height(60);
      $('.mb-mainmenu').removeClass('mb-mainmenu-open');
    }

  });

  let more_wrap = $('.more-wrap');
  let member_more = $('.member-more');
  let more_close = $('.more-div-close');

  member_more.click(function () {
    more_wrap.fadeIn(300);
  });
  more_close.click(function () {
    more_wrap.fadeOut(300);
  });

  // 더보기 메뉴 배경을 클릭하면 사라지기
  more_wrap.click(function () {
    more_wrap.fadeOut(300);
  });
  $('.more-div').click(function (event) {
    event.stopPropagation();
  });

  // 모바일 메뉴 배경 클릭시 사라짐.
  let mb_dim = $('.mb-dim');
  mb_dim.click(function () {
    $('.mb-bt').removeClass('mb-bt-open');
    $('.mb-dim').removeClass('mb-dim-open');
    $('.mb-wrap').removeClass('mb-wrap-open');
    $('.mb-menu>li').height(60);
    $('.mb-mainmenu').removeClass('mb-mainmenu-open');
  })

  // 커뮤니티 영역 데이터 연동
  // 이룸 소식 : Array[] 로 구현
  let infoLinkArr = ['#1', '#2', '#3', '#4'];
  let infoTitleArr = [
    '7월 취창업 특강 지원자 모집 ♡', '6월 문화특강 [모스큐브&멘톨비누 만들기]', '6월 인문학특강 [4차 산업혁명과 청년]', '< 내꿈공간(내 일을 꿈꾸는 청년창업공간) 대관 안내 >'
  ];
  let infoDateArr = [
    '2022.06.27', '2022.06.13', '2022.06.08', '2022.06.02'
  ];
  let dataInfo = $('.data-info');
  let communityOutput = "";

  for (let i = 0; i < infoLinkArr.length; i++) {
    let temp = `
          <li>
            <a href="${infoLinkArr[i]}">${infoTitleArr[i]}</a>
            <span>${infoDateArr[i]}</span>
          </li>
        `;
    communityOutput += temp;
  }

  dataInfo.html(communityOutput)
  // 청년정책 새소식  : 객체  {} 구현 
  let newsData = [{
      "link": '#1',
      "title": '2022 경남 청년 라이브커머스 아카데미 참가자 모집 공고',
      "date": '2022.06.27'
    },
    {
      "link": '#2',
      "title": '청춘다락, 7월 프로그램 참여자 선정 결과(예비명단 포함)',
      "date": '2022.06.23'
    },
    {
      "link": '#3',
      "title": '「2022년 청년, 거제에서 한 달 살아보기」 참여 청년 모집!!',
      "date": '2022.06.15'
    },
    {
      "link": '#4',
      "title": '2022년 거제시 청년 월세 지원사업 선정 결과',
      "date": '2022.06.08'
    }
  ];
  let dataNewsDiv = $('.data-news');
  let dataNewsOutput = '';
  for (let i = 0; i < newsData.length; i++) {
    // 데이터를 한개씩 가져와서 뜯는다.
    let data = newsData[i];
    let temp = `
    <li>
      <a href="${data.link}">${data.title}</a>
      <span>${data.date}</span>
    </li>
  `;
    dataNewsOutput += temp;
  }
  dataNewsDiv.html(dataNewsOutput);

});

// js 를 이용(html, css, js,멀티미디어 요소)
window.onload = function () {

  // 비주얼 슬라이드
  let sw_visual = new Swiper('.sw-visual', {
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-visual-pg",
      clickable: true,
    },
  });
  // 일시멈춤 버튼
  // 현재 상태 저장
  let slide_now = 'ing';

  $('.sw-visual-bt').click(function () {

    if (slide_now == 'ing') {
      // 현재 슬라이드 진행 중이라면
      // 슬라이드를 멈춘다.
      slide_now = 'stop';
      sw_visual.autoplay.stop();
      $(this).find('span').text('play_arrow');

    } else {
      // 현재 슬라이드가 멈췄다.
      // 다시 슬라이드를 진행한다.
      slide_now = 'ing';
      sw_visual.autoplay.start();
      $(this).find('span').text('pause');
    }

  });

  // 배너 슬라이드
  let sw_banner = new Swiper('.sw-banner', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      prevEl: '.sw-banner-prev',
      nextEl: '.sw-banner-next'
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1400: {
        slidesPerView: 6
      },
      1260: {
        slidesPerView: 5
      },
      1000: {
        slidesPerView: 4
      },
      860: {
        slidesPerView: 3
      }
    }
  });

  // 배너 슬라이드 일시멈춤 버튼
  $('.sw-banner-pause').click(function () {
    // 현재 span 태그 안쪽의 글자를 읽는다.
    let temp = $(this).find('span').text();
    if (temp == 'play_arrow') {
      $(this).find('span').text('pause');
      sw_banner.autoplay.stop();
    } else {
      $(this).find('span').text('play_arrow');
      sw_banner.autoplay.start();
    }
  });

  // 화면 위로 이동
  $('.gotop').click(function () {

    $('html').animate({
      scrollTop: 0
    }, 1000);

  });


  // calendar
  let date = new Date();
  let viewYear = date.getFullYear();
  let viewMonth = date.getMonth() + 1;
  let viewToday = date.getDate();
  document.querySelector('.calendar-date').textContent = `${viewYear}. ${viewMonth}`;
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 윤년 계산
  if (calendarYear % 400 == 0) {
    monthDays[1] = 29;
  } else if (calendarYear % 100 == 0) {
    monthDays[1] = 28;
  } else if (calendarYear % 4 == 0) {
    monthDays[1] = 29;
  }
  // 달력 월의 마지막 일
  let calendarMonthLastDate = monthDays[date.getMonth()];
  let monthLastDate = new Date(2022, 3, 0);
  let monthStartDay = new Date(calendarYear, date.getMonth(), 1);
  let calendarMonthStartDay = monthStartDay.getDay();
  let calendarWeekCount = Math.ceil((calendarMonthStartDay + calendarMonthLastDate) / 7);

  var html = "";
  html += "<tbody>";
  let calendarPos = 0;
  let calendarDay = 0;
  for (var index1 = 0; index1 < calendarWeekCount; index1++) {
    html += "<tr>";
    for (var index2 = 0; index2 < 7; index2++) {
      if (calendarMonthStartDay <= calendarPos) {
        calendarDay++;
        html +="<span>"+calendarDay+"</span>"
      }
      html += "<td></td>";
    }
    html += "</tr>";
  }
  html += "</tbody>";
  $(".calendar-body").html(html);

  
  // 활동갤러리
  // 출력할 데이터 모음
  let galleryData = [{
      link: '#',
      title: '3월 인문학 특강 [우리 삶에 철학이 필요한 이유]',
      date: '2021-12-14',
      pic: 'gallery_1.jpg'
    },
    {
      link: '#',
      title: '12월 문화특강 주간 ♡ 크리스마스 입욕제 만들기',
      date: '2021-12-14',
      pic: 'gallery_2.jpg'
    },
    {
      link: '#',
      title: '12월 문화특강 주간 ♡ 플레이팅 도마 만들기',
      date: '2021-12-14',
      pic: 'gallery_3.jpg'
    }
  ];

  function showGalleryInfo(_tag, _data) {
    // 대상을 찾아라.
    let who = $(_tag);
    who.attr('href', _data.link); // attribute
    let html = `
      <span class="gallery-img"></span>
      <p class="gallery-cont">
        <span class="gallery-title">
          ${_data.title}
        </span>
        <span class="gallery-date">${_data.date}
        </span>
      </p>
    `;
    // 출력
    who.html(html);
    // 배경 이미지
    let bg = who.find('.gallery-img');
    bg.css('background', 'url(images/' + _data.pic + ') no-repeat center');
    bg.css('background-size', 'cover');
  }
  showGalleryInfo('#gallery-list-01', galleryData[0]);
  showGalleryInfo('#gallery-list-02', galleryData[1]);
  showGalleryInfo('#gallery-list-03', galleryData[2]);
}