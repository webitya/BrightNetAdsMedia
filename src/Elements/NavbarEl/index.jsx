
import { FacebookOutlined, InstagramOutlined,LinkedinOutlined,CalendarOutlined, MenuOutlined, PhoneOutlined, XOutlined, YoutubeOutlined,MailOutlined,BlockOutlined } from "@ant-design/icons";
import { Button, Drawer} from "antd";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarEl.css"

const NavbarEl = () => {
  const [openMenu,setOpenMenu]=useState(false)
// -----------------------
   const [NavBar,setNavBar]=useState("relative")
   const sticky=()=>{
         let scrollTop=window.scrollY;
         if(scrollTop >200){
            console.log("Aditya")
            setNavBar("fixed")
         }
         else{
          console.log("Kumar")
             setNavBar("relative")
         }
   }
   window.addEventListener('scroll',sticky)
// --------------------------
  
  const display = (
    <>
      <div className="flex justify-between items-center px-3 py-2 bg-white shadow-lg navBarTop w-100" style={{position:NavBar}}>
      <div className="block lg:hidden">
  {/* Visible on small screens only */}
  <Link to="/">
    <img src="/logo111.png" width="60px" />
  </Link>
</div>

<div className="hidden lg:block">
  {/* Visible on large screens only */}
  <Link to="/">
    <img src="/logo111.png" width="80px" />
  </Link>
</div>
           <div className="desktopMenu">
            <ul className="flex gap-4 items-center justify-center text-zinc-700">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">AboutUs</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact-us">ContactUs</Link></li>
                    <li>
      <Link to="https://calendly.com/brightnetadsmedia">
        <Button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{
            padding: "15px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          icon={<CalendarOutlined/>}
        >
          BOOK APPOINTMENT
        </Button>
      </Link>
    </li>
            </ul>
           </div>
           <div className="HamburgerDiv"><MenuOutlined className="hamburgerIcon" onClick={()=>setOpenMenu(true)}/></div>
           <Drawer open={openMenu} onClose={()=>setOpenMenu(false)} closable>
                  <div className="py-2">
                     <img src="/logo111.png" width="120px"/>
                  </div>
                  <div className="drawerNav">
                      <ul>
                        <li onClick={()=>setOpenMenu(false)}><Link to="/">Home</Link></li>
                        <li onClick={()=>setOpenMenu(false)}><Link to="/about-us">AboutUs</Link></li>
                        <li onClick={()=>setOpenMenu(false)}><Link to="/services">Services</Link></li>
                        <li onClick={()=>setOpenMenu(false)}><Link to="/contact-us">ContactUs</Link></li>
                        <li>
      <Link to="https://calendly.com/brightnetadsmedia">
        <Button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{
            padding: "15px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          icon={<CalendarOutlined/>}
        >
          BOOK APPOINTMENT
        </Button>
      </Link>
    </li>
                        <li className="flex gap-2">
                            <Link to="https://www.instagram.com/brightnet_ads_media"><Button className="text-pink-500"><InstagramOutlined /></Button></Link>
                            <Link to="https://x.com/Brightnetads"><Button className="text-black"><XOutlined/></Button></Link>
                            <Link to="https://www.linkedin.com/company/brightnet-ads-media/"><Button className="text-blue-400"><LinkedinOutlined/></Button></Link>
                            <Link to="https://www.youtube.com/@BRIGHTNETADSMEDIA"><Button className="text-red-600"><YoutubeOutlined /></Button></Link>
                            <Link to="https://www.facebook.com/profile.php?id=61565595419734"><Button className="text-blue-700"><FacebookOutlined /></Button></Link>
                        </li>
                        <li>
                        <h1>
                            <b><PhoneOutlined className="text-green-900"/>Phone : </b><span>+91 6209585437</span>
                        </h1>
                        </li>
                        <li>
                        <h1>
                            <b><MailOutlined className="text-blue-700"/>Email : </b><span>brightnetmedia@gmail.com</span>
                        </h1>
                        </li>
                        <li>
                        <h1>
                            <b><BlockOutlined className="text-red-500"/>Address : </b><span>Karam Chowk Harmu Ranchi,<br></br>Ranchi Jharkhand</span>
                        </h1>
                        </li>
                       
                      </ul>
                  </div>
           </Drawer>
      </div>
    </>
  );
  return display;
};
export default NavbarEl;

