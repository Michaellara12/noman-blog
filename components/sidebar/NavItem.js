// Next JS
import NextLink from 'next/link';
import { useRouter } from 'next/router';

// MUI
import { Box, Button, ListItem } from '@mui/material';

function NavItem(props) {
  const { href, icon, title, ...others } = props;
  const router = useRouter();
  const active = href ? (router.pathname === href) : false;
  const btn = active ? 'outlined' : 'text';
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
                    p: '1rem 0 1rem 2rem',
                    borderRadius: '1.6rem',
                    fontWeight: active && 'fontWeightBold',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    textTransform: 'none',
                    width: '100%',
                    '& .MuiButton-startIcon': {
                    },
                    // '&:hover': {
                    // backgroundColor: 'secondary'
                    // }
                }}
                variant={btn}
                color= {active ? 'primary' : 'secondary'}
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