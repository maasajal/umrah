"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Packages",
    path: "packages",
  },
  { name: "Events", path: "events" },
  { name: "Flight", path: "flight" },
  { name: "Visa", path: "visa" },
  { name: "Hotel", path: "hotel" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#000000A6] text-white">
      <div className="container mx-auto px-4 py-1">
        <Toolbar>
          {/* Left side branding */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Umrah Support
          </Typography>
          {/* Right side navigation */}
          <Box sx={{ flexGrow: 1 }} />{" "}
          {/* This will push the nav items to the right */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              flexGrow: 1,
            }}
          >
            {navItems.map((page) => (
              <Button
                key={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link href={page.path}>{page.name}</Link>
              </Button>
            ))}
            <Button>
              <Link
                href="tel:+358449869280"
                className="bg-blue-600 hover:bg-red-800 text-white text-lg px-5 py-2 rounded-full transition ml-5 flex gap-2 items-center"
              >
                <WhatsAppIcon />
              </Link>
            </Button>
          </Box>
          {/* Mobile version */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className="flex items-center justify-between"
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {navItems.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <Link href={page.path}>{page.name}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* Mobile Typography */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Umrah Support
            </Typography>
            <Button>
              <Link
                href="tel:+358449869280"
                className="text-white hover:text-red-600 text-lg px-6 py-2 rounded-full transition"
              >
                <WhatsAppIcon />
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </div>
    </header>
  );
};

export default Header;
