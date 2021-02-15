import React from 'react'
import useSWR from 'swr'

import DashboardShell from '@/components/DashboardShell';
import SiteTableHeader from '@/components/SiteTableHeader';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTable from '@/components/SiteTable';
import EmptyState from '@/components/EmptyState';
import Page from '@/components/Page';

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
  <Page name="Dashboard" path="/dashboard">
    <Dashboard />
  </Page>
);

export default DashboardPage
