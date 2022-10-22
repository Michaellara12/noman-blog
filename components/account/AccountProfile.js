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

const user = {
    avatar: 'https://fotografias.lasexta.com/clipping/cmsimages02/2022/05/03/6F9C82A4-0FA4-40F9-BE2F-87F8DBBC1224/elon-musk-met-gala_104.jpg?crop=1407,1407,x0,y0&width=1200&height=1200&optimize=low&format=webply',
    country: 'USA',
    jobTitle: 'Technoking',
    name: 'Elon Musk',
    escencia: '15'
};


function AccountProfile() {
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
                    {user.name}
                </Typography>
                
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    Escencia: {user.escencia}
                </Typography>
            </Box>
        </CardContent>
        {/* <Divider />
        <CardActions>
        <Button
            color="primary"
            fullWidth
            variant="text"
        >
            Upload picture
        </Button>
        </CardActions> */}
    </Card>
  )
}

export default AccountProfile