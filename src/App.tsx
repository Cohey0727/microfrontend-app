import React from "react";
import { Link } from "react-router-dom";
import cameraImage from "./images/camera-icon.png";
import calendarImage from "./images/calendar-icon.png";
import fileImage from "./images/file-icon.png";

const apps = [
  {
    icon: cameraImage,
    title: "Camera App",
    link: "/camera",
  },
  {
    icon: calendarImage,
    title: "Calendar App",
    link: "/calendar",
  },
  {
    icon: fileImage,
    title: "File App",
    link: "/file",
  },
];

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: 'url("/bg.jpg")',
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          padding: 32,
          boxSizing: "border-box",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        {apps.map((app) => {
          return (
            <div key={app.link} style={{ padding: "0 16px" }}>
              <Link to={app.link}>
                <img
                  width="100%"
                  src={app.icon}
                  alt={app.title}
                  style={{ borderRadius: 16 }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
