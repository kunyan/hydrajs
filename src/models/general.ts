export type Fields<T> = Array<keyof T>;
// Used for passing extra header param
export interface IHeaderParamOption {
    key: string;
    value: string;
}