const testData = {
	results: {
        "egen_male": {
            title: "에겐남",
            description: [
                "감성적인 성향, 신중한 표현보다는 행동파 타입",
                "조용히 옆에 있어주고 말 한마디로 위로를 건네주는 따스한 타입",
                "감성 충만하여 공감을 잘 함",
                "분위기 파악과 눈치가 빠름",
                "상대방의 말을 잘 들어주고 배려심 깊음",
                "연애할 때 섬세하고 자신보다 상대방을 항상 먼저 생각함",
                "먼저 대시하기 보다는 다가오는걸 선호",
                "갈등보다는 대화로 풀고 싶어하는 타입"
            ]
        },
        "teto_male": {
            title: "테토남",
            description: [
                "직진 성향, 적극적인 표현",
                "직진 사랑꾼 남자친구 타입",
                "할 말은 하고, 감정보단 해결이 먼저임",
                "책임감 있고 위기 상황에서 듬직하고 믿음직스러운 편임",
                "승부욕이 강하고 운동을 좋아함",
                "카리스마 있는 남자",
                "감정 교류보다는 '내 사람'이면 책임지고 챙김",
                "문제가 생기면 피하지 않고 부딪혀 해결하려고 함"
            ]
        },
        "egen_female": {
            title: "에겐녀",
            description: [
                "감성적인 성향, 신중한 표현",
                "신중한 츤데레 여자 타입",
                "공감력 최상의 평화주의자",
                "자존심 강하고 눈치가 빠름",
                "상대방의 감정을 빠르게 캐치하고 분위기를 잘 읽음",
                "갈등, 언쟁, 논쟁을 매우 싫어함",
                "상대와의 갈등보다는 회피, 무시를 택함",
                "배려심이 깊음",
                "연애에 있어서는 상대가 리드하는걸 선호",
                "연애할 때 감정소모가 심한 편"
            ]
        },
        "teto_female": {
            title: "테토녀",
            description: [
                "직진 성향, 적극적인 표현",
                "표현왕 여자친구 타입",
                "감정보다는 해야할 일에 먼저 집중",
                "결단력이 좋고 리더십이 있음",
                "말투는 단호하고 명확하며, 자신의 생각을 잘 표현함",
                "목소리가 크고 할 말을 확실하게 하는 타입",
                "뒷담화보다는 돌직구, 앞담화 날리는 타입",
                "연애에 있어서는 시간낭비 NO",
                "솔직하게 직진하는 타입",
                "집착을 매우 싫어함"
            ]
        }
    },
    questions: [
        {
            id: "q1",
            text: "1) 목소리가 큰 편이다.",
            options: [
                { value: "1", text: "매우그렇다", score: 1 },
                { value: "2", text: "약간그렇다", score: 2 },
                { value: "3", text: "약간아니다", score: 3 },
                { value: "4", text: "전혀아니다", score: 4 }
            ],
        },
        {
            id: "q2",
            text: "2) 원칙을 따르는 편이다.",
            options: [
                { value: "4", text: "매우그렇다", score: 4 },
                { value: "3", text: "약간그렇다", score: 3 },
                { value: "2", text: "약간아니다", score: 2 },
                { value: "1", text: "전혀아니다", score: 1 }
            ],
        },
        {
            id: "q3",
            text: "3) 혼자보다 친구들과 다니는 편이다.",
            options: [
                { value: "4", text: "매우그렇다", score: 4 },
                { value: "3", text: "약간그렇다", score: 3 },
                { value: "2", text: "약간아니다", score: 2 },
                { value: "1", text: "전혀아니다", score: 1 }
            ],
        },
        {
            id: "q4",
            text: "4) 연애할 때 리드하는 편이다.",
            options: [
                { value: "1", text: "매우그렇다", score: 1 },
                { value: "2", text: "약간그렇다", score: 2 },
                { value: "3", text: "약간아니다", score: 3 },
                { value: "4", text: "전혀아니다", score: 4 }
            ],
        },
        {
            id: "q5",
            text: "5) 거절을 잘 하는 편이다.",
            options: [
                { value: "1", text: "매우그렇다", score: 1 },
                { value: "2", text: "약간그렇다", score: 2 },
                { value: "3", text: "약간아니다", score: 3 },
                { value: "4", text: "전혀아니다", score: 4 }
            ],
        },
        {
            id: "q6",
            text: "6) 내 평균 식사량은?",
            options: [
                { value: "1", text: "2인분 이상", score: 1 },
                { value: "2", text: "1.5인분", score: 2 },
                { value: "3", text: "1인분", score: 3 },
                { value: "4", text: "0.5인분", score: 4 }
            ],
        },
        {
            id: "q7",
            text: "7) 운동을 하는 이유는?",
            options: [
                { value: "1", text: "근력향상", score: 1 },
                { value: "2", text: "체력증진", score: 2 },
                { value: "3", text: "몸매관리", score: 3 },
                { value: "4", text: "안함", score: 4 }
            ],
        },
        {
            id: "q8",
            text: "8) 가장 선호하는 취미는?",
            options: [
                { value: "1", text: "액티비티", score: 1 },
                { value: "2", text: "자기계발", score: 2 },
                { value: "3", text: "쇼핑", score: 3 },
                { value: "4", text: "만들기", score: 4 }
            ],
        },
        {
            id: "q9",
            text: "9) 총 코인 투자 금액은?",
            options: [
                { value: "1", text: "천만원대이상", score: 1 },
                { value: "2", text: "백만원대", score: 2 },
                { value: "3", text: "십만원대", score: 3 },
                { value: "4", text: "안 함", score: 4 }
            ],
        },
        {
            id: "q10",
            text: "10) 사랑스럽다는 말을 자주 듣는 편이다.",
            options: [
                { value: "4", text: "매우그렇다", score: 4 },
                { value: "3", text: "약간그렇다", score: 3 },
                { value: "2", text: "약간아니다", score: 2 },
                { value: "1", text: "전혀아니다", score: 1 }
            ],
        }
    ]
};