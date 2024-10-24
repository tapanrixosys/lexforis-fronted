import React, { useState, useRef } from 'react';
import { Calendar, Badge, Row, Col, Modal } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// Sample data for calendar events
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 2:
      listData = [
        { type: 'warning', content: 'Eventos del sistema' },
        { type: 'success', content: 'Lexforis' },
      ];
      break;
    case 3:
      listData = [
        { type: 'processing', content: 'Contabilidad' },
      ];
      break;
    case 10:
      listData = [
        { type: 'processing', content: 'Lexforis' },
      ];
      break;
    case 17:
      listData = [
        { type: 'success', content: 'Gestión de modelos' },
        { type: 'error', content: 'Eventos del sistema' },
      ];
      break;
    default:
      listData = [];
  }
  return listData || [];
};

// Function to render events as colored dots
const dateCellRender = (value, handleDotClick) => {
  const listData = getListData(value);
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', marginTop: '50px' }}>
      {listData.map((item, index) => (
        <li key={index} style={{ display: 'inline-block', marginRight: 5 }}>
          <Badge 
            status={item.type} 
            onClick={(e) => handleDotClick(listData, e)} // Pass event to capture click position
            style={{ cursor: 'pointer' }} 
          />
        </li>
      ))}
    </ul>
  );
};

// Custom header with month/year navigation using icons
const headerRender = ({ value, onChange }) => {
  const currentMonth = value.format('MMMM YYYY');

  const handlePrevMonth = () => {
    const newValue = value.clone().subtract(1, 'month');
    onChange(newValue);
  };

  const handleNextMonth = () => {
    const newValue = value.clone().add(1, 'month');
    onChange(newValue);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '10px 0', width: "200px", margin: "0 auto" }}>
      <LeftOutlined onClick={handlePrevMonth} style={{ fontSize: '16px', cursor: 'pointer' }} />
      <h3 style={{ margin: 0, width: '130px', textAlign: 'center' }}>{currentMonth}</h3>
      <RightOutlined onClick={handleNextMonth} style={{ fontSize: '16px', cursor: 'pointer' }} />
    </div>
  );
};

// Main calendar component
const MyCalendar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const modalRef = useRef(null);

  // Function to handle dot click and calculate position
  const handleDotClick = (listData, event) => {
    const rect = event.target.getBoundingClientRect(); // Get position of clicked element
    setModalContent(listData);
    setModalPosition({
      top: rect.top + window.scrollY + 30, // Adjust position slightly below the dot
      left: rect.left + window.scrollX - 150, // Adjust to center the modal
    });
    setIsModalVisible(true);
  };

  // Function to handle event item click
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsDetailModalVisible(true); // Open detailed modal for clicked event
  };

  return (
    <div style={{ padding: 20, backgroundColor: '#fff', borderRadius: 8 }}>
      {/* Legend for event categories */}
      <div style={{ marginBottom: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
        <Row gutter={16}>
          <Col span={6}><Badge status="warning" text="Eventos del sistema" /></Col>
          <Col span={6}><Badge status="success" text="Lexforis" /></Col>
          <Col span={6}><Badge status="processing" text="Contabilidad" /></Col>
          <Col span={6}><Badge status="error" text="Gestión de modelos" /></Col>
        </Row>
      </div>

      {/* Calendar with custom header and cell rendering */}
      <Calendar 
        dateCellRender={(value) => dateCellRender(value, handleDotClick)} 
        headerRender={headerRender} 
      />

      {/* Modal for event list */}
      {isModalVisible && (
  <div
    ref={modalRef}
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      width: '100%',  // Full width of the page
      maxWidth: '1200px',  // Optional: max width to limit modal size
      transform: 'translate(-50%, -50%)',  // Center the modal
      backgroundColor: '#fff',  // Modal background color
      border: '1px solid #0078D7',  // Border color
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Box shadow for better visibility
      zIndex: 1000,  // Ensure modal appears above other elements
      marginTop:"100px"

    }}
  >
    <h3>Event Details</h3>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {modalContent.map((item, index) => (
        <li 
          key={index} 
          onClick={() => handleEventClick(item)}  // Handle click on event
          style={{ 
            marginBottom: '10px', 
            padding: '15px', 
            border: '2px solid #0078D7', 
            borderRadius: '8px', 
            backgroundColor: '#fff', 
            display: 'flex', 
            alignItems: 'center', 
            // justifyContent: 'space-between', 
            fontSize: '16px', 
            cursor: 'pointer', 
          }}
        >
          <Badge status={item.type} />
          <span style={{ marginLeft: '10px' }}>{item.content}</span>
        </li>
      ))}
    </ul>
    <button onClick={() => setIsModalVisible(false)} style={{ marginTop: '10px' }}>Close</button>
  </div>
)}


      {/* Detailed modal for clicked event */}
      <Modal
        title="Event Details"
        visible={isDetailModalVisible}
        onCancel={() => setIsDetailModalVisible(false)}
        footer={null}
      >
        <p>{selectedEvent ? selectedEvent.content : ''}</p>
      </Modal>
    </div>
  );
};

export default MyCalendar;
