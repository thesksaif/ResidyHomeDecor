import PropTypes from 'prop-types';
import { cloneElement, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger
} from '@mui/material';

// project imports
import Logo from 'ui-component/Logo';
import { useDispatch } from 'react-redux';
import { openDrawer } from 'store/slices/menu';

// assets
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';

// elevation scroll
function ElevationScroll({ children, window }) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    return cloneElement(children, {
        elevation: trigger ? 1 : 0,
        style: {
            backgroundColor: theme.palette.mode === 'dark' && trigger ? theme.palette.dark[800] : theme.palette.background.default,
            color: theme.palette.text.dark
        }
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node,
    window: PropTypes.object
};

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const drawerMenu = [
    {
        label: 'Home',
        href: '/',
        icon: <IconHome2 />
    },
    {
        label: 'About Us',
        href: '/about-us',
        icon: <IconDashboard />
    },
    {
        label: 'Services',
        href: '/services',
        icon: <IconBook />
    },
    {
        label: 'Contact',
        href: '/contact-us',
        icon: <IconCreditCard />
    },
    {
        label: 'Get Quote',
        href: '/quote',
        icon: <IconDashboard />,
        target: '_blank'
    }
];

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();

    const drawerToggler = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    // Helper to check if a route is active
    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <ElevationScroll {...others}>
            <MuiAppBar>
                <Container>
                    <Toolbar sx={{ py: 2.5, px: `0 !important` }}>
                        <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            <Logo />
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={{ xs: 1.5, md: 2.5 }}>
                            <Button
                                className={isActive('/') ? 'nav-active' : ''}
                                color={isActive('/') ? 'error' : 'inherit'}
                                variant="text"
                                component={RouterLink}
                                to="/"
                            >
                                Home
                            </Button>
                            <Button
                                className={isActive('/about-us') ? 'nav-active' : ''}
                                color={isActive('/about-us') ? 'error' : 'inherit'}
                                variant="text"
                                component={RouterLink}
                                to="/about-us"
                            >
                                About
                            </Button>
                            <Button
                                className={isActive('/services') ? 'nav-active' : ''}
                                color={isActive('/services') ? 'error' : 'inherit'}
                                variant="text"
                                component={RouterLink}
                                to="/services"
                            >
                                Services
                            </Button>
                            <Button
                                className={isActive('/contact-us') ? 'nav-active' : ''}
                                color={isActive('/contact-us') ? 'error' : 'inherit'}
                                variant="text"
                                component={RouterLink}
                                to="/contact-us"
                            >
                                Contact Us
                            </Button>
                            <Button target="_blank" component={RouterLink} to="/quote" disableElevation variant="contained" color="error">
                                GET QUOTE
                            </Button>
                        </Stack>
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                {drawerToggle && (
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={drawerToggler(false)}
                                        onKeyDown={drawerToggler(false)}
                                    >
                                        <List>
                                            {drawerMenu.map((item) =>
                                                item.target === '_blank' ? (
                                                    <a
                                                        key={item.label}
                                                        href={item.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ textDecoration: 'none' }}
                                                    >
                                                        <ListItemButton
                                                            component="span"
                                                            onClick={() => {
                                                                dispatch(openDrawer(false));
                                                                setDrawerToggle(false);
                                                            }}
                                                        >
                                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                                            <ListItemText primary={item.label} />
                                                        </ListItemButton>
                                                    </a>
                                                ) : (
                                                    <Link key={item.label} style={{ textDecoration: 'none' }} href={item.href}>
                                                        <ListItemButton
                                                            component="a"
                                                            onClick={() => {
                                                                dispatch(openDrawer(false));
                                                                setDrawerToggle(false);
                                                            }}
                                                        >
                                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                                            <ListItemText primary={item.label} />
                                                        </ListItemButton>
                                                    </Link>
                                                )
                                            )}
                                        </List>
                                    </Box>
                                )}
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
