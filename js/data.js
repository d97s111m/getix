const navMenu = [
    {
        id: 1,
        sortId: 1,
        mainCategory: "콘서트",
        mainEng: "concert",
        subCategory: ["국내 뮤지션", "해외 뮤지션", "페스티벌", "전체보기"]
    },
    {
        id: 2,
        sortId: 2,
        mainCategory: "뮤지컬",
        mainEng: "musical",
        subCategory: ["라이선스", "오리지널", "창작", "넌버벌 퍼포먼스", "전체보기"]
    },
    {
        id: 3,
        sortId: 3,
        mainCategory: "연극",
        mainEng: "theater",
        subCategory: ["대학로", "기타지역", "전체보기"]
    },
    {
        id: 4,
        sortId: 4,
        mainCategory: "클래식/무용",
        mainEng: "classic",
        subCategory: ["클래식", "발레/무용", "오페라/판소리", "재즈/국악", "전체보기"]
    },
    {
        id: 5,
        sortId: 5,
        mainCategory: "전시/레저",
        mainEng: "exhibition",
        subCategory: ["전시", "체험/행사", "레저", "캠핑", "전체보기"]
    },
    {
        id: 6,
        sortId: 6,
        mainCategory: "가족/어린이",
        mainEng: "child",
        subCategory: ["뮤지컬", "연극", "기타", "전체보기"]
    },
    {
        id: 7,
        sortId: 7,
        mainCategory: "지역별",
        mainEng: "region",
        subCategory: ["지역별", "이벤트", "MD#", "콘텐츠"]
    },
    {
        id: 8,
        sortId: 8,
        mainCategory: "이벤트/MD#",
        mainEng: "event",
        subCategory: ["공지사항", "고객센터", "이용안내"]
    },
]

const myNewsCat = [
    {
        id: 1,
        sortId: 1,
        name: "전체",
        nameEng: "all"
    },
    {
        id: 2,
        sortId: 2,
        name: "아티스트",
        nameEng: "artist"
    },
    {
        id: 3,
        sortId: 3,
        name: "공연",
        nameEng: "performance"
    },
    {
        id: 4,
        sortId: 4,
        name: "제작사/주최사",
        nameEng: "company"
    },
    {
        id: 5,
        sortId: 5,
        name: "지역",
        nameEng: "region"
    }
]

const myNewsList = [
    {
        id: 1,
        sortId: 1,
        type: "artist",
        name: "박효신",
        performanceName: "박효신 콘서트 'Wildflower 2025'",
        createdAt: "2025-12-10"
    },
    {
        id: 2,
        sortId: 2,
        type: "performance",
        name: "레미제라블",
        performanceName: "뮤지컬 레미제라블 30주년 기념공연",
        createdAt: "2025-12-11"
    },
    {
        id: 3,
        sortId: 3,
        type: "company",
        name: "EMK뮤지컬컴퍼니",
        performanceName: "뮤지컬 엘리자벳 2025",
        createdAt: "2025-12-12"
    },
    {
        id: 4,
        sortId: 4,
        type: "region",
        name: "대학로",
        performanceName: "연극 햄릿 - 새해 특별공연",
        createdAt: "2025-12-13"
    },
    {
        id: 5,
        sortId: 5,
        type: "artist",
        name: "데이식스",
        performanceName: "데이식스 콘서트 'Welcome to the Show 2025'",
        createdAt: "2025-12-14"
    },
    {
        id: 6,
        sortId: 6,
        type: "performance",
        name: "위키드",
        performanceName: "뮤지컬 위키드 2025 시즌",
        createdAt: "2025-12-15"
    }
]

const mainCat = [
    { id: 1, sortId: 1, name: "콘서트", nameEng: "concert" },
    { id: 2, sortId: 2, name: "뮤지컬", nameEng: "musical" },
    { id: 3, sortId: 3, name: "연극", nameEng: "theater" },
    { id: 4, sortId: 4, name: "클래식/무용", nameEng: "classic" },
    { id: 5, sortId: 5, name: "전시/레저", nameEng: "exhibition" },
    { id: 6, sortId: 6, name: "가족/어린이", nameEng: "child" },
]

const performanceData = [
    {
        id: 1,
        sortId: 1,
        type: "concert",
        name: "박효신 콘서트 '겨울편지'",
        nameEng: "Park Hyo Shin Concert 'Winter Letter'",
        hall: "올림픽체조경기장",
        period: ["2026-01-15", "2026-01-17"]
    },
    {
        id: 2,
        sortId: 2,
        type: "musical",
        name: "레 미제라블",
        nameEng: "Les Misérables",
        hall: "샤롯데씨어터",
        period: ["2026-01-02", "2026-01-28"]
    },
    {
        id: 3,
        sortId: 3,
        type: "concert",
        name: "데이식스 콘서트 '웰컴 투 더 쇼'",
        nameEng: "DAY6 Concert 'Welcome to the Show'",
        hall: "KSPO DOME",
        period: ["2026-01-11", "2026-01-12"]
    },
    {
        id: 4,
        sortId: 4,
        type: "theater",
        name: "햄릿",
        nameEng: "Hamlet",
        hall: "대학로 아트원씨어터",
        period: ["2026-01-20", "2026-01-31"]
    },
    {
        id: 5,
        sortId: 5,
        type: "musical",
        name: "위키드",
        nameEng: "Wicked",
        hall: "디큐브 링크 아트센터",
        period: ["2026-01-03", "2026-01-26"]
    },
    {
        id: 6,
        sortId: 6,
        type: "concert",
        name: "르세라핌 콘서트 '언포기븐'",
        nameEng: "LE SSERAFIM Concert 'UNFORGIVEN'",
        hall: "잠실실내체육관",
        period: ["2026-01-08", "2026-01-09"]
    },
    {
        id: 7,
        sortId: 7,
        type: "classic",
        name: "조성진 피아노 리사이틀",
        nameEng: "Seong-Jin Cho Piano Recital",
        hall: "롯데콘서트홀",
        period: ["2026-01-25", "2026-01-25"]
    },
    {
        id: 8,
        sortId: 8,
        type: "musical",
        name: "시카고",
        nameEng: "Chicago",
        hall: "블루스퀘어 인터파크홀",
        period: ["2026-01-12", "2026-01-30"]
    },
    {
        id: 9,
        sortId: 9,
        type: "theater",
        name: "작은 아씨들",
        nameEng: "Little Women",
        hall: "대학로 TOM 2관",
        period: ["2026-01-18", "2026-01-31"]
    },
    {
        id: 10,
        sortId: 10,
        type: "concert",
        name: "아이브 첫 콘서트 '쇼 왓 아이 해브'",
        nameEng: "IVE First Concert 'Show What I Have'",
        hall: "올림픽공원 올림픽홀",
        period: ["2026-01-22", "2026-01-24"]
    },
    {
        id: 11,
        sortId: 11,
        type: "exhibition",
        name: "팀랩 보더리스 서울",
        nameEng: "teamLab Borderless Seoul",
        hall: "용산 아이파크몰",
        period: ["2026-01-01", "2026-01-31"]
    },
    {
        id: 12,
        sortId: 12,
        type: "child",
        name: "뽀로로 뮤지컬 '우주대모험'",
        nameEng: "Pororo Musical 'Space Adventure'",
        hall: "세종문화회관 M씨어터",
        period: ["2026-01-04", "2026-01-26"]
    }
];


const realtimeRanking = [
    {
        id: 1,
        performanceId: 3,
        sortId: 1,
        type: "concert",
        name: "데이식스 콘서트 '웰컴 투 더 쇼'",
        nameEng: "DAY6 Concert 'Welcome to the Show'"
    },
    {
        id: 2,
        performanceId: 1,
        sortId: 2,
        type: "concert",
        name: "박효신 콘서트 '겨울편지'",
        nameEng: "Park Hyo Shin Concert 'Winter Letter'"
    },
    {
        id: 3,
        performanceId: 5,
        sortId: 3,
        type: "musical",
        name: "위키드",
        nameEng: "Wicked"
    },
    {
        id: 4,
        performanceId: 10,
        sortId: 4,
        type: "concert",
        name: "아이브 첫 콘서트 '쇼 왓 아이 해브'",
        nameEng: "IVE First Concert 'Show What I Have'"
    },
    {
        id: 5,
        performanceId: 2,
        sortId: 5,
        type: "musical",
        name: "레 미제라블",
        nameEng: "Les Misérables"
    },
    {
        id: 6,
        performanceId: 8,
        sortId: 6,
        type: "musical",
        name: "시카고",
        nameEng: "Chicago"
    },
    {
        id: 7,
        performanceId: 6,
        sortId: 7,
        type: "concert",
        name: "르세라핌 콘서트 '언포기븐'",
        nameEng: "LE SSERAFIM Concert 'UNFORGIVEN'"
    },
    {
        id: 8,
        performanceId: 7,
        sortId: 8,
        type: "classic",
        name: "조성진 피아노 리사이틀",
        nameEng: "Seong-Jin Cho Piano Recital"
    },
    {
        id: 9,
        performanceId: 4,
        sortId: 9,
        type: "theater",
        name: "햄릿",
        nameEng: "Hamlet"
    },
    {
        id: 10,
        performanceId: 9,
        sortId: 10,
        type: "theater",
        name: "작은 아씨들",
        nameEng: "Little Women"
    }
];

const reviewData = [
    {
        id: 1,
        sortId: 1,
        performanceId: 3,
        type: "concert",
        performanceName: "데이식스 콘서트 '웰컴 투 더 쇼'",
        reviewTitle: "정말 최고의 밴드 공연! 라이브가 CD보다 좋아요",
        keyword: ["라이브", "감동", "밴드", "완벽"],
        reviewText: "데이식스 라이브는 정말 말이 안 되네요. 특히 성진이 보컬이 너무 안정적이고, 영케이 베이스 라인도 쫀득했어요. 앵콜까지 완벽했고 3시간이 5분처럼 느껴졌습니다. 다음 콘서트도 꼭 갈 예정!",
        score: 5,
        createdAt: "2025-12-12"
    },
    {
        id: 2,
        sortId: 2,
        performanceId: 5,
        type: "musical",
        performanceName: "위키드",
        reviewTitle: "옥주현 엘파바... 소름 돋는 가창력",
        keyword: ["옥주현", "가창력", "무대", "감동"],
        reviewText: "Defying Gravity 부를 때 진짜 온몸에 소름 돋았어요. 옥주현 배우님 음성이 극장 전체를 가득 채우는데 정말 압도당했습니다. 무대 장치도 웅장하고 스토리도 너무 좋았어요. 뮤지컬 입문자에게 추천!",
        score: 5,
        createdAt: "2025-12-14"
    },
    {
        id: 3,
        sortId: 3,
        performanceId: 1,
        type: "concert",
        performanceName: "박효신 콘서트 '겨울편지'",
        reviewTitle: "역시 박효신... 하지만 좌석이 아쉬워요",
        keyword: ["박효신", "감성", "좌석", "아쉬움"],
        reviewText: "박효신 목소리는 여전히 최고예요. '눈의 꽃' 들으면서 울었네요 ㅠㅠ 하지만 3층 뒤쪽 좌석이라 무대가 너무 멀어서 아쉬웠어요. 다음엔 더 가까운 자리에서 보고싶습니다. 그래도 만족!",
        score: 4,
        createdAt: "2025-12-10"
    },
    {
        id: 4,
        sortId: 4,
        performanceId: 4,
        type: "theater",
        performanceName: "햄릿",
        reviewTitle: "현대적 해석이 신선했지만... 호불호 갈릴 듯",
        keyword: ["현대적", "해석", "연출", "호불호"],
        reviewText: "셰익스피어 원작을 현대 기업 배경으로 각색한 연출이 참신했어요. 하지만 원작 팬으로서는 조금 아쉬운 부분도 있었습니다. 배우들 연기력은 정말 훌륭했고 특히 주연 배우 몰입도가 대단했어요.",
        score: 3,
        createdAt: "2025-12-13"
    }
];