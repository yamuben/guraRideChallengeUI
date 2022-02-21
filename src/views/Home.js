import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useStyle } from "./style";
import store from "./store.png";
import group from "./Group.png";
import Views from "./views.css";
import { MdRememberMe } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import{RiLockPasswordFill} from "react-icons/ri"
import { Form, Input} from "antd";

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
  const classx = useStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div className={classx.paper1}>
            <div className="log">
              <img src={store} alt="" style={{ width: "800px"}} />;
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          {/* <div className="container-2"> */}
          <div className={classx.paper2}>
            <div className="Home_Login">
              <div className="groupPhoto">
                <img src={group} alt="" style={{ width: "100px"}} />
              </div>

              <span className="kwaco"> KWACO</span>
              <div className="Kivu"> Kivu Warehousing Company Ltd</div>
              <div>
                <Form.Item
                  name="Phone Number"
                  style={{ width: "400px" }}
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
                  style={{ width: "400px" }}
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
              <div>
                <input className="submit" type="submit" value="Login" />
              </div>
            </div>
          </div>

      </div>
        </Grid>
      </Grid>
    </Box>
  );
}
