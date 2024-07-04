import { AzureData } from "./azure";

import { Reports } from "./reports";
import {
  Coverity,
  CoverityArbitrary,
  CoverityConnect,
  CoverityData,
} from "./coverity";
import { Blackduck, BlackDuckArbitrary, BlackduckData } from "./blackduck";

export interface Polaris {
  polaris: PolarisData;
  project?: ProjectData;
  azure?: AzureData;
  coverity?: CoverityArbitrary;
  blackduck?: BlackDuckArbitrary;
}

export interface PolarisData {
  triage?: string;
  accesstoken: string;
  serverUrl: string;
  application: { name: string };
  branch: Branch;
  project: { name: string };
  assessment: { types: string[]; mode?: string };
  prcomment?: PRComment;
  reports?: Reports;
}

export interface Branch {
  name?: string;
  parent: { name?: string };
}

export interface PRComment {
  enabled: boolean;
  severities: string[];
}

export interface ProjectData {
  directory?: string;
  source?: {
    archive?: string;
    preserveSymLinks?: boolean;
    excludes?: string[];
  };
}

export enum POLARIS_ASSESSMENT_MODES {
  CI = "CI",
  SOURCE_UPLOAD = "SOURCE_UPLOAD",
  SOURCEUPLOAD = "SOURCEUPLOAD",
}
