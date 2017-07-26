import { IComponentBase, IFeatureBase } from './component';
import { IUser }                        from '../user';

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

export interface ITestPlanFeature extends IFeatureBase {
    testRunMapping?: string | number;
    status?: string;
    componentLeverage?: number;
    testRunLeverage?: number;
    confirmedBy?: string | IUser;
}

export interface ITestPlan extends IComponentBase {
    features: ITestPlanFeature[];
}

export interface IResultMeta {
    uploader?: string | IUser;
    uploadTime?: string;
    reviewed?: boolean;
    reviewer?: string | IUser;
    reviewTime?: string;
}

export interface ITestResult {
    name: string;
    result: string;
}

export interface ITest {
    id: number;
    result: string;
    hardwareUri?: ITestResult;
    runtimeLog?: ITestResult;
    extraFiles?: ITestResult[];
    subTests?: ITestResult[];
}

export interface ITestRun {
    runNumber?: number;
    tests: ITest[];
}

export interface ITestData {
    id: number;
    title: string;
    kernelInfo?: string;
    resultMeta?: IResultMeta;
    testRuns?: ITestRun[];
}