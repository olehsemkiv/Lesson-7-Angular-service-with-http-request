export interface blogElementRequest {
    title: string;
    text: string;
    author: string;
}

export interface blogElementResponse extends blogElementRequest {
    id: number;
}