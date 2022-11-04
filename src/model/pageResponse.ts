export interface PageResponse<T> {
    content: T[];
    number: number;
    numberOfElements: number;
    totalElements: number;
    totalPages: number;
}