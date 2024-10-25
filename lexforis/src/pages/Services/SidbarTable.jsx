import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Select, DatePicker } from 'antd';  // Ensure these are imported


const MyModal = ({ visible, onClose }) => {
    // Define the columns and data for the modal table
    const modalColumns = [
        {
            title: 'id',
            dataIndex: 'col1',
            key: 'col1',
        },
        {
            title: 'name',
            dataIndex: 'col2',
            key: 'col2',
        },
        {
            title: 'service',
            dataIndex: 'col3',
            key: 'col3',
            render: (text) => (
                <span
                    style={{
                        display: 'inline-block',
                        backgroundColor: 'gray',
                        color: 'white',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        lineHeight: '30px',
                        textAlign: 'center',
                    }}
                >
                    {text}
                </span>
            ),
        },
    ];

    const modalData = [
        {
            key: '1',
            col1: 'Data 1',
            col2: 'biju',
            col3: '0',
        },
        {
            key: '2',
            col1: 'Data 3',
            col2: 'ashis',
            col3: '0',
        },
        {
            key: '3',
            col1: 'Data 3',
            col2: 'bhabesh',
            col3: '0',
        },
    ];

    return (
        <div>

            <Modal
                visible={visible}
                onCancel={onClose}
                footer={null}
                title="Select Client service"
                width={700}
            >
                <div>
                    <div style={{ width:"200px",marginTop:"10px",marginBottom:"10px" }}>
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

                </div>
                <div style={{ marginTop:"15px" }}>
                <Table columns={modalColumns} dataSource={modalData} pagination={false} />
                </div>

            </Modal>
        </div>
    );
};

const SidbarTable = ({ handleCloseSidebar }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Columns for the first table
    const columns1 = [
        {
            title: 'Header 1',
            dataIndex: 'cell1',
            key: 'cell1',
        },
        {
            dataIndex: 'cell2',
            key: 'cell2',
        },
    ];

    // Sample data for the first table
    const data1 = [
        {
            key: '1',
            cell1: 'Row 1, Cell 1',
            cell2: 'Row 1, Cell 2',
        },
        {
            key: '2',
            cell1: 'Row 2, Cell 1',
            cell2: 'Row 2, Cell 2',
        },
    ];

    // Columns for the second table
    const columns2 = [
        {
            title: 'Division',
            dataIndex: 'cell3',
            key: 'cell3',
        },
        {
            title: 'emparse',
            dataIndex: 'cell4',
            key: 'cell4',
        },
        {
            title: 'emparse333',
            dataIndex: 'cell5',
            key: 'cell5',
            render: (text) => (
                <span
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => setIsModalVisible(true)}
                >
                    {text}
                </span>
            ),
        },
        {
            key: 'cell6',
            render: () => (
                <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => console.log('Delete action triggered')}
                    style={{ color: 'red' }}
                />
            ),
        },
    ];

    // Sample data for the second table
    const data2 = [
        {
            key: '1',
            cell3: 'ashis',
            cell4: 'rixosys',
            cell5: 'clickme',
        },
        {
            key: '2',
            cell3: 'bhabessh',
            cell4: 'Row 2, Cell 4',
            cell5: 'clickme',
        },
    ];

    return (
        <div>
            <div style={{ padding: "20px", backgroundColor: "gray" }}>
                <button
                    onClick={handleCloseSidebar}
                    style={{
                        padding: '8px',
                        backgroundColor: '#0078D7',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        marginTop: "30px",
                        cursor: "pointer"
                    }}
                >
                    Close
                </button>
            </div>
            <div style={{ height: "500px", overflow: "scroll" }}>
                <div style={{ padding: "10px" }}>
                    <Table
                        columns={columns1}
                        dataSource={data1}
                        pagination={{ pageSize: 2 }}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <button
                        style={{
                            padding: '8px',
                            backgroundColor: 'red',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            width: "110px",
                            cursor: "pointer"
                        }}
                    >
                        Disconnect
                    </button>
                    <button
                        style={{
                            padding: '8px',
                            backgroundColor: '#0078D7',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            width: "110px",
                            cursor: "pointer"
                        }}
                    >
                        Editor
                    </button>
                </div>
                <div style={{ padding: "10px" }}>
                    <Table
                        columns={columns2}
                        dataSource={data2}
                        pagination={{ pageSize: 2 }}
                    />
                </div>
                <MyModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />

            </div>
        </div>
    );
};

export default SidbarTable;
