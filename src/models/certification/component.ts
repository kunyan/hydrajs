export interface IComponent {
    id?: string | number;
    name?: string;
    description?: string;
    optionType?: string;
    isSupplemental?: boolean;
    features?: IFeature[];
}

export interface IFeature {
    id?: string | number;
    name?: string;
    description?: string;
}
