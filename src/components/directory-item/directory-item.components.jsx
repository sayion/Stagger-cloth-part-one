import "./directory-item.styles.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/Shop");
  };

  const { imageUrl, title } = category;

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directory-body-container">
        <h2 onClick={navigateToAbout}>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
