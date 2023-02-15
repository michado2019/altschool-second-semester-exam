import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./Admin.css";

function Admin() {
  // States
  const [open, setOpen] = useState(false);
  const [getPassword, setGetPassword] = useState('')
  const [adminPassword, setAdminPassword] = useState('')
  const [wrongPassword, setWrongPassword] = useState(false)
  // Handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setGetPassword(e.target.value)
    setAdminPassword(getPassword)
  }
  const handlePasswordSubmit = (e) => {
    e.preventDefault()
      setAdminPassword(getPassword)
      if(getPassword === '0987' && adminPassword !== ''){
        handleClose()
      }else{
        setWrongPassword(true)
      }
  }
  const style = {
    marginTop: "300px",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #2f8aa5",
    boxShadow: 24,
    p: 4,
    outline: "none",
    marginLeft: "50%",
    borderRadius: "10px",
  };

  // useEffect
  useEffect(() => {
    handleOpen();
  }, []);
  return (
    <div className="adminWrapper">
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modeBox">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="modeBox-notifications_flex">
            {
              wrongPassword ?
              <h2 className="modeBox-notifications">Enter valid admin password!</h2> :
              <h2 className="modeBox-notifications">Enter admin password:</h2> 
            }
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handlePasswordSubmit} className='adminForm'>
            <input 
            type="text/number" 
            className="adminInput" 
            onChange={handleChange}
            placeholder="Use 0987 to test"
            />
            <button className='adminSubmit-btn'>Submit</button>
            </form>
          </Typography>
        </Box>
      </Modal>
      <div className='adminDashboardWrapper'>
        <div className='adminDashboard-top'>
          <div className='adminDashboard-top_divs'>
             <img src='data:image/png;base64,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' alt='img' className='adminDashboard-top_img'/>
             <div className='adminDashboard-top_div'>
              <h2>Users:</h2>
              <h3>{300}</h3>
             </div>
          </div>
          <div className='adminDashboard-top_divs'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4N2fO2Zee_yjQGo8LTd1kxAjTnY5OQ0mwFQ&usqp=CAU' alt='img' className='adminDashboard-top_img'/>
          <div className='adminDashboard-top_div'>
            <h2>Active Users:</h2>
            <h3>{300}</h3>
          </div>
            
          </div>
          <div className='adminDashboard-top_divs'>
          <img src='data:image/png;base64,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' alt='img' className='adminDashboard-top_img'/>
          <div className='adminDashboard-top_div'>
            <h2>Total Blogs:</h2>
            <h3>{300}</h3>
          </div>
          </div>
        </div>
        <div className='adminDashboard-bottom'>
     
        </div>
      </div>
    </div>
  );
}
export default Admin;
