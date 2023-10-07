import DirectoryItem from "../directory-item/directory-item.components";
import "./directory.style.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category}></DirectoryItem>
      ))}
    </div>
  );
};
export default Directory;
