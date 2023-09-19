import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
import {
  Container,
  Divider,
  Grid,
  MenuItem,
  MenuList,
  TextField,
  Typography,
} from "@mui/material";
import Styles from "./footer.module.css";
import React from "react";
import IconButton from "@mui/material/IconButton";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
// import {
//   Fb_icon,
//   Insta_icon,
//   Tiktok_icon,
//   Twitter_icon,
//   Youtube_icon,
// } from "./icon";

const Footer = () => {
  return (
    <>
      <div className={Styles.background}>
        <Container className={Styles.container}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Typography className={Styles.footerheading}>Company</Typography>
              <MenuList className={Styles.fottermenu}>
                <MenuItem>About us</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Tire gurantee</MenuItem>
                <MenuItem>Tire Release</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
              <Typography
                className={Styles.footerheading}
                sx={{ marginTop: "5px" }}
              >
                Legal
              </Typography>
              <MenuList className={Styles.fottermenu}>
                <MenuItem>Disclosure</MenuItem>
                <MenuItem>Terms and conditions</MenuItem>
                <MenuItem>Privacy</MenuItem>
                <MenuItem>Dataprotection</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={Styles.footerheading}>
                Service & Contact
              </Typography>
              <Typography className={Styles.footersubheading}>
                Service - Dealer
              </Typography>
              <a href="mailto:info@berlintires.com" className={Styles.mail}>
                {" "}
                E-Mail: info@berlintires.com
              </a>

              <Typography className={Styles.footersubheading1}>
                Service - End User
              </Typography>
              <a
                href="mailto:endverbraucher@berlintires.com"
                className={Styles.mail}
              >
                endverbraucher@berlintires.com
              </a>

              <Typography className={Styles.footersubheading1}>
                EMEA / North America / Export{" "}
              </Typography>
              <a href="mailto:export@berlintires.com " className={Styles.mail}>
                E-Mail: export@berlintires.com
              </a>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography className={Styles.footerheading}>
                Newsletter
              </Typography>
              <TextField
                className={Styles.emailinput}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "0px",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "10px 0px 10px 15px",
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    paddingRight: "0px",
                  },
                }}
                fullWidth
                placeholder="E-Mail"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <EastRoundedIcon sx={{ color: "white" }} />
                    </IconButton>
                  ),
                }}
              />
              <Typography
                className={Styles.footerheading}
                sx={{ marginTop: "15px" }}
              >
                Social media
              </Typography>
              {/* <div className={Styles.socialicon}>
                <a
                  className={Styles.social}
                  href="https://www.instagram.com/berlintires/"
                  target="_blank"
                  rel="noopener"
                >
                  <Insta_icon />
                </a>
                <a
                  className={Styles.social}
                  href="https://www.youtube.com/channel/UCQbrp83wJpD9zoVXtzRMcWA/"
                  target="_blank"
                  rel="noopener"
                >
                  <Youtube_icon />
                </a>
                <a
                  className={Styles.social}
                  href="https://www.tiktok.com/@berlintires/"
                  target="_blank"
                  rel="noopener"
                >
                  <Tiktok_icon />
                </a>
                <a
                  className={Styles.social}
                  href="https://www.facebook.com/berlintires/"
                  target="_blank"
                  rel="noopener"
                >
                  <Fb_icon />
                </a>
                <a
                  className={Styles.social}
                  href="https://twitter.com/BerlinTires"
                  target="_blank"
                  rel="noopener"
                >
                  <Twitter_icon />
                </a>
              </div> */}
              <Typography
                className={Styles.footerheading}
                sx={{ marginTop: "20px" }}
              >
                Trader
              </Typography>
              <MenuList className={Styles.fottermenu1}>
                <MenuItem>Dealer login</MenuItem>
                <MenuItem>Registration specialist dealer</MenuItem>
                <MenuItem>Store locator</MenuItem>
              </MenuList>

              <a
                className={Styles.pdf}
                href="/BerlinTires_Reifenkollektion-2023.pdf"
                target="_blank"
                rel="noopener"
              >
                Tire Collection
              </a>
            </Grid>
          </Grid>

          <Divider
            orientation="horizontal"
            sx={{ borderColor: " white", margin: "30px 0px 0px 0px" }}
          />
          <Grid container>
            <Grid item xs={12} md={6}>
            <div className={Styles.footerclogoflex}>
            <a
              className={Styles.footerlogomargin}
              href="https://berlintires.com/"
            >
              <img
                src="Berlin-Tires-Logo-White.png"
                className={Styles.footerclogo}
              />{" "}
            </a>
            <a
              className={Styles.footerlogomargin}
              href="https://syron-tires.com/"
            >
              <img className={Styles.footerclogo} src="Syron-Logo-White.png" />
            </a>

            <a
              className={Styles.footerlogomargin}
              href="https://keskinwheels.com/"
            >
              <img className={Styles.footerclogo} src="Keskin-Logo-White.png" />{" "}
            </a>

            <a
              className={Styles.footerlogomargin}
              href="https://mam-wheels.com/"
            >
              <img className={Styles.footerclogo} src="MAM-Logo-White.png" />{" "}
            </a>
          </div>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography className={Styles.copyright}>
          Copyright ® 2023 Berlin Tires. All Rights Reserved.

          </Typography>
            </Grid>
          </Grid>
          
        </Container>
      </div>
    </>
  );
};

export default Footer;
