import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import "./profile.scss";


const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src="https://i.pinimg.com/originals/26/e9/2f/26e92f287677d046d1c0a50c8a1f9321.jpg"
          alt=""
        />
        <img
          className="profilePic"
          src="https://i.pinimg.com/originals/b5/e6/39/b5e6396690d17ebb96576616b451febf.jpg"
          alt=""
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Kanybek B</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Bishkek</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>KKB.com</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
