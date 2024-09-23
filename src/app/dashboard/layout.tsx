import React from 'react';
import DashboardLayout from './components/dashboard/DashboardLayout';
// import { prisma } from '@/prisma/client';
// import { getSession } from '@/config/authOptions';
// import { redirect } from 'next/navigation';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const serverSession = await getSession();

  // if (!serverSession) {
  //   redirect('/login');
  // }

  // if (serverSession) {
  //   const userInRestaurant = await prisma.role.findUnique({
  //     where: {
  //       userId: serverSession.user?.id,
  //     },
  //   });

  //   if (!userInRestaurant) {
  //     redirect('/login');
  //   }
  // }
  return <DashboardLayout>{children}</DashboardLayout>;
}
