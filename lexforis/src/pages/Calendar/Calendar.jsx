import React, { useState, useRef } from 'react';
import { Calendar, Badge, Row, Col, Modal, Table, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Select, DatePicker } from 'antd';  // Ensure these are imported
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const { Option } = Select;
// Sample data for calendar events

// table data
const data = [
  {
    key: '1',
    title: 'Evento de la compañía asociado a la gestión de modelos',
    notes: 'Notas',
    startDate: '11/06/2021',
    endDate: '11/06/2021',
    origin: 'Compañía',
  },
  {
    key: '2',
    title: 'Evento de la compañía asociado al servicio de modelos',
    notes: 'Notaseqweqw',
    startDate: '03/06/2021',
    endDate: '03/06/2021',
    origin: 'Compañía',
  },
  {
    key: '3',
    title: 'Vence el plazo de presentación del modelo 210',
    notes: 'El modelo 210 es un modelo muy bueno',
    startDate: '11/06/2021',
    endDate: '11/06/2021',
    origin: 'Sistema',
  },
];
// Define columns for the table
const columns = [
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => (
      <div>
        <div>{text}</div>
        <div style={{ color: '#777', fontSize: '12px' }}>{record.notes}</div>
      </div>
    ),
  },
  {
    title: 'Fecha comienzo',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'Fecha fin',
    dataIndex: 'endDate',
    key: 'endDate',
  },
  {
    title: 'Origen',
    dataIndex: 'origin',
    key: 'origin',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button icon={<DeleteOutlined />} />
        <Button icon={<EditOutlined />} />
      </div>
    ),
  },
];
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
      <h6 style={{ margin: 0, width: '120px', textAlign: 'center' }}>{currentMonth}</h6>
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

  // States to control visibility of each modal
  const [isSystemModalVisible, setIsSystemModalVisible] = useState(false);
  const [isLexforisModalVisible, setIsLexforisModalVisible] = useState(false);
  const [isAccountingModalVisible, setIsAccountingModalVisible] = useState(false);
  const [isModelManagementModalVisible, setIsModelManagementModalVisible] = useState(false);
  // Handlers for opening each modal
  const handleSystemModalOpen = () => setIsSystemModalVisible(true);
  const handleLexforisModalOpen = () => setIsLexforisModalVisible(true);
  const handleAccountingModalOpen = () => setIsAccountingModalVisible(true);
  const handleModelManagementModalOpen = () => setIsModelManagementModalVisible(true);

  const handleModalClose = () => {
    setIsSystemModalVisible(false);
    setIsLexforisModalVisible(false);
    setIsAccountingModalVisible(false);
    setIsModelManagementModalVisible(false);
  };
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
          <Col span={6}>
            <Badge
              status="warning"
              text="Eventos del sistema"
              style={{ cursor: 'pointer' }}
              onClick={handleSystemModalOpen}
            />
          </Col>
          <Col span={6}>
            <Badge
              status="success"
              text="Lexforis"
              style={{ cursor: 'pointer' }}
              onClick={handleLexforisModalOpen}
            />
          </Col>
          <Col span={6}>
            <Badge
              status="processing"
              text="Contabilidad"
              style={{ cursor: 'pointer' }}
              onClick={handleAccountingModalOpen}
            />
          </Col>
          <Col span={6}>
            <Badge
              status="error"
              text="Gestión de modelos"
              style={{ cursor: 'pointer' }}
              onClick={handleModelManagementModalOpen}
            />
          </Col>
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
            width: '90%',
            maxWidth: '600px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            border: '2px solid #0078D7',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            overflowY: 'auto',
            maxHeight: '80vh',
          }}
        >
          <h3>Event Details</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {modalContent.map((item, index) => (
              <li
                key={index}
                onClick={() => handleEventClick(item)}
                style={{
                  marginBottom: '10px',
                  padding: '15px',
                  border: '1px solid #0078D7',
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9',
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
          <button
            onClick={() => setIsModalVisible(false)}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#0078D7',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      )}
      {/* Detailed modal for clicked event */}
      <Modal
        title="Event Details"
        visible={isDetailModalVisible}
        onCancel={() => setIsDetailModalVisible(false)}
        footer={null}

      >
        {/* Dropdown Select */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="eventType">Select Event Type:</label>
          <Select
            id="eventType"
            style={{ width: '100%' }}
            placeholder="Select event type"
            onChange={(value) => console.log("Selected Event Type:", value)} // You can update state or handle the change here
          >
            <Option value="system">System Event</Option>
            <Option value="personal">Personal Event</Option>
            <Option value="other">Other Event</Option>
          </Select>
        </div>
        {/* 2ND Dropdown Select */}
        <div style={{ marginBottom: '10px', position: 'relative', zIndex: 1000 }}>
          <label htmlFor="eventType">Select Event Type:</label>
          <Select
            id="eventType"
            style={{ width: '100%' }}
            placeholder="Select event type"
            onChange={(value) => console.log("Selected Event Type:", value)}  // Handle selection
            getPopupContainer={(trigger) => trigger.parentElement}  // Ensures dropdown is rendered within parent container
          >
            <Option value="system">System Event</Option>
            <Option value="personal">Personal Event</Option>
            <Option value="other">Other Event</Option>
          </Select>
        </div>
        {/* Calendar Input */}
        <div style={{ display: "flex", gap: "10px" }}>
          <div >
            <label htmlFor="eventDate">Select Event Date:</label>
            <DatePicker
              id="eventDate"
              style={{ width: '100%' }}
              onChange={(date, dateString) => console.log("Selected Date:", dateString)}  // Handle date selection
            />
          </div>
          {/*  */}
          <div >
            <label htmlFor="eventDate">Select Event Date:</label>
            <DatePicker
              id="eventDate"
              style={{ width: '100%' }}
              onChange={(date, dateString) => console.log("Selected Date:", dateString)}  // Handle date selection
            />
          </div>
        </div>
        <div style={{ marginTop: '10px' }} >
          <label htmlFor="eventDate">Select Event Date:</label>
          <DatePicker
            id="eventDate"
            style={{ width: '100%' }}
            onChange={(date, dateString) => console.log("Selected Date:", dateString)}  // Handle date selection
          />
        </div>
        {/*  */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '5px', marginTop: '20px' }}>
          <button style={{ padding: '10px 15px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '5px' }}>Cancel</button>
          <button style={{ padding: '10px 15px', backgroundColor: '#0078D7', color: '#fff', border: 'none', borderRadius: '5px' }}>Submit</button>
        </div>
        {/* Display selected event content (if any) */}
        {/* <p>{selectedEvent ? selectedEvent.content : ''}</p> */}
      </Modal>
      {/* Individual Modals for each badge */}
      <Modal
        title="Eventos del sistema"
        visible={isSystemModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={800} // Adjust the width for better table visibility

      >
        <div style={{ backgroundColor: '#fff', borderRadius: 8 }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
        </div>
      </Modal>

      <Modal
        title="Lexforis"
        visible={isLexforisModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={800} // Adjust the width for better table visibility

      >
        <div style={{ backgroundColor: '#fff', borderRadius: 8 }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
        </div>
      </Modal>

      <Modal
        title="Contabilidad"
        visible={isAccountingModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={800} // Adjust the width for better table visibility

      >
        <div style={{ backgroundColor: '#fff', borderRadius: 8 }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
        </div>
      </Modal>

      <Modal
        title="Gestión de modelos"
        visible={isModelManagementModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={800} // Adjust the width for better table visibility

      >
        <div style={{ backgroundColor: '#fff', borderRadius: 8 }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
        </div>
      </Modal>

    </div>
  );
};

export default MyCalendar;
