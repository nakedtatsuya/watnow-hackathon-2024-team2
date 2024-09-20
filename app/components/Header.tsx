import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          height: "90px",
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <button
              style={{
                fontFamily: "JPFont",
                fontSize: "18px",
                color: "blue",
                border: "none",
                background: "none",
                cursor: "pointer",
                marginBottom: "40 px",
              }}
            >
              編集
            </button>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "JPFont",
              height: "100%",
              flexGrow: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              fontWeight: "bold",
              marginLeft: '20px',
              marginBottom: "10px",
            }}
          >
            推し一覧
          </Typography>
          <Box
            sx={{ paddingLeft: "0px", display: "flex", alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle sx={{ fontSize: 40 }} />{" "}
              {/* Increase the icon size */}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
