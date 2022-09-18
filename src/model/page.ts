export interface Page<T> {
  content: T[];
  number: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
}