import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import './TopHeader.css'
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function TopHeader() {

  return (
    <>
      <div className="topheader_main_dev">
        <Grid container className="Grid_container">
          <Grid item md={6} display={'flex'} alignItems={'center'}>
            <ul className="flex items-center space-x-6">
              <li className="li_tage">
                <Link href="/contact">
                  <span className="pl-2">
                    Contact Us
                  </span>
                </Link>
              </li>

              <li className="li_tage">
                <Link href="/company">
                  <span className="pl-2">
                    Company
                  </span>
                  <ArrowDropDownIcon />
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item md={6} display={'flex'} alignItems={'center'} justifyContent={"end"}>
            <div className="icon_button_class_name">
              <IconButton style={{padding:"0px 19.20px 0px 0px"}} aria-label="cart">
                <Badge className="Badge_classname" anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }} badgeContent={1} color="secondary">
                  <Buyicon />
                </Badge>

              </IconButton>
              <IconButton style={{ color: "#fff",padding:"0px 19.20px 0px 0px" }} aria-label="cart">
                <Usericon />
              </IconButton>
              <div style={{padding:"0px 19.20px 0px 0px"}} >
                <a href="#"  className="a_tage_img_typoo">
                  <img className="img_centry" src="./flag-eng.png" />
                  <Typography className="typo_centry_name">EN</Typography>
                </a>
               
              </div>
              <a href="#" className="a_tage_img_typoo">
                  <Locator_icon />
                  <Typography className="typo_centry_name">
                    Dealer locator
                  </Typography>
                </a>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* <div className="flex-1 flex flex-col bg-black">
        <nav className="container xl:max-w-7xl mx-auto flex justify-between text-white h-16">

          <ul className="flex items-center space-x-6">
            <li className="">
              <Link href="/contact">
                <span className="pl-2">
                  Contact Us
                </span>
              </Link>
            </li>

            <li>
              <Link href="/company">
                <span className="pl-2">
                  Company
                </span>
              </Link>
            </li>
          </ul>

        </nav>
      </div> */}
    </>

  );
};
const Buyicon = () => (
  // const Buyicon = () => (
  <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
    <g id="shopping-cart" data-name="linear/shopping-cart" transform="translate(-622 -188)">
      <g id="shopping-cart">
        <path id="Vector" d="M0,0H1.74A1.85,1.85,0,0,1,3.58,2l-.83,9.96a2.8,2.8,0,0,0,2.79,3.03H16.19A2.877,2.877,0,0,0,19,12.38l.54-7.5a2.773,2.773,0,0,0-2.81-3.01H3.82" transform="translate(624 190)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        <path id="Vector-2" data-name="Vector" d="M2.5,1.25A1.25,1.25,0,1,1,1.25,0,1.25,1.25,0,0,1,2.5,1.25Z" transform="translate(637 207.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        <path id="Vector-3" data-name="Vector" d="M2.5,1.25A1.25,1.25,0,1,1,1.25,0,1.25,1.25,0,0,1,2.5,1.25Z" transform="translate(629 207.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        <path id="Vector-4" data-name="Vector" d="M0,0H12" transform="translate(631 196)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        <path id="Vector-5" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(622 188)" fill="none" opacity="0"></path>
      </g>
    </g>
  </svg>
)
const Usericon = () => (

  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user feather-icon">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)
const Locator_icon = () => (

  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe feather-icon"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
)