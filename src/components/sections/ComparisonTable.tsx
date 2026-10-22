import React from 'react';
import { Table } from '@/components/ui/Table';

interface ComparisonRow {
  attribute: string;
  goodSign: string;
  warningSign: string;
}

interface ComparisonTableProps {
  caption?: string;
  rows?: ComparisonRow[];
}

const DEFAULT_ROWS: ComparisonRow[] = [
  {
    attribute: 'Pricing',
    goodSign: 'Full price and plan length shown in USD before you pay',
    warningSign: 'Prices only given in private messages, or "lifetime" deals for a one-off fee'
  },
  {
    attribute: 'Device compatibility',
    goodSign: 'Standard M3U / Xtream Codes details that work in player apps from official stores',
    warningSign: 'You must install a modified APK or disable device security settings'
  },
  {
    attribute: 'Programme guide (EPG)',
    goodSign: 'Explains how the EPG is supplied and how to fix a GMT/BST time offset',
    warningSign: 'No mention of EPG, or listings that are routinely an hour out'
  },
  {
    attribute: 'Claims and reviews',
    goodSign: 'Realistic technical expectations; reviews you can check on an independent platform',
    warningSign: 'Static review badges, invented customer counts, "100% uptime" or "zero buffering"'
  },
  {
    attribute: 'Legal awareness',
    goodSign: 'Is open about licensing questions and points to official UK sources',
    warningSign: 'Claims a VPN makes unlicensed streaming legal'
  }
];

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  caption = 'Good signs and warning signs when evaluating a streaming service',
  rows = DEFAULT_ROWS
}) => {
  const columns = [
    {
      header: 'What to check',
      accessor: 'attribute' as keyof ComparisonRow,
      className: 'font-semibold'
    },
    {
      header: 'Good sign',
      accessor: 'goodSign' as keyof ComparisonRow,
      className: 'text-cyan'
    },
    {
      header: 'Warning sign',
      accessor: 'warningSign' as keyof ComparisonRow
    }
  ];

  return <Table columns={columns} data={rows} caption={caption} />;
};
