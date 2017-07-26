import { ICase } from '../case';
import { IVendorProduct } from './vendorProduct';


export interface ICertificationBase {
    kase?: ICase;
    portalId?: string | number;
    vendorProduct?: IVendorProduct;
    redhatProduct?: IRedHatProduct;
}

export interface IHardwareCertification extends ICertificationBase {
    summaryStatus?: string;
    detailStatus?: string;
    public?: boolean;
    certType?: string;
    classification?: string;
    policyGuide?: IPolicyGuide;
}

export interface IOpenStackCertification<T> extends ICertificationBase {
    version?: string;
    component?: string;
    packageFormat?: string;
    sourceCodeUrl?: string;
    blueprintUrl?: string;
    installGuide?: string;
    usersGuide?: string;
    configuration?: string;
    backendHostname?: string;
    appOnRHEL?: string;
    appOnOpenStack?: string;
    shipHardware?: string;
    componentSpecificInfo?: T;
}

export interface IProtocol {
    protocolName?: string;
    featureIdList?: number[];
}

export interface IOpenStackBlockStorageComponent {
    protocolFeatureMap?: IProtocol[];
    releaseModel?: string;
    implementedApis?: number[];
    upstreamAvailableDate?: string;
    downloadUrl?: string;
    supportedServices?: number[];
    supportedDriver?: string;
}

export interface IOpenStackDataProcessingComponent {
    releaseModel?: string;
    implementedApis?: number[];
    upstreamAvailableDate?: string;
    downloadUrl?: string;
    supportClouderaPlugin?: boolean;
    supportHdpPlugin?: boolean;
    supportMapRPlugin?: boolean;
    nodeGroupTemplate?: string;
    versionRecertification?: string;
    securityGroupApiConsumption?: string;
}

export interface IOpenStackManagementComponent {

}

export interface IOpenStackNetworkingComponent {
    protocolFeatureMap?: IProtocol[];
    releaseModel?: string;
    implementedApis?: number[];
    upstreamAvailableDate?: string;
    downloadUrl?: string;
    pluginType?: string;
    networkIsolationTechnology?: string;
    includedComponents?: string;
    componentOfOvsRefImpl?: string;
    answersOfOvsUserspaceQuestion?: string;
    answersOfOvsKernelQuestion?: string;
    isSupportLbaas?: boolean;
    isSupportVpnaas?: boolean;
    isSupportFwaas?: boolean;
    advancedSolutionDesc?: string;
    advancedSolutionRequiredHardware?: string;
    isAllComponentsFullyHa?: boolean;
    recommendedHaDeployDesc?: string;
    physicalHardwareSwitchesRefConfig?: string;
}

export interface IOpenStackObjectStorageComponent {
    releaseModel?: string;
    implementedApis?: number[];
    upstreamAvailableDate?: string;
    downloadUrl?: string;
}

export interface IOpenStackOtherComponent {

}

export interface IOpenStackVNFComponent {
    hasToolOnboardVnf: boolean;
    isRequireUnderlyingChange: boolean;
    dataPath: string;
    isDependonSpecificHardware: boolean;
    isApplyTunedProfile: boolean;
    vSwitchesHasTestedOn: string;
    networkInterfacesAndConnectionDesc: string;
}

export interface IOpenStackManoComponent {

}

export interface IOpenStackFileStorageComponent {
    releaseModel?: string;
    upstreamAvailableDate?: string;
    downloadUrl?: string;
    protocolFeatureMap?: IProtocol[];
}

export type IOpenStackComponent = IOpenStackBlockStorageComponent
    | IOpenStackDataProcessingComponent
    | IOpenStackFileStorageComponent
    | IOpenStackManagementComponent
    | IOpenStackManoComponent
    | IOpenStackNetworkingComponent
    | IOpenStackObjectStorageComponent
    | IOpenStackOtherComponent
    | IOpenStackVNFComponent;


export interface IRedHatProduct {
    name?: string;
    version?: string;
    platform?: string;
    baseRHELVersion?: string;
}

export interface IPolicyGuide {
    name?: string;
    version?: string;
    url?: string;
}

export type ICertification = IHardwareCertification | IOpenStackCertification<IOpenStackComponent>;
