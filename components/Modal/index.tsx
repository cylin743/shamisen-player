"use client"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from "./Header"
import Footer from "./Footer"
import { useState, useRef } from "react";

function ShareModal({
    isOpen,
    onClose,
    onCopy,
    link
}:{
    isOpen: boolean,
    onClose: any,
    onCopy: any,
    link: string
}){
    const [copyStatus, setCopyStatus] = useState(false);
    const textEle = useRef<HTMLTextAreaElement>(null)
    const onCopyText = () => {
        setCopyStatus(true);
        textEle.current?.focus()
        textEle.current?.select()
        setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
        navigator.clipboard.writeText(link)
    };
    

    return (<Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Header title="Share Link" onClose={onClose}/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <textarea
                ref={textEle}
                style={TextFieldStype}
                id="outlined-multiline-static"
                rows={4}
                defaultValue={link}
            />
          </Typography>
          <Footer onSubmit={onCopyText}/>
        </Box>
      </Modal>)

}
const TextFieldStype = {
    width: "100%",
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export {ShareModal}