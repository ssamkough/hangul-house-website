type HangulLetter = 'ㄱ' | 'ㄲ' | 'ㄴ' | 'ㄷ' | 'ㄸ' | 'ㄹ' | 'ㅁ' | 'ㅂ' | 'ㅃ' | 'ㅅ' | 
'ㅆ' | 'ㅇ' | 'ㅈ' | 'ㅉ' | 'ㅊ' | 'ㅋ' | 'ㅌ' | 'ㅍ' | 'ㅎ' | 'ㅏ' | 'ㅐ' | 'ㅑ' | 'ㅒ' | 'ㅓ' | 'ㅔ' | 
'ㅕ' | 'ㅖ' | 'ㅗ' | 'ㅘ' | 'ㅙ' | 'ㅚ' | 'ㅛ' | 'ㅜ' | 'ㅝ' | 'ㅞ' | 'ㅟ' | 'ㅠ' | 'ㅡ' | 'ㅢ' | 'ㅣ';

interface HangulLetterDetail {
    letter: HangulLetter;
    name: string;
    nameInKorean: string;
    romaji: string;
    mnemonic?: string;
}

export const hanguAlphabet: HangulLetterDetail[] = [
    {
        letter: 'ㄱ',
        name: 'giyeok',
        nameInKorean: '기역',
        romaji: 'g/k',
        mnemonic: 'gun',
    },
    {
        letter: 'ㄲ',
        name: 'ssang giyeok',
        nameInKorean: '쌍기역',
        romaji: 'kk',
    },
    {
        letter: 'ㄴ',
        name: 'nieun',
        nameInKorean: '니은',
        romaji: 'n',
        mnemonic: 'nose',
    },
    {
        letter: 'ㄷ',
        name: 'digeut',
        nameInKorean: '디귿',
        romaji: 'd',
        mnemonic: 'door',
    },
    {
        letter: 'ㄸ',
        name: 'ssang digeut',
        nameInKorean: '쌍디귿',
        romaji: 'tt',
    },
    {
        letter: 'ㄹ',
        name: 'rieul',
        nameInKorean: '리을',
        romaji: 'r/l',
        mnemonic: 'rattlesnake',
    },
    {
        letter: 'ㅁ',
        name: 'mieum',
        nameInKorean: '미음',
        romaji: 'm',
        mnemonic: 'mouth',
    },
    {
        letter: 'ㅂ',
        name: 'bieup',
        nameInKorean: '비읍',
        romaji: 'b/p',
        mnemonic: 'bucket',
    },
    {
        letter: 'ㅃ',
        name: 'ssang bieup',
        nameInKorean: '쌍비읍',
        romaji: 'pp',
    },
    {
        letter: 'ㅅ',
        name: 'shiot',
        nameInKorean: '시옷',
        romaji: 's',
        mnemonic: 'summit',
    },
    {
        letter: 'ㅆ',
        name: 'ssang shiot',
        nameInKorean: '쌍시옷',
        romaji: 'ss',
    },
    {
        letter: 'ㅇ',
        name: 'ieung',
        nameInKorean: '이응',
        romaji: 'ng',
        mnemonic: 'nothing',
    },
    {
        letter: 'ㅈ',
        name: 'jieut',
        nameInKorean: '지읒',
        romaji: 'j/ch',
    },
    {
        letter: 'ㅉ',
        name: 'ssang jieut',
        nameInKorean: '쌍지읒',
        romaji: 'jj',
    },
    {
        letter: 'ㅊ',
        name: 'chieut',
        nameInKorean: '치읓',
        romaji: 'ch',
    },
    {
        letter: 'ㅋ',
        name: 'kieuk',
        nameInKorean: '키읔',
        romaji: 'k',
    },
    {
        letter: 'ㅌ',
        name: 'tieut',
        nameInKorean: '티읕',
        romaji: 't',
    },
    {
        letter: 'ㅍ',
        name: 'pieup',
        nameInKorean: '피읖',
        romaji: 'p',
        mnemonic: 'part 2',
    },
    {
        letter: 'ㅎ',
        name: 'hieut',
        nameInKorean: '히읕',
        romaji: 'h',
    },
    {
        letter: 'ㅏ',
        name: 'a',
        nameInKorean: '아',
        romaji: 'a',
    },
    {
        letter: 'ㅐ',
        name: 'ae',
        nameInKorean: '애',
        romaji: 'ae',
    },
    {
        letter: 'ㅑ',
        name: 'ya',
        nameInKorean: '야',
        romaji: 'ya',
    },
    {
        letter: 'ㅒ',
        name: 'yae',
        nameInKorean: '얘',
        romaji: 'yae',
    },
    {
        letter: 'ㅓ',
        name: 'eo',
        nameInKorean: '어',
        romaji: 'eo',
    },
    {
        letter: 'ㅔ',
        name: 'e',
        nameInKorean: '에',
        romaji: 'e',
    },
    {
        letter: 'ㅕ',
        name: 'yeo',
        nameInKorean: '여',
        romaji: 'yeo',
    },
    {
        letter: 'ㅖ',
        name: 'ye',
        nameInKorean: '예',
        romaji: 'ye',
    },
    {
        letter: 'ㅗ',
        name: 'o',
        nameInKorean: '오',
        romaji: 'o',
    },

    {
        letter: 'ㅘ',
        name: 'wa',
        nameInKorean: '와',
        romaji: 'wa',
    },
    {
        letter: 'ㅙ',
        name: 'wae',
        nameInKorean: '왜',
        romaji: 'wae',
    },
    {
        letter: 'ㅚ',
        name: 'oe',
        nameInKorean: '외',
        romaji: 'oe',
    },
    {
        letter: 'ㅛ',
        name: 'yo',
        nameInKorean: '요',
        romaji: 'yo',
    },
    {
        letter: 'ㅜ',
        name: 'u',
        nameInKorean: '우',
        romaji: 'u',
    },
    {
        letter: 'ㅝ',
        name: 'wo',
        nameInKorean: '워',
        romaji: 'wo',
    },
    {
        letter: 'ㅞ',
        name: 'we',
        nameInKorean: '웨',
        romaji: 'we',
    },
    {
        letter: 'ㅟ',
        name: 'wi',
        nameInKorean: '위',
        romaji: 'wi',
    },
    {
        letter: 'ㅠ',
        name: 'yu',
        nameInKorean: '유',
        romaji: 'yu',
    },
    {
        letter: 'ㅡ',
        name: 'eu',
        nameInKorean: '으',
        romaji: 'eu',
        mnemonic: 'brook'
    },
    {
        letter: 'ㅢ',
        name: 'ui',
        nameInKorean: '의',
        romaji: 'ui',
    },
    {
        letter: 'ㅣ',
        name: 'i',
        nameInKorean: '이',
        romaji: 'ee',
        mnemonic: 'tree'
    },
]