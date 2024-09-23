import { getSession } from '@/config/authOptions';
import { redirect } from 'next/navigation';
import React from 'react';
import { prisma } from '@/prisma/client';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serverSession = await getSession();

  if (!serverSession) {
    redirect('/login');
  }

  if (serverSession) {
    const userInRestaurant = await prisma.role.findUnique({
      where: {
        userId: serverSession.user?.id,
      },
    });

    if (!userInRestaurant) {
      redirect('/login');
    }
  }

  return <>{children}</>;
}
