import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useLoginStyle } from "./Login.style";
import store from "../../assets/images/store.png";
import group from "../../assets/images/Group.png";
import Views from "../pages.css";
import { Link } from "react-router-dom";
import { MdRememberMe } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { Form, Input } from "antd";

import "antd/dist/antd.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "red",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
// const HorizontalLoginForm = () => {
// const [Form] = Form.useForm();
// };
const onFinish = (values) => {
  console.log("Finish:", values);
};
export default function BasicGrid() {
  const classes = useLoginStyle();
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        background:
          "linear-gradient(90deg, rgba(50,161,209,1) 6%, rgba(255,255,255,1) 43%)",
        height: "100vh",
        position: "fixed",
        width: "100%",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={7} style={{ padding: "110px 0px", height: "100vh" }}>
          <img src={store} alt="" style={{ width: "90%" }} />;
        </Grid>
        <Grid
          item
          xs={3}
          style={{ padding: "150px 0px 0px 0px ", height: "100vh" }}
        >
          <div className="Home_Login">
            <div className="groupPhoto">
              <img src={group} alt="" style={{ width: "100px" }} />
            </div>

            <span className="kwaco"> KWACO</span>
            <div className="Kivu"> Kivu Warehousing Company Ltd</div>
            <div>
              <Form.Item
                name="Phone Number"
                style={{ width: "100%" }}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  prefix={
                    <BsFillTelephoneFill className="site-form-item-icon" />
                  }
                  placeholder="Phone Number"
                />
              </Form.Item>
              <Form.Item
                name="Password"
                style={{ width: "100%" }}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  prefix={
                    <RiLockPasswordFill className="site-form-item-icon" />
                  }
                  placeholder="Password"
                />
              </Form.Item>

              <div className="words">
                <div>
                  {" "}
                  <MdRememberMe /> Remember me{" "}
                </div>
                <span>Forgot Password?</span>
              </div>
              <Link to="/dashboard">
                <Button variant="contained" className={classes.btn}>
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Box>
  );
}