export interface IDTO<T> {
  id: string;
  keys: {[key: string]: T};
}