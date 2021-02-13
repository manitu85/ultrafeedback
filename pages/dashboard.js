import React from 'react'
import useSWR from 'swr'

import DashboardShell from '@/components/DashboardShell';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTable from '@/components/SiteTable';
import EmptyState from '@/components/EmptyState';

import { useAuth } from '@/lib/auth';
import { fetcher } from '@/utils/fetcher';
import SiteTableHeader from '@/components/SiteTableHeader';


const Dashboard = () => {
  const { user } = useAuth()
  const { data } = useSWR(user ? ['api/sites', user.token] : null, fetcher);
  const sites = data?.sites
  // console.log('DATA :>> ', data);
  // console.log('DATA :>> ', sites);

  if(!data) {
    return(
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <SiteTableHeader />
      { sites?.length
          ? <SiteTable sites={sites} />
          : <EmptyState /> }
    </DashboardShell>
  )
}

export default Dashboard
