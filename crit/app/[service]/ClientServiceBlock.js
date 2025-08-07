// app/[service]/ClientServiceBlock.js

'use client';

import ServiceBlock from '@/app/components/ui/ServiceBlock';

const serviceNameMap = {
  'implementation': 'SAP Implementation Services',
  'rollout': 'SAP Rollout Services',
  'support': 'SAP Support Services',
  'upgrade': 'SAP Upgrade Services',
  'integration': 'SAP Integration Services',
  'migration': 'SAP Migration Services',
  'automation': 'SAP Automation Services',
  'testing': 'SAP Testing Services'
};

export default function ClientServiceBlock({ service }) {
  return (
    <ServiceBlock serviceName={serviceNameMap[service] || service} />
  );
}
