// Next JS
import NextLink from 'next/link';
import { useRouter } from 'next/router';

// MUI
import { Box, Button, ListItem } from '@mui/material';

function NavItem(props) {
  const { href, icon, title, ...others } = props;
  const router = useRouter();
  const active = href ? (router.pathname === href) : false;
  const btn = active ? 'contained' : 'text';
  return (
    <ListItem>
        <NextLink
            href={href}
            passHref
        >
            <Button
                component="a"
                startIcon={icon}
                fullWidth
                sx={{
                    // p: '1rem 2rem',
                    // m: 0,
                    // color: active ? 'primary' : 'secondary',
                    width: '100%',
                    p: '1rem 0 1rem 2rem',
                    // backgroundColor: active && 'rgba(255,255,255, 0.08)',
                    borderRadius: '1.6rem',
                    color: active ? '#FF8355' : 'secondary',
                    fontWeight: active && 'fontWeightBold',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    textTransform: 'none',
                    width: '100%',
                    '& .MuiButton-startIcon': {
                    color: active ? 'secondary' : 'secondary'
                    },
                    '&:hover': {
                    backgroundColor: 'rgba(255,255,255, 0.08)'
                    }
                }}
                // variant= {btn}
            >
                <Box sx={{ flexGrow: 1 }}>
                    {title}
                </Box>  
            </Button>
        </NextLink>
    </ListItem>
  )
}

export default NavItem