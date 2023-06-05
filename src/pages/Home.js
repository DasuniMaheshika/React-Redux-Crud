import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUser } from "../redux/actions";
import {useNavigate} from 'react-router-dom';

export default function Home() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure wanted to delete the user? ")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div>
      <h1>React Redux Crud App</h1>
      <Button
        style={{ marginTop: "5px" }}
        variant="contained"
        aria-label="outlined primary button group"
        color="primary"
        onClick={() => navigate("/addUser")}
      >
        Add User
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} style={{ marginTop: "15px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Contact</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.contact}</TableCell>
                  <TableCell align="center">{user.address}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button style={{ marginRight: "5px" }} color="success" onClick={() => navigate(`/editUser/${user.id}`)}>
                        Edit
                      </Button>
                      <Button
                        color="error"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
