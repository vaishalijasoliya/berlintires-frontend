import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import MobileMenuIcons from "./MobileMenuIcons";
import TopHeader from "@/app/components/UI/TopHeader";
import './TopHeader.css'
import { Grid } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

async function getNavLinks() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(`${url}/api/menus/1?nested&populate=*`, { headers });
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

const Header = async () => {
  // var links = await getNavLinks();
  if(!!links){
      var links = [];
  }
  return (
    <>
      <TopHeader />
      <div className="topheader_main_dev_header">
        <Grid container className="Grid_container_header">

          <Grid item md={6} display={'flex'} alignItems={'center'}>
            <Link href="/" className="flex items-center gap-2">
              <Image
                className="rounded-br-lg rounded-tl-lg"
                src={Logo}
                alt=""
                // quality={100}
                // width={260}
                height={33}
              />

            </Link>
            <ul style={{padding:"0px 0px 0px 16px"}} className="flex items-center space-x-6">
              <li className="li_tage_header">
                <Link href='#'>
                  <span className="pl-2">
                    Tires
                  </span>
                </Link>
              </li>
              <li className="li_tage_header">
                <Link href='#'>
                  <span className="pl-2">
                    B2B Trader
                  </span>
                </Link>
              </li>
              <li className="li_tage_header">
                <Link href='#'>
                  <span className="pl-2">
                    Help
                  </span>
                  <ArrowDropDownIcon />
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item md={6} display={'flex'} alignItems={'center'} justifyContent={"end"}>
          <ul style={{padding:"0px 0px 0px 16px"}} className="flex items-center space-x-6">
              <li className="li_tage_header">
                <Link href='#' className="link_tage" >
                <Filter_icon />
                  <span className="pl-2">
                  Tires by Size
                  </span>
                  </Link>

                  </li>
                  <li className="li_tage_header">
                <Link href='#' className="link_tage" >
                <Sresh_icon />
                  <span className="pl-2">
                  Search
                  </span>
                  </Link>

                  </li>
                  </ul>
          </Grid>
        </Grid>
      </div>
      {/* <header className="sticky left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-slate-300 bg-white px-4 shadow-sm"> */}
      {/* <div className="container mx-auto flex h-full w-full flex-row items-center justify-center md:justify-between xl:max-w-7xl"> */}
      {/* <MobileMenuIcons />
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="rounded-br-lg rounded-tl-lg"
              src={Logo}
              alt=""
              quality={100}
              width={260}
            />

          </Link>
          <Navbar links={links} isDesktop /> */}

      {/* </div> */}
      {/* </header> */}
      {/* <Navbar links={links} isMobile /> */}
    </>
  );
};

export default Header;
const Filter_icon = () => (

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders feather-icon"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
)
const Sresh_icon = () => (

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search feather-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
)