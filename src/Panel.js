import React, { useState, useEffect } from "react";
import { Form, Slider, Input, Button, Select, Row, Col, message } from "antd";
import "./Panel.css";
import { loadInterval, loadResolution, loadQuery, loadAnimation } from "./util";
import { animations, resolutions } from "./data";

function Panel(props) {
  const { onClosePanel } = props;

  const onFinish = (values) => {
    console.log(values);
    for (let key in values) {
      if (values[key] !== undefined && values[key] !== null) {
        localStorage.setItem(key, values[key]);
      }
      onClosePanel();
    }
    window.location.reload(false);
  };

  const onClickCancel = () => {
    onClosePanel();
  };

  const intervals = {
    5: "5",
    30: "30",
    60: "60",
  };

  return (
    <div className="panel">
      <Form className="options" layout="vertical" onFinish={onFinish}>
        <Form.Item name="resolution" label="Resolution">
          <Select
            showSearch
            optionFilterProp="children"
            defaultValue={loadResolution()}
          >
            {resolutions.map((ratio) => (
              <Select.OptGroup label={ratio.label}>
                {ratio.items.map((item) => (
                  <Select.Option value={item.value}>{item.label}</Select.Option>
                ))}
              </Select.OptGroup>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="query" label="Search">
          <Select
            mode="tags"
            placeholder={"Input and Enter"}
            tokenSeparators={[","]}
            defaultValue={loadQuery() === "" ? [] : loadQuery().split(",")}
          ></Select>
        </Form.Item>
        <Form.Item name="animation" label="Animation">
          <Select
            showSearch
            optionFilterProp="children"
            defaultValue={loadAnimation()}
          >
            {animations.map((animation) => (
              <Select.OptGroup label={animation.label}>
                {animation.items.map((item) => (
                  <Select.Option value={item.value}>{item.label}</Select.Option>
                ))}
              </Select.OptGroup>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="interval" label="Interval">
          <Slider
            marks={intervals}
            min={5}
            max={60}
            defaultValue={loadInterval()}
          />
        </Form.Item>
        <Form.Item>
          <Button size="small" onClick={onClickCancel}>
            Cancel
          </Button>
          <Button size="small" type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Panel;
