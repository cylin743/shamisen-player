"use client"
import CloseIcon from '@mui/icons-material/Close';


const CloseButton = {
  cursor: "pointer",
  height: "24px",
  width: "24px"
}
const Header = ({ title, onClose }:{ title: string, onClose: any}) => (
    <div style={HeaderWrapper}>
      {title}
      <div style={CloseButton} onClick={onClose}>
        <CloseIcon />
      </div>
    </div>
);

const HeaderWrapper = {
    borderBottom: "1px solid #EEEEEE",
    padding: "16px 20px",
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center",
};
export default Header