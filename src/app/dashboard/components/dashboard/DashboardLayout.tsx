'use client';

import { useTheme, styled, Container, Box } from '@mui/material';
import React, { useState } from 'react';
import Header from '../../layout/header/Header';
import Sidebar from '../../layout/sidebar/Sidebar';

const MainWrapper = styled('div')(() => ({
  // display: "flex",
  // minHeight: "100vh",
  // width: "100%",
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  backgroundColor: 'transparent',
}));

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const theme = useTheme();
  return (
    <MainWrapper className="mainwrapper">
      <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />

      <PageWrapper
        className="page-wrapper"
        sx={{
          [theme.breakpoints.up('lg')]: {
            ml: `270px`,
          },
        }}
      >
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />

        <Container
          sx={{
            paddingTop: '20px',
            maxWidth: '1200px',
          }}
        >
          <Box mt={4} sx={{ minHeight: 'calc(100vh - 170px)' }}>
            {children}
          </Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
}
