import React from 'react';
import './Header.css';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router';


const pages = [
    { name: 'Dashboard', path: '/' },
    { name: 'Create Order', path: '/order-form' },
    { name: 'Production Line Status', path: '/production-line' },
];

const Header: React.FC = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Order Management
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <NavLink to={page.path}
                                key={page.name} className={({ isActive }) =>
                                    `mx-2 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-white-300 hover:bg-gray-400 hover:text-white'
                                    }`
                                }>
                                {page.name}
                            </NavLink>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;