import React from 'react'
import useSWR from 'swr'

import DashboardShell from '@/components/DashboardShell';
import SiteTableHeader from '@/components/SiteTableHeader';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTable from '@/components/SiteTable';
import EmptyState from '@/components/EmptyState';
import PageSEO from '@/components/PageSEO';

import { useAuth } from '@/lib/auth';
import { fetcher } from '@/utils/fetcher';


const Dashboard = () => {
  const { user } = useAuth()
  const { data } = useSWR(user ? ['api/sites', user.token] : null, fetcher);
  const sites = data?.sites

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

const DashboardPage = () => (
  <PageSEO name="Dashboard" path="/dashboard">
    <Dashboard />
  </PageSEO>
);

export default DashboardPage
