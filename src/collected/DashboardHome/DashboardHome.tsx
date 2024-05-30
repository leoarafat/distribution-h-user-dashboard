import { Col, Row } from "antd";
import React, { useEffect } from "react";
import "./DashboardHome.css";

import DailyRentChart from "./DailyRentChart";

function DashboardHomes() {
  const data = [];

  return (
    <div>
      <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>Booking Status</h1>

      <Row style={{ marginTop: "20px" }} gutter={24}>
        <Col lg={{ span: 24 }}>
          <DailyRentChart data={data} />
        </Col>
      </Row>
    </div>
  );
}

export default DashboardHomes;
