# Web Integrations Monitoring Types

NZXT CAM is a hardware monitoring software that provides users with information on the performance
of various hardware components in their PC, including CPUs, GPUs, and RAM.

In Web Integration mode on Kraken devices, CAM provides monitoring data to the web application
through the browser every second. This data can be used to create custom visualizations with
monitoring information.

## Installation

```bash
npm install @nzxt/web-integrations
```

## Examples

```ts
import { MonitoringData } from "@nzxt/web-integrations/v1";

window.nzxt = {
  v1: {
    onMonitoringDataUpdate: (data: MonitoringData) => {
      // ...
    },
  },
};
```
