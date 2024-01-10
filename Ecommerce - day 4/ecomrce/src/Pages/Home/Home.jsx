import { Link } from "react-router-dom";
import "./Home.css";
// import Footer
export const Home = () => {
  return (
    <div className="landing flex-col">
      <div className="landing-page-img">
        <Link to="/product-listing">
          <source
            src="https://res.cloudinary.com/bhakti1801/video/upload/eo_38,so_18/v1650876948/Motion_Design_For_Nike_Shoe_Upcoming_e78lfa.mp4"
            type="video/mp4"
          />
        </Link>
      </div>
    </div>
  );
};
