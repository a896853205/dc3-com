import React from "react";

import TMap from "../map";
import EnergyChart from "../Energy-monitor";
import UpsChart from "../ups";
import UTagChart from "../utag";
import RateChart from "../rate-monitor";

import "./style.css";

export default () => (
  <div className="outter-container">
    <div className="col12 item-box">多选框</div>
    <div className="col3 item-box">
      <ul>
        <li>
          <UTagChart />
        </li>
        <li>
          <RateChart />
        </li>
        <li>
          <EnergyChart />
        </li>
        <li>
          <UpsChart />
        </li>
      </ul>
    </div>
    <div className="col6">
      <div className="item-box">总览</div>
      <div className="item-box">
        <TMap />
      </div>
    </div>
    <div className="col3 item-box">
      <div>告警走势</div>
    </div>
  </div>
);
