import React, { useState, useEffect } from "react";
import { Form, Slider, Input, Button, Select, Row, Col, message } from "antd";
import "./Panel.css";
import { loadInterval, loadResolution, loadQuery } from "./util";

function Panel(props) {
  const { onClosePanel } = props;

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

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
            listHeight={512}
            showSearch
            optionFilterProp="children"
            onChange={onChange}
            defaultValue={loadResolution()}
          >
            <Select.OptGroup label="4:3">
              <Select.Option value="640x480">640 x 480</Select.Option>
              <Select.Option value="960x720">960 x 720</Select.Option>
              <Select.Option value="1280x960">1280 x 960</Select.Option>
              <Select.Option value="1440x1080">1440 x 1080</Select.Option>
              <Select.Option value="1600x1200">1600 x 1200</Select.Option>
              <Select.Option value="1920x1440">1920 x 1440</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup label="16:9">
              <Select.Option value="1280x720">1280 x 720</Select.Option>
              <Select.Option value="1600x900">1600 x 900</Select.Option>
              <Select.Option value="1920x1080">1920 x 1080</Select.Option>
              <Select.Option value="2560x1440">2560 x 1440</Select.Option>
              <Select.Option value="3840x2160">3840 x 2160</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup label="16:10">
              <Select.Option value="1280x800">1280 x 800</Select.Option>
              <Select.Option value="1440x900">1440 x 900</Select.Option>
              <Select.Option value="1680x1050">1680 x 1050</Select.Option>
              <Select.Option value="1920x1200">1920 x 1200</Select.Option>
              <Select.Option value="2560x1600">2560 x 1600</Select.Option>
            </Select.OptGroup>
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
