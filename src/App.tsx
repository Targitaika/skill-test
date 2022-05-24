import React, { useState } from 'react';
import './App.css';
import { Layout, Row, Col } from 'antd';
import Map from './components/Map';
import 'antd/dist/antd.css';
import TableBlock from './components/Table';

function App() {
  const [isDraggable, setIsDraggable] = useState(false);
  const [leftWidth, setLeftWidth] = useState(12);
  const [rightWidth, setRightWidth] = useState(12);

  function customDraggable(e) {
    if (e.target.classList[0] === 'dragging') {
      e.preventDefault();
      setIsDraggable(true);
    }
  }

  function mouseMove(e) {
    const drag = document.getElementsByClassName('dragging')[0];
    if (isDraggable) {
      const { innerWidth } = window;
      const widthOfColumns = Math.round(innerWidth / 24);
      let leftColumnsAfter = Math.round(e.clientX / widthOfColumns);
      let rightColumnsAfter = Math.round((innerWidth - e.clientX) / widthOfColumns);

      if (leftColumnsAfter < 6) {
        leftColumnsAfter = 6;
        rightColumnsAfter = 16;
      }
      if (rightColumnsAfter < 6) {
        rightColumnsAfter = 6;
        leftColumnsAfter = 16;
      }
      // @ts-ignore
      drag.style.left = `${widthOfColumns * leftColumnsAfter - 5}px`;

      setLeftWidth(leftColumnsAfter);
      setRightWidth(rightColumnsAfter);
    }
  }

  return (
    <div
      className="App"
      onMouseDown={(e) => customDraggable(e)}
      onMouseUp={() => setIsDraggable(false)}
      onMouseMove={(e) => mouseMove(e)}
    >
      <Layout>
        <Row gutter={[16, 16]}>
          <Col span={leftWidth}>
            <TableBlock />
          </Col>
          <div
            className="dragging"
          />
          <Col span={rightWidth}>
            <Map />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
