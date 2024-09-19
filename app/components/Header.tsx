import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import title from "../images/title.png"; // 画像のパスを確認してください

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'none',
                height: "90px",
            }}>
                <Toolbar variant="dense" sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    height: '100%',
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}>
                    <Typography variant="h6" color="inherit" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                        <button style={{ 
                            color: 'blue', border: 'none', background: 'none', cursor: 'pointer', marginBottom: "10 px" }}>
                            編集
                        </button>
                    </Typography>
                    <Typography variant="h6" sx={{ 
                        height: '100%',
                         flexGrow: 1, 
                         display: 'flex', 
                         justifyContent: 'center',
                         alignItems: 'flex-end', 
                         fontWeight: 'bold',
                         marginBottom: '20px' }}>
                        推し一覧
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle sx={{ fontSize: 40 }} /> {/* Increase the icon size */}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
