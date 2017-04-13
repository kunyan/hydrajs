export interface ITestClass {
    id?: string | number;
    catalogName?: string;
    support?: boolean;
    productType?: string;
    category?: ICategory;
}

export interface ICategory {
    id?: string | number;
    name?: string;
    sequenceOrder?: number;
}
