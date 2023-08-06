import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100px',
        px:"30px",
        background: 'linear-gradient(135deg, #552586, #9969C7)',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
      }}
    >
      <Typography variant="h5" color="white">
        مدیریت کاربران
      </Typography>
    </Box>  )
}

export default Header