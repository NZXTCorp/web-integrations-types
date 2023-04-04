## Web Integrations Monitoring Types

NZXT CAM is a hardware monitoring software that provides users with information on the performance of various hardware components in their PC, including CPUs, GPUs, and RAM.

In Web Integration Mode on Kraken devices, CAM provides monitoring data to the web application through the browser every second. This data can be used to create custom visualizations with monitoring information on Kraken devices.

## Description

Typed monitoring data for NZXT Web Integrations

## Installation

```bash
$ npm install @nzxt/web-integrations@latest
```

## Examples

```ts
import { PC } from '@nzxt/web-integrations/v1'

if (typeof window !== 'undefined') {
  window.nzxt = {
      v1: {
        onMonitoringDataUpdate: (data: PC) => {
          ...
        }
      }
  }
}
```

```ts
import { onMonitoringDataUpdate } from '@nzxt/web-integrations/v1'

const end = onMonitoringDataUpdate((pc) => {
  ...
})

end()
```

```ts
// useMonitoringData.ts
import { useState, useEffect } from 'react'
import { onMonitoringDataUpdate, PC } from '@nzxt/web-integrations/v1'

export const useMonitoringData = () => {
  const [monitoringData, setMonitoringData] = useState<PC | null>()

  useEffect(() => {
    const destroy = onMonitoringDataUpdate(setMonitoringData)
    return () => {
      destroy()
    }
  }, [])

  return monitoringData
}

// app.tsx
import { useMonitoringData } from './useMonitoringData'
const { cpus, gpus, ram } = useMonitoringData()
```
