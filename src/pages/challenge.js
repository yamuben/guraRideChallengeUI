import React, { useEffect, useState } from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { message } from "antd";
import axios from "axios";
import data from "../assets/data.json";

const Challenge = () => {
  useEffect(() => {
    const check = async () => {
      const response = await axios.post("http://localhost:9090/check", {
        device1: data[0],
        device2: data[1],
      });

      console.log(response);
      message.success("Device A: " + response.data.message1);
      message.success("Device B: " + response.data.message2);
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
        {data.map((d) => (
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
            {d.deviceName}{" "}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Challenge;
