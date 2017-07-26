export interface IComponentBase {
    id?: string | number;
    name?: string;
    description?: string;
    optionType?: string;
    isSupplemental?: boolean;
}

export interface IFeatureBase {
    id?: string | number;
    name?: string;
    description?: string;
}

export interface IComponent extends IComponentBase {
    features?: IComponentFeature[];
}

export interface IComponentFeature extends IFeatureBase {}
