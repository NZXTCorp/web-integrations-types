/**
 * Listen to monitoring data updates from NZXT CAM
 * @param callback - Callback to retrieve data on update
 * @returns Function to end listening to monitoring data updates
 */
export function onMonitoringDataUpdate(callback: (data: Pc) => void) {
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

export interface Pc {
  cpus: Array<Cpu>
  gpus: Array<Gpu>
  ram: Ram
}

export interface Cpu {
  id: number
  manufacturer: string
  name: string
  codeName: string
  package: string
  tdpInWatts: NumberOrNull
  cores: NumberOrNull
  numberOfThreads: NumberOrNull
  temperatureInCelcius: NumberOrNull
  minTemperatureInCelcius: NumberOrNull
  maxTemperatureInCelsius: NumberOrNull
  stockFrequencyInMHz: NumberOrNull
  frequencyInMHz: NumberOrNull
  minFrequencyInMHz: NumberOrNull
  maxFrequencyInMHz: NumberOrNull
  fanSpeedInRPM: NumberOrNull
  minFanSpeedInRPM: NumberOrNull
  maxFanSpeedInRPM: NumberOrNull
  loadPercentage: NumberOrNull
}

export interface CpuCore {
  frequencyInMHz: NumberOrNull
  temperatureInCelsius: NumberOrNull
  numberOfThreads: NumberOrNull
  threadInfo: Array<CpuThread>
}

export interface CpuThread {
  load: NumberOrNull
}

export interface Gpu {
  id: string
  name: string
  tdpInWatts: NumberOrNull
  temperatureInCelsius: NumberOrNull
  minTemperatureInCelsius: NumberOrNull
  maxTemperatureInCelsius: NumberOrNull
  stockFrequencyInMHz: NumberOrNull
  frequencyInMHz: NumberOrNull
  minFrequencyInMHz: NumberOrNull
  maxFrequencyInMHz: NumberOrNull
  fanSpeedInRPM: NumberOrNull
  minFanSpeedInRPM: NumberOrNull
  maxFanSpeedInRPM: NumberOrNull
  loadPercentage: NumberOrNull
  memoryFrequencyInMHz: NumberOrNull
  minMemoryFrequencyInMHz: NumberOrNull
  maxMemoryFrequencyInMHz: NumberOrNull
  coreVoltageInMillivolts: NumberOrNull
  minCoreVoltageInMillivolts: NumberOrNull
  maxCoreVoltageInMillivolts: NumberOrNull
}

export interface PowerLimitWatts {
  value: number
  kind: typeof POWER_LIMIT_TYPE_WATTS
}

export interface PowerLimitPercentage {
  value: number
  kind: typeof POWER_LIMIT_TYPE_PERCENTAGE
}

export type PowerLimit = PowerLimitWatts | PowerLimitPercentage

export const POWER_LIMIT_TYPE_PERCENTAGE = 'percentage'

export const POWER_LIMIT_TYPE_WATTS = 'watts'

export interface Ram {
  size: NumberOrNull
  used: NumberOrNull
  modules: Array<RamModule>
}

export interface RamModule {
  model: string
  moduleType: string
  size: NumberOrNull
  stockFrequency: NumberOrNull
  frequency: NumberOrNull
  casLatency: NumberOrNull
  rasToCASDelay: NumberOrNull
  rasPrecharge: NumberOrNull
  tRAS: NumberOrNull
}

declare global {
  interface Window {
    nzxt: {
      v1: {
        monitoringDataUpdate: (data: Pc) => void
      }
    }
  }
}
