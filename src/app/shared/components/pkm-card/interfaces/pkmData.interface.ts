interface IPkmName {
    english: string,
    japanese: string,
    chinese: string,
    french: string
}

interface IPkmBase {
    "HP": number,
    "Attack": number,
    "Defense": number,
    "Sp. Attack": number,
    "Sp. Defense": number,
    "Speed": number
}

export interface IPkmData {
    id: number,
    name: IPkmName,
    type: string[],
    base: IPkmBase
}