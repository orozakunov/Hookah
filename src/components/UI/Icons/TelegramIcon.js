import { IconContext } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";

const TelegramIcon = () => {
  return (
    <IconContext.Provider value={{
        color: "#28A8E9", 
        size: "18px"
     }}
    >
      <>
        <FaTelegramPlane />
      </>
    </IconContext.Provider>
  );
}

export default TelegramIcon