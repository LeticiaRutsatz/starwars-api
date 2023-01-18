interface Personagem {
    name: string;
    birth_year: string;
    height: string;
    mass: number;
}


interface respostaAPI {
    success: number,
    data: [],
}

export type {Personagem, respostaAPI} 