import React, { useEffect, useState } from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { message,notification } from "antd";
import axios from "axios";
import data from "../assets/data.json";

const Challenge = () => {
  const [res,setRes]=useState({});
  useEffect(() => {
    const check = async () => {
      const response = await axios.post("http://localhost:9090/check", {
        device1: data[0],
        device2: data[1],
      });

      console.log(response);
      setRes(response.data);

    };
    check();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "black",
        padding: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "white",
          height: "500px",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        {data.map((d,index) => (
          <label
            style={{
              color: "blue",
              fontSize: "25px",
              margin: `${d.location[0]}% ${d.location[1]}%`,
              textAlign: "center",
              position: "absolute",
            }}
          >
            {" "}
            <EnvironmentOutlined /> <br />
            {d.deviceName}{" "} <br/>
            <label style={{fontSize:"13px",color:"green"}}> {index===0?res.message1:res.message2}</label>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Challenge;
