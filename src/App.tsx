import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:"630px",
  overflow:"scroll",
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');

  // const [errors, setErrors] = useState({
  //   referrerName: '',
  //   referrerEmail: '',
  //   refereeName: '',
  //   refereeEmail: '',
  //   course: '',
  //   message: ''
  // });

  // const validate = () => {
  //   let isValid = true;
  //   if (!referrerName) {errors.referrerName = 'referrer Name is required'; isValid=false}
  //   if (!referrerEmail) {errors.referrerEmail = 'referrer Email is required';isValid=false}
  //   if (!refereeName) {errors.refereeName = 'referee Name is required';isValid=false}
  //   if (!refereeEmail) errors.refereeEmail = 'referee Email is required';
  //   if (!course) {errors.course = 'course is required';isValid=false}
  //   if (!message) {errors.message = 'message is required';isValid=false}
  //   setErrors(errors);
  //   return isValid;
  // };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!validate()) return;
    const formData = {
      referrerName,
      referrerEmail,
      refereeName,
      refereeEmail,
      course,
      message
    };
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:3000/referral', formData);
      console.log('Referral submitted successfully:', response.data);
      setReferrerName("");
      setReferrerEmail("");
      setRefereeName("");
      setRefereeEmail("");
      setCourse("");
      setMessage("");
      handleClose();
    } catch (error) {
      console.error('Error submitting referral:', error);
    }
  };
  return (
    <div>
      <div className="flex gap-10 p-4 justify-between mx-20">
        <div className="flex gap-5">
          <div className="overflow-hidden h-12">
          <img src="logo.png" alt="" />
          </div>
          <div className="flex items-center">
          <Button variant="contained">Courses</Button>
          </div>
        </div>
        <div className="flex gap-5">
          <Button variant="text">refer and earn</Button>
          <Button variant="text">resources</Button>
          <Button variant="text">About us</Button>
          <Button variant="outlined">login</Button>
          <Button variant="contained">try for free</Button>
        </div>
      </div>
      <div className="h-screen w-screen flex justify-center mt-[10vh]">
      <div className="flex justify-end h-[60vh] w-[50vw] shadow-2xl rounded-3xl" style={{background:"rgba(238, 245, 255, 1)"}}>
      <div className="flex flex-col justify-center items-center w-[20vw]">
            <div>
            <div className="m-4">
            <h1 className="font-bold" style={{fontSize:"50px"}}>Let's Learn & Earn</h1>
            <h4 className="text-2xl mr-2">Get a chance to win up-to <span className="font-bold text-blue-600 text-2xl">Rs. 15,000</span> </h4>
            </div>
            <div className="ml-5">
              <Button variant="outlined" onClick={handleOpen}>Open modal</Button>
              <Modal
                open={open}
                onClose={handleClose}
              >
                <Box sx={style}>
                  <form onSubmit={handleSubmit} method="post">
                  <Box display="flex"
                    flexDirection="column"
                    gap={3}
                  >
                    <h1 className="text-2xl font-semibold">Enter the Details</h1>
                    <TextField id="referrerName" name="referrerName" label="Referrer Name" variant="outlined" onChange={(e) => setReferrerName(e.target.value)} />
                    {/* {errors.referrerName && <span className="my-0 text-sm" style={{ color: 'red'}}>{errors.referrerName}</span>} */}
                    <TextField id="referrerEmail" name="referrerEmail" label="Referrer Email" variant="outlined" onChange={(e) => setReferrerEmail(e.target.value)} />
                    {/* {errors.referrerEmail && <span className="text-sm" style={{ color: 'red' }}>{errors.referrerEmail}</span>} */}
                    <TextField id="refereeName" name="refereeName" label="Referee Name" variant="outlined" onChange={(e) => setRefereeName(e.target.value)} />
                      {/* {errors.refereeName && <span className="text-sm" style={{ color: 'red' }}>{errors.refereeName}</span>} */}
                    <TextField id="refereeEmail" name="refereeEmail" label="Referee Email" variant="outlined" onChange={(e) => setRefereeEmail(e.target.value)} />
                    {/* {errors.refereeEmail && <span className="text-sm" style={{ color: 'red' }}>{errors.refereeEmail}</span>} */}
                    <TextField id="course" name="course" label="Course" variant="outlined" onChange={(e) => setCourse(e.target.value)} />
                      {/* {errors.course && <span className="text-sm" style={{ color: 'red' }}>{errors.course}</span>} */}
                    <TextField id="message" name="message" label="Message" variant="outlined" onChange={(e) => setMessage(e.target.value)} />
                      {/* {errors.message && <span className="text-sm" style={{ color: 'red' }}>{errors.message}</span>} */}
                    <Button type="submit" >refer</Button>
                  </Box>
                  </form>
                </Box>
              </Modal>
            </div>
            </div>
        </div>
        <div className="overflow-hidden w-[33vw]">
          <img className="" src="image1.png" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
