import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../redux/actions";
import { updateUser } from "../redux/actions";

const EditUser = () => {
  let { id } = useParams();
  const {user} = useSelector((state) => state.data);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;

  useEffect(() => {
    dispatch(getSingleUser(id))
  }, []);

  useEffect(() => {
    if(user){
        setState({...user});
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !contact) {
      setError("Please fill all input fields.");
    } else {
      dispatch(updateUser(state, id));
      navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <h2>Edit user</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={name || ""}
          name="name"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          value={email || ""}
          name="email"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          variant="standard"
          value={contact || ""}
          name="contact"
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          value={address || ""}
          name="address"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <Button
          style={{ marginTop: "5px" }}
          variant="contained"
          aria-label="outlined primary button group"
          color="success"
          type="submit"
          onChange={handleInputChange}
        >
          Update
        </Button>
        <br />
        <Button
          style={{ marginTop: "5px" }}
          variant="contained"
          aria-label="outlined primary button group"
          color="primary"
          type="submit"
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
      </Box>
    </div>
  );
};

export default EditUser;
