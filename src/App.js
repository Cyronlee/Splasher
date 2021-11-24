import { Button, Drawer } from "antd";
import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Panel from "./Panel";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="App">
      <Drawer
        title="Options"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Panel onClosePanel={onClose} />
      </Drawer>
      <div className="gallery" onClick={showDrawer}>
        <Gallery />
        <div className="welcome">
          <p>Splasher</p>
        </div>
      </div>
    </div>
  );
}

export default App;
