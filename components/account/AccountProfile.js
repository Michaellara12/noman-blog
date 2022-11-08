// MUI
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';

import { useAuth } from '../../contexts/AuthContext';


function AccountProfile() {

  const { currentUser } = useAuth();
  const user = {
    avatar: 'https://entey.net/wp-content/uploads/2022/08/robot.webp',
    country: 'USA',
    jobTitle: 'Technoking',
    name: currentUser.displayName,
    escencia: '15'
    };

  return (
    <Card>
        <CardContent>
            <Box
                sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
                }}
            >
                <Avatar
                    src={user.avatar}
                    sx={{
                        height: 80,
                        mb: 2,
                        width: 80
                    }}
                />
                <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h5"
                >
                    {currentUser.displayName}
                </Typography>
                
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    Escencia: {user.escencia}
                </Typography>
            </Box>
        </CardContent>
      
    </Card>
  )
}

export default AccountProfile