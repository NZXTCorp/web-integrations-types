type NumberOrNull = number | null;

type Celsius = number | null;
type Megahertz = number | null;
/* Revolutions per minute */
type Rpm = number | null;
type Watts = number | null;
/* 1024 * 1024 bytes */
type Mebibytes = number | null;

declare global {
  interface Window {
    nzxt?: {
      v1?: {
        /**
         * If set, NZXT CAM will call this function once a second with updated monitoring data.
         */
        onMonitoringDataUpdate?: (data: MonitoringData) => void;
      };
    };
  }
}

export interface MonitoringData {
  cpus: Cpu[];
  gpus: Gpu[];
  ram: Ram;
  kraken: Kraken;
}

export interface Cpu {
  name: string;
  manufacturer: string;
  codeName: string;
  socket: string;

  /** Processor load (0..1) */
  load: NumberOrNull;

  numCores: NumberOrNull;
  numThreads: NumberOrNull;

  temperature: Celsius;
  minTemperature: Celsius;
  maxTemperature: Celsius;

  frequency: Megahertz;
  minFrequency: Megahertz;
  maxFrequency: Megahertz;
  stockFrequency: Megahertz;

  fanSpeed: Rpm;
  minFanSpeed: Rpm;
  maxFanSpeed: Rpm;

  /** Thermal Design Power */
  tdp: Watts;

  power: Watts;
}

export interface Gpu {
  name: string;

  /** GPU load (0..1) */
  load: NumberOrNull;

  temperature: Celsius;
  minTemperature: Celsius;
  maxTemperature: Celsius;

  frequency: Megahertz;
  minFrequency: Megahertz;
  maxFrequency: Megahertz;
  stockFrequency: Megahertz;

  fanSpeed: Rpm;
  minFanSpeed: Rpm;
  maxFanSpeed: Rpm;

  power: Watts;
}

export interface Ram {
  totalSize: Mebibytes;
  inUse: Mebibytes;
  modules: RamModule[];
}

export interface RamModule {
  /** RAM kind (e.g. DDR5) */
  kind: string;
  size: Mebibytes;

  /** Manufacturer and model name */
  model: string;

  frequency: Megahertz;
  stockFrequency: Megahertz;
}

export interface Kraken {
  liquidTemperature: Celsius;
}
