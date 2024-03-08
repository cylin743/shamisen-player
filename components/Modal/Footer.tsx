"use client"
import Button from '@mui/material/Button';
const Footer = ({ onSubmit }:{ onSubmit: any}) => (
    <div style={FooterStyle}>
      <div style={ButtonStyle}>
        <Button onClick={onSubmit}>Copy</Button>
      </div>
    </div>
  );
const ButtonStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
}
const FooterStyle = {
   padding: "12px 20px"
}

export default Footer