export interface Version {
    detected: number;
    certified: number;
}

export interface PackageVersion {
    detected: number;
    certified: number;
}

export interface Osp {
    version: Version;
    package_version: PackageVersion;
}

export interface BackupCompressionAlgorithm {
    detected: string;
    certified?: string;
}

export interface BackupFileSize {
    detected: string;
    certified?: string;
}

export interface EnabledBackends {
    detected: string;
    certified?: string;
}

export interface CinderConfig {
    backup_compression_algorithm: BackupCompressionAlgorithm;
    backup_file_size: BackupFileSize;
    enabled_backends: EnabledBackends;
}

export interface Deviation {
    osp: Osp;
    cinder_config: CinderConfig;
}

export interface Cert {
    id: number;
    name: string;
    cert_type: string;
    supported: boolean;
    rh: boolean;
    deviation: Deviation;
}

export interface Kernel {
    version: string;
    supported: boolean;
}

export interface OperatingSystem {
    ga: string;
    eop1: string;
    eop2: string;
    eop3: string;
    eol: string;
    version: string;
    kernel: Kernel;
}

export interface NonRedhatPackage {
    name: string;
    buildhost: string;
}

export interface Osp2 {
    ga: string;
    eop1: string;
    eop2: string;
    eop3?: string;
    eol: string;
    version: string;
}

export interface Rhv {
    ga: string;
    eop1: string;
    eop2: string;
    eop3?: string;
    eol: string;
    version: string;
}

export interface Rhvh {
    version: string;
}

export interface VirtualizationProducts {
    osp: Osp2;
    rhv: Rhv;
    rhvh: Rhvh;
}

export interface KyceResult {
    certs: Cert[];
    operating_system: OperatingSystem;
    non_redhat_packages: NonRedhatPackage[];
    virtualization_products: VirtualizationProducts;
}