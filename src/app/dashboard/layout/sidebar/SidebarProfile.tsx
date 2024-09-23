import { Box } from '@mui/material';
export const SidebarProfile = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/images/backgrounds/sidebar-profile-bg.jpg')`,
        borderRadius: '0 !important',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}
    >
      <>
        <Box px="12px" py="28px" borderRadius="0 !important"></Box>
      </>
    </Box>
  );
};
