import { AzureData } from "./azure";
import { Environment } from "./blackduck";
import exp from "constants";

export interface Coverity {
  coverity: CoverityConnect;
  project?: ProjectData;
  azure?: AzureData;
  environment?: Environment;
}

export interface ProjectData {
  repository?: { name: string };
  branch?: { name: string };
  directory?: string;
}

export interface AutomationData {
  prcomment?: boolean;
}

export interface CoverityConnect extends CoverityArbitrary {
  connect: CoverityData;
  install?: { directory: string };
  automation?: AutomationData;
  network?: NetworkAirGap;
  local?: boolean;
  version?: string;
}

export interface CoverityArbitrary {
  build?: Command;
  clean?: Command;
  config?: Config;
  args?: string;
}

export interface CoverityData {
  user: { name: string; password: string };
  url: string;
  project: { name: string };
  stream: { name: string };
  policy?: { view: string };
}

export interface NetworkAirGap {
  airGap: boolean;
}

export interface Command {
  command: string;
}

export interface Config {
  path: string;
}
