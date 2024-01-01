// burada json formatındaki verilerin total skip ve limit değeleri key ile verilir.
// tip tanımlaması
export type ResponseType<T> = {
    [key: string]: T
} & {
    total: number;
    skip: number;
    limit: number;
}