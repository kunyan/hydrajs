// Used for getting bulk rule data
export interface Skip {
    reason: string;
    rule_fqdn: string;
    details: string;
}

export interface Upload {
    client: string;
    uuid: string;
    size: number;
}

export interface StackNetwork {
    status: string;
    subnets: string[];
    name: string;
    'provider:physical_network': string;
    'router:external': boolean;
    tenant_id: string;
    admin_state_up: boolean;
    mtu: number;
    shared: boolean;
    'provider:network_type': string;
    id: string;
    'provider:segmentation_id'?: string;
}

export interface Metadata {
    insights_version: string;
    nova_client_api_version: string;
    stack_networks: StackNetwork[];
    coordinator_version: string;
    total_overcloud_networks: number;
    rhel_version: string;
    overcloud_networks: any[];
    rhosp_version: string;
    total_stack_networks: number;
    release: string;
    bios_information: BiosInformation;
    OpenStack_release: string;
    host_system_id: string;
}

export interface System {
    type: string;
    product: string;
    metadata: Metadata;
    system_id: string;
    display_name: string;
    status: string;
    blacklisted: boolean;
    links: Link[];
    ip: string;
    hostname: string;
    remote_branch?: any;
    role: string;
    remote_leaf?: any;
}

export interface Cause {
    stonith_enable: boolean;
    no_fence_device_nodes: string[];
}

export interface Report {
    system_id: string;
    rule_id: string;
    details: Details;
}

export interface Details {
    // hostname_mapping: any;
    affected_hosts: string[];
    error_key: string;
    cluster_name: string;
    cause: Cause;
    processes_listening_int: string[][];
    processes_listening_ext: string[][];
    processes_listening: string[][];
    processes_names: string[];
    vulnerable_package: string;
    vulnerable_packages: string[];
    running_kernel: string;
    vulnerable_kernel: string;
    package_name: string;
    mitigation_conf: string;
    sysctl_live_ack_limit: string;
    sysctl_live_ack_limit_line: string;
    sysctl_conf_ack_limit: string;
    sysctl_conf_ack_limit_line: string;
    mitigation_live: string;
    PACKAGE_NAMES: string[];
    VULNERABLE_PACKAGES: string[];
    SERVICE_ENABLED: string;
    processes_listening_ext_httpd: string[][];
    SERVICE_RUNNING: string;
}

export interface Link {
    system_id: string;
    type: string;
}

export interface BiosInformation {
    bios_revision: string;
    version: string;
    vendor: string;
    release_date: string;
}

export interface Archive {
    skips: Skip[];
    system: System;
    reports: Report[];
}

export interface InsightsResult {
    skips: Skip[];
    upload: Upload;
    system: System;
    reports: Report[];
    archives: Archive[];
}


export interface InsightsRule {
    description: string;
    tags: string[];
    reboot_required: boolean;
    reason: string;
    node_id: string;
    active: boolean;
    path: string;
    product_code: string;
    category: string;
    severity: string;
    plugin: string;
    generic: string;
    summary: string;
    error_key: string;
    publish_date: string;
    role: string;
    resolution: string;
    rule_id: string;
    more_info: string;
}

export interface RuleIds {
    ruleIds: string[];
}

