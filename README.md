# Web Integrations Monitoring

## Description

Typed monitoring data for NZXT Web Integrations

## Installation

```bash
$ npm install @nzxt/web-integrations@latest
```

## Window

```ts
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

## Library

```ts
import { onMonitoringDataUpdate } from '@nzxt/web-integrations/v1'

const end = onMonitoringDataUpdate((pc) => {
  ...
})

end()
```

## React

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
const monitoringData = useMonitoringData()
```
