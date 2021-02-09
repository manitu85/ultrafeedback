import React from 'react'
import DashboardShell from '@/components/DashboardShell';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';

const Dashboard = () => {
  const auth = useAuth();

  if(!auth.user) {
    return(
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <EmptyState />
    </DashboardShell>
  )
}

export default Dashboard
