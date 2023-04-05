/**
 * Subscribes to NZXT CAM monitoring data with an interval of 1000ms.
 * @param callback - A function to be called on each update.
 * @returns A function that can be called to end the subscription.
 */
export function onMonitoringDataUpdate(callback: (data: PC) => void) {
  if (typeof window !== 'undefined') {
    window.nzxt = {
      v1: {
        monitoringDataUpdate: callback,
      },
    }

    return () => {
      window.nzxt.v1.monitoringDataUpdate = () => {}
    }
  }
  return () => {}
}

type NumberOrNull = number | null

export interface PC {
  /** Array of CPUs */
  cpus: CPU[]
  /** Array of GPUs */
  gpus: GPU[]
  /** RAM and module data */
  ram: RAM
}
export interface CPU {
  /** Manufacturer name */
  manufacturer: string
  /** CPU name */
  name: string
  /** CPU code name */
  codeName: string
  /** Processor Socket */
  package: string
  /** Thermal Design Power in Watts */
  tdp: NumberOrNull
  /** Number of cores */
  cores: NumberOrNull
  /** Number of threads */
  threads: NumberOrNull
  /** Temperature in celsius */
  temperature: NumberOrNull
  /** Miniumum temperature in celsius */
  minTemperature: NumberOrNull
  /** Maximum temperature in celsius */
  maxTemperature: NumberOrNull
  /** Processor frequency when at stock settings in MHz */
  stockFrequency: NumberOrNull
  /** Current processor frequency in MHz */
  frequency: NumberOrNull
  /** Minimum processor frequency in MHz */
  minFrequency: NumberOrNull
  /** Maximum processor frequency in MHz */
  maxFrequency: NumberOrNull
  /** Fan speed in RPM */
  fanSpeed: NumberOrNull
  /** Minimum fan speed in RPM */
  minFanSpeed: NumberOrNull
  /** Maximum fan speed in RPM */
  maxFanSpeed: NumberOrNull
  /** Load on the processor as a percentage from 0-1 */
  load: NumberOrNull
  /** Data on each processor core */
  coreInfo: CpuCore[]
}

export interface CpuCore {
  /** Core frequency in MHz */
  frequency: NumberOrNull
  /** Core temperature in Celsius */
  temperature: NumberOrNull
  /** Number of threads on this core */
  threads: NumberOrNull
  /** Core thread data */
  threadInfo: CpuThread[]
}

export interface CpuThread {
  /** Thread load as a percentage 0-1 */
  load: NumberOrNull
}

export interface GPU {
  name: string
  /** Thermal Design Power in Watts */
  tdp: NumberOrNull
  /** Temperature in Celsius */
  temperature: NumberOrNull
  /** Minimum temperature in Celsius */
  minTemperature: NumberOrNull
  /** Maximum temperature in Celsius */
  maxTemperature: NumberOrNull
  /** Frequency when at stock settings in MHz */
  stockFrequency: NumberOrNull
  /** Current frequency in MHz */
  frequency: NumberOrNull
  /** Minimum frequency in MHz */
  minFrequency: NumberOrNull
  /** Maximum frequency in MHz */
  maxFrequency: NumberOrNull
  /** Fan speed in RPM */
  fanSpeed: NumberOrNull
  /** Minimum fan speed in RPM */
  minFanSpeed: NumberOrNull
  /** Maximum fan speed in RPM */
  maxFanSpeed: NumberOrNull
  /** Load as a percentage 0-1 */
  load: NumberOrNull
  /** Memory frequency in MHz */
  memoryFrequency: NumberOrNull
  /** Minimum memory frequency in MHz */
  minMemoryFrequency: NumberOrNull
  /** Maximum memory frequency in MHz */
  maxMemoryFrequency: NumberOrNull
  /** Core voltage in millivolts */
  coreVoltage: NumberOrNull
  /** Minimum core voltage in millivolts */
  minCoreVoltage: NumberOrNull
  /** Maximum core voltage in millivolts */
  maxCoreVoltage: NumberOrNull
}

export interface RAM {
  /** Size measured in MB */
  size: NumberOrNull
  /** Used memory measured in MB */
  used: NumberOrNull
  /** List of RAM modules */
  modules: RamModule[]
}

export interface RamModule {
  /** Manufacturer and name of the RAM module */
  model: string
  /** Dynamic Random-Access Memory  */
  moduleType: string
  /** Module size in MB */
  size: NumberOrNull
  /** Memory frequency in MHz */
  stockFrequency: NumberOrNull
  /** Current memory frequency in MHz */
  frequency: NumberOrNull
}

declare global {
  interface Window {
    nzxt: {
      v1: {
        /**
         * Subscribes to NZXT CAM monitoring data with an interval of 1000ms.
         * @param callback - A function to be called on each update.
         */
        monitoringDataUpdate: (data: PC) => void
      }
    }
  }
}
