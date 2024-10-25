import { margin } from '@mui/system';
import React, { useState } from 'react';
import SidbarTable from './SidbarTable';

const Services = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

    // CSS variables defined as JavaScript objects
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center', // Center cards horizontally
            alignItems: 'center', // Center cards vertically
            height: '50vh', // Full viewport height
            gap: '20px', // Space between cards
        },
        card: {
            backgroundColor: '#f8f9fa', // Light background for the card
            border: '1px solid #ccc', // Border for the card
            borderRadius: '8px', // Rounded corners
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
            width: '280px', // Fixed width for the card
            cursor: 'pointer', // Change cursor to pointer for click indication
        },
        sidebar: {
            position: 'fixed',
            right: '0',
            top: '28px',
            width: '50%',
            height: '100%',
            backgroundColor: '#fff',
            boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.5)',
            transition: 'transform 0.3s ease-in-out',
            transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)', // Slide in/out
            zIndex: 1000, // High z-index for the sidebar
        },
        backdrop: {
            display: isSidebarOpen ? 'block' : 'none', // Show/hide backdrop
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999, // Lower than the sidebar
        },
    };

    const handleCardClick = () => {
        setSidebarOpen(true); // Open sidebar on card click
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false); // Close sidebar
    };

    return (
        <div>
            <div style={styles.container}>
                <div style={styles.card} onClick={handleCardClick}>
                    <div style={{ backgroundColor: "blue", padding: "15px", borderTopLeftRadius: "5px", color: "white", borderTopRightRadius: "5px" }}>
                        <p style={{ marginBottom: "0", marginTop: "0" }}>Contaibiilibad</p>
                        <p style={{ marginBottom: "0", marginTop: "0" }}> Active <span>19/09/2023</span></p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p style={{ padding: "20px" }}>Service Online </p>
                    </div>
                    <hr />
                    <div style={{ textAlign: "center", padding: "20px" }}>
                        <button style={{ padding: '8px', backgroundColor: '#0078D7', color: '#fff', border: 'none', borderRadius: '5px' }}>Submit</button>
                    </div>
                </div>

                <div style={styles.card}>
                    <div style={{ backgroundColor: "blue", padding: "15px", borderTopLeftRadius: "5px", color: "white", borderTopRightRadius: "5px" }}>
                        <p style={{ marginBottom: "0", marginTop: "0" }}>Contaibiilibad</p>
                        <p style={{ marginBottom: "0", marginTop: "0" }}> Active <span>19/09/2023</span></p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p style={{ padding: "20px" }}>Service Online </p>
                    </div>
                    <hr />
                    <div style={{ textAlign: "center", padding: "20px" }}>
                        <button style={{ padding: '8px', backgroundColor: '#0078D7', color: '#fff', border: 'none', borderRadius: '5px' }}>Submit</button>
                    </div>
                </div>
            </div>

            {/* Backdrop to dim the background when sidebar is open */}
            <div style={styles.backdrop} onClick={handleCloseSidebar}></div>

            {/* Sidebar */}
            <div style={styles.sidebar}>
                <SidbarTable handleCloseSidebar={handleCloseSidebar} /> {/* Pass function as prop */}
            </div>
        </div>
    );
}

export default Services;
