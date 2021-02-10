import React from 'react'
import useSWR from 'swr'

import DashboardShell from '@/components/DashboardShell';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTable from '@/components/SiteTable';
import EmptyState from '@/components/EmptyState';

import { useAuth } from '@/lib/auth';
import { fetcher } from '@/utils/fetcher';

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR('api/sites', fetcher);

  console.log("DATA: >>", data);

  if(!data) {
    return(
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
    { data.sites ? <SiteTable sites={data.sites} /> : <EmptyState /> }
    </DashboardShell>
  )
}

export default Dashboard
