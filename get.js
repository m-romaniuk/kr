const fs = require('fs').promises;

async function gtranslate_tts(text, lang) {
    let data = [[[
        'jQ1olc',
        JSON.stringify([
            text,
            lang,
            null,
            "null",
        ]),
        null,
        'generic',
    ]]];
    let response = await fetch('https://translate.google.com/_/TranslateWebserverUi/data/batchexecute', {
        method: "POST",
        body: new URLSearchParams([["f.req", JSON.stringify(data)]]),
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    let resptext = await response.text();
    let mp3b64 = resptext.match(/\/\/OE[^\\]+/);
    if (!mp3b64) {
        throw new Error("mp3 not found in response");
    }
    return Buffer.from(mp3b64[0], 'base64');
}

async function main() {
    /* Demo of how to use gtranslate_tts */
    // let res = await gtranslate_tts("hello world", "en");
    // await fs.writeFile("test.mp3", res);
}

const CATEGORIES = [
    {
        name: "days",
        displayName: "all about days",
        words: [
            {
                ko: "월요일",
                en: "monday",
            },
            {
                ko: "화요일",
                en: "tuesday",
            },
            {
                ko: "수요일",
                en: "wednesday",
            },
            {
                ko: "목요일",
                en: "thursday",
            },
            {
                ko: "금요일",
                en: "friday",
            },
            {
                ko: "토요일",
                en: "saturday",
            },
            {
                ko: "일요일",
                en: "sunday",
            },
            {
                ko: "어제",
                en: "yesterday",
            },
            {
                ko: "내일",
                en: "tomorrow",
            },
        ],
    },
    {
        name: "numbersNative",
        words: [],
    },
    {
        name: "numbersSino",
        words: [],
    },
    {
        name: "months",
        words: [],
    },
    {
        name: "other",
        words: [
            {
                ko: "아버지",
                en: "father",
            },
            {
                ko: "어머니",
                en: "mother",
            },
            {
                ko: "이",
                en: "teeth",
            },
            // {
            //     ko: "이빨",
            //     en: "tooth",
            // },
            {
                ko: "아이",
                en: "child",
            },
            {
                ko: "오이",
                en: "cucumber",
            },
            {
                ko: "나무",
                en: "tree",
            },
            {
                ko: "고기",
                en: "meat",
            },
            {
                ko: ["소", "암소"],
                en: "cow",
            },
            {
                ko: "나이",
                en: "age",
            },
            {
                ko: "가수",
                en: "singer",
            },
            {
                ko: "우유",
                en: "milk",
            },
            {
                ko: ["여기", "여기요"],
                en: "here",
            },
            {
                ko: "야구",
                en: "baseball",
            },
            {
                ko: "아니요",
                en: "no",
            },
            {
                ko: "여우",
                en: "fox",
            },
            {
                ko: ["가다", "가기", "가요"],
                en: "go",
            },
            {
                ko: "머리",
                en: "head, hair",
            },
            {
                ko: "구두",
                en: "shoes (elegant)",
            },
            {
                ko: "지도",
                en: "map",
            },
            {
                ko: "바다",
                en: "sea, ocean",
            },
            {
                ko: "여성",
                en: "woman",
            },
            {
                ko: "물",
                en: "water",
            },
            {
                ko: "집",
                en: "house",
            },
            {
                ko: "미국",
                en: "USA",
            },
    
            {
                ko: ["남자", "남성"],
                en: "man",
            },
            {
                ko: "안경",
                en: "eyeglasses",
            },
            {
                ko: "옷",
                en: "clothes",
            },
            {
                ko: "노래",
                en: "song",
            },
            {
                ko: ["아내", "부인"],
                en: "wife",
            },
            {
                ko: "가게",
                en: "store",
            },
            {
                ko: "시계",
                en: "clock",
            },
            {
                ko: "",
                en: "talk?",
            },
            {
                ko: "이야기",
                en: "story",
            },
            {
                ko: "지하철",
                en: "subway",
            },
            {
                ko: "표",
                en: "ticket",
            },
            {
                ko: "코",
                en: "nose",
            },
            {
                ko: "한국",
                en: "Korea",
            },
            {
                ko: "주차장",
                en: "parking lot",
            },
            {
                ko: "국",
                en: "soup",
            },
            {
                ko: ["부엌", "주방"],
                en: "kitchen",
            },
            {
                ko: "빗",
                en: "comb",
            },
            {
                ko: "빛",
                en: "ray of light",
            },
            {
                ko: "월",
                en: "month",
                notsure: true,
            },
            {
                ko: "잎",
                en: "leaf",
            },
            {
                ko: "사과",
                en: "apple",
            },
            {
                ko: "돼지",
                en: "pig",
            },
            {
                ko: "병원",
                en: "hospital",
            },
            {
                ko: "외국인",
                en: "foreigner",
            },
            {
                ko: "귀",
                en: "ear",
            },
            {
                ko: "의자",
                en: "chair",
            },
            {
                ko: "빵",
                en: "bread",
            },
            {
                ko: "어깨",
                en: "shoulder",
            },
            {
                ko: "땀",
                en: "sweat",
            },
            {
                ko: "토끼",
                en: "rabbit",
            },
            {
                ko: ["비싸요", "비싸게"],
                en: "expensive",
            },
            {
                ko: ["짠", "짜다", "짜요"],
                en: "salty",
            },
            {
                ko: ["밖", "밖의"],
                en: "outside",
            },
            {
                ko: "",
                en: "gone, went",
            },
            {
                ko: "닭",
                en: "chicken",
            },
            {
                ko: "값",
                en: "price, value",
            },
            {
                ko: "앉다",
                en: "sit",
            },
            {
                ko: "꽃",
                en: "flower",
            },
            {
                ko: "새",
                en: "bird",
            },
            {
                ko: "개",
                en: "dog",
            },
            {
                ko: "아기",
                en: "baby?",
                notsure: true,
            },
            {
                ko: "계란",
                en: "egg",
            },
            {
                ko: "책",
                en: "book",
            },
            {
                ko: "",
                en: "table",
            },
            {
                ko: "학생",
                en: "student",
            },
            {
                ko: "컴퓨터",
                en: "computer",
            },
            {
                ko: "텔레비전",
                en: "television",
            },
            {
                ko: "테니스",
                en: "tennis",
            },
            {
                ko: "자",
                en: "ruler",
            },
            {
                ko: "차",
                en: "tea, car?",
                notsure: true,
            },
            {
                ko: "발",
                en: "foot",
            },
            {
                ko: "팔",
                en: "arm?",
                notsure: true,
            },
            {
                ko: "기",
                en: "energy",
                comment: "good energy from chinese?",
            },
            {
                ko: "키",
                en: "rudder?",
                notsure: true,
            },
            {
                ko: "포도주",
                en: "wine",
            },
            {
                ko: "앞",
                en: "front",
            },
            {
                ko: "끝",
                en: "end",
            },
            {
                ko: "사랑",
                en: "love",
            },
            {
                ko: "사람",
                en: "person",
            },
            {
                ko: "커피",
                en: "coffee",
            },
            {
                ko: "코피",
                en: "nose blood",
            },
            {
                ko: "가방",
                en: "bag?",
                notsure: true,
            },
            {
                ko: "장미",
                en: "rose",
            },
        ],
    },
];

async function download(word, lang, category, i, subi) {
    const path = `${category}-${i.toString().padStart(4,"0")}${subi === null ? "" : "."+subi}-${lang}.mp3`;
    try {
        await fs.access(path, fs.constants.F_OK);
        // console.log(`ok - ${path}`);
        return;
    } catch {}

    for (let i = 0; i < 5; i++) {
        try {
            let res = await gtranslate_tts(word, lang);
            await fs.writeFile(path, res);
            return;
        } catch {}
    }
    console.log(`FAILED - ${path}`);
}

async function downloadAll() {
    for (let i = 0; i < CATEGORIES.length; i++) {
        const category = CATEGORIES[i];
        for (let j = 0; j < category.words.length; j++) {
            const ko = category.words[j].ko;
            const en = category.words[j].en;

            if (Array.isArray(ko)) {
                for (let k = 0; k < ko.length; k++) {
                    download(ko[k], "ko", category.name, j, k);

                }
            } else {
                download(ko, "ko", category.name, j, null);
            }

            download(en, "en", category.name, j, null);
        }
    }
}

// main();
downloadAll();
