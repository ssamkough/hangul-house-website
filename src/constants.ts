export type HangulLetter =
    | 'ㄱ'
    | 'ㄲ'
    | 'ㄴ'
    | 'ㄷ'
    | 'ㄸ'
    | 'ㄹ'
    | 'ㅁ'
    | 'ㅂ'
    | 'ㅃ'
    | 'ㅅ'
    | 'ㅆ'
    | 'ㅇ'
    | 'ㅈ'
    | 'ㅉ'
    | 'ㅊ'
    | 'ㅋ'
    | 'ㅌ'
    | 'ㅍ'
    | 'ㅎ'
    | 'ㅏ'
    | 'ㅐ'
    | 'ㅑ'
    | 'ㅒ'
    | 'ㅓ'
    | 'ㅔ'
    | 'ㅕ'
    | 'ㅖ'
    | 'ㅗ'
    | 'ㅘ'
    | 'ㅙ'
    | 'ㅚ'
    | 'ㅛ'
    | 'ㅜ'
    | 'ㅝ'
    | 'ㅞ'
    | 'ㅟ'
    | 'ㅠ'
    | 'ㅡ'
    | 'ㅢ'
    | 'ㅣ';

export interface HangulLetterDetail {
    letter: HangulLetter;
    name: string;
    nameInKorean: string;
    romaji: string;
    audioSrc: `audio/${HangulLetterDetail['romaji']}.mp3`;
    mnemonic?: string;
}

export const hangulAlphabet: HangulLetterDetail[] = [
    {
        letter: 'ㄱ',
        name: 'giyeok',
        nameInKorean: '기역',
        romaji: 'g/k',
        audioSrc: 'audio/gk.mp3',
        mnemonic: 'gun',
    },
    {
        letter: 'ㄲ',
        name: 'ssang giyeok',
        nameInKorean: '쌍기역',
        romaji: 'kk',
        audioSrc: 'audio/kk.mp3',
    },
    {
        letter: 'ㄴ',
        name: 'nieun',
        nameInKorean: '니은',
        romaji: 'n',
        audioSrc: 'audio/n.mp3',
        mnemonic: 'nose',
    },
    {
        letter: 'ㄷ',
        name: 'digeut',
        nameInKorean: '디귿',
        romaji: 'd',
        audioSrc: 'audio/d.mp3',
        mnemonic: 'door',
    },
    {
        letter: 'ㄸ',
        name: 'ssang digeut',
        nameInKorean: '쌍디귿',
        romaji: 'tt',
        audioSrc: 'audio/tt.mp3',
    },
    {
        letter: 'ㄹ',
        name: 'rieul',
        nameInKorean: '리을',
        romaji: 'r/l',
        audioSrc: 'audio/rl.mp3',
        mnemonic: 'rattlesnake',
    },
    {
        letter: 'ㅁ',
        name: 'mieum',
        nameInKorean: '미음',
        romaji: 'm',
        audioSrc: 'audio/m.mp3',
        mnemonic: 'mouth',
    },
    {
        letter: 'ㅂ',
        name: 'bieup',
        nameInKorean: '비읍',
        romaji: 'b/p',
        audioSrc: 'audio/bp.mp3',
        mnemonic: 'bucket',
    },
    {
        letter: 'ㅃ',
        name: 'ssang bieup',
        nameInKorean: '쌍비읍',
        romaji: 'pp',
        audioSrc: 'audio/pp.mp3',
    },
    {
        letter: 'ㅅ',
        name: 'shiot',
        nameInKorean: '시옷',
        romaji: 's',
        audioSrc: 'audio/s.mp3',
        mnemonic: 'summit',
    },
    {
        letter: 'ㅆ',
        name: 'ssang shiot',
        nameInKorean: '쌍시옷',
        romaji: 'ss',
        audioSrc: 'audio/ss.mp3',
    },
    {
        letter: 'ㅇ',
        name: 'ieung',
        nameInKorean: '이응',
        romaji: 'ng',
        audioSrc: 'audio/ng.mp3',
        mnemonic: 'nothing',
    },
    {
        letter: 'ㅈ',
        name: 'jieut',
        nameInKorean: '지읒',
        romaji: 'j/ch',
        audioSrc: 'audio/jch.mp3',
    },
    {
        letter: 'ㅉ',
        name: 'ssang jieut',
        nameInKorean: '쌍지읒',
        romaji: 'jj',
        audioSrc: 'audio/jj.mp3',
    },
    {
        letter: 'ㅊ',
        name: 'chieut',
        nameInKorean: '치읓',
        romaji: 'ch',
        audioSrc: 'audio/ch.mp3',
    },
    {
        letter: 'ㅋ',
        name: 'kieuk',
        nameInKorean: '키읔',
        romaji: 'k',
        audioSrc: 'audio/k.mp3',
    },
    {
        letter: 'ㅌ',
        name: 'tieut',
        nameInKorean: '티읕',
        romaji: 't',
        audioSrc: 'audio/t.mp3',
    },
    {
        letter: 'ㅍ',
        name: 'pieup',
        nameInKorean: '피읖',
        romaji: 'p',
        audioSrc: 'audio/p.mp3',
        mnemonic: 'part 2',
    },
    {
        letter: 'ㅎ',
        name: 'hieut',
        nameInKorean: '히읕',
        romaji: 'h',
        audioSrc: 'audio/h.mp3',
    },
    {
        letter: 'ㅏ',
        name: 'a',
        nameInKorean: '아',
        romaji: 'a',
        audioSrc: 'audio/a.mp3',
    },
    {
        letter: 'ㅐ',
        name: 'ae',
        nameInKorean: '애',
        romaji: 'ae',
        audioSrc: 'audio/ae.mp3',
    },
    {
        letter: 'ㅑ',
        name: 'ya',
        nameInKorean: '야',
        romaji: 'ya',
        audioSrc: 'audio/ya.mp3',
    },
    {
        letter: 'ㅒ',
        name: 'yae',
        nameInKorean: '얘',
        romaji: 'yae',
        audioSrc: 'audio/yae.mp3',
    },
    {
        letter: 'ㅓ',
        name: 'eo',
        nameInKorean: '어',
        romaji: 'eo',
        audioSrc: 'audio/eo.mp3',
    },
    {
        letter: 'ㅔ',
        name: 'e',
        nameInKorean: '에',
        romaji: 'e',
        audioSrc: 'audio/e.mp3',
    },
    {
        letter: 'ㅕ',
        name: 'yeo',
        nameInKorean: '여',
        romaji: 'yeo',
        audioSrc: 'audio/yeo.mp3',
    },
    {
        letter: 'ㅖ',
        name: 'ye',
        nameInKorean: '예',
        romaji: 'ye',
        audioSrc: 'audio/ye.mp3',
    },
    {
        letter: 'ㅗ',
        name: 'o',
        nameInKorean: '오',
        romaji: 'o',
        audioSrc: 'audio/o.mp3',
        mnemonic: 'over',
    },

    {
        letter: 'ㅘ',
        name: 'wa',
        nameInKorean: '와',
        romaji: 'wa',
        audioSrc: 'audio/wa.mp3',
    },
    {
        letter: 'ㅙ',
        name: 'wae',
        nameInKorean: '왜',
        romaji: 'wae',
        audioSrc: 'audio/wae.mp3',
    },
    {
        letter: 'ㅚ',
        name: 'oe',
        nameInKorean: '외',
        romaji: 'oe',
        audioSrc: 'audio/oe.mp3',
    },
    {
        letter: 'ㅛ',
        name: 'yo',
        nameInKorean: '요',
        romaji: 'yo',
        audioSrc: 'audio/yo.mp3',
    },
    {
        letter: 'ㅜ',
        name: 'u',
        nameInKorean: '우',
        romaji: 'u',
        audioSrc: 'audio/u.mp3',
        mnemonic: 'under',
    },
    {
        letter: 'ㅝ',
        name: 'wo',
        nameInKorean: '워',
        romaji: 'wo',
        audioSrc: 'audio/wo.mp3',
    },
    {
        letter: 'ㅞ',
        name: 'we',
        nameInKorean: '웨',
        romaji: 'we',
        audioSrc: 'audio/we.mp3',
    },
    {
        letter: 'ㅟ',
        name: 'wi',
        nameInKorean: '위',
        romaji: 'wi',
        audioSrc: 'audio/wi.mp3',
    },
    {
        letter: 'ㅠ',
        name: 'yu',
        nameInKorean: '유',
        romaji: 'yu',
        audioSrc: 'audio/yu.mp3',
    },
    {
        letter: 'ㅡ',
        name: 'oo',
        nameInKorean: '으',
        romaji: 'oo',
        audioSrc: 'audio/oo.mp3',
        mnemonic: 'brook',
    },
    {
        letter: 'ㅢ',
        name: 'ui',
        nameInKorean: '의',
        romaji: 'ui',
        audioSrc: 'audio/ui.mp3',
    },
    {
        letter: 'ㅣ',
        name: 'i',
        nameInKorean: '이',
        romaji: 'ee',
        audioSrc: 'audio/ee.mp3',
        mnemonic: 'tree',
    },
];
