import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import { Form } from "./Form/Form";
import { required } from "../../utils/validation";

const AddCustomerDialog = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        เพิ่มลูกค้า
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>เพิ่มลูกค้า</DialogTitle>
        <Form onSubmit={handleSubmit}>
          {({ form }) => {
            return (
              <div>
                <DialogContent>
                  <Form.TextField
                    name="name"
                    label="ชื่อ"
                    validate={required("โปรดระบุชื่อ")}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>ยกเลิก</Button>
                  <Button type="submit">เพิ่ม</Button>
                </DialogActions>
              </div>
            );
          }}
        </Form>
      </Dialog>
    </div>
  );
};

export default AddCustomerDialog;
