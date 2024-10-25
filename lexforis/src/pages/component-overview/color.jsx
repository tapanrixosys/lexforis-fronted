import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './client.css';

export default function ComponentColor() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/client-information');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log('Client name:', name);
    console.log('Client email:', email);
    setOpen(false);
  };

  return (
    <div>
      <div className="header">
        <input type="text" placeholder="Search here" className="search-box" />
        <button className="new-client-btn" onClick={handleClickOpen}>
          <UserOutlined style={{ marginRight: '8px' }} />
          New Client
        </button>
      </div>

      <table className="client-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Forma</th>
            <th>Servicios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>asd asd</td>
            <td>
              <span className="badge fisica">Física</span>
            </td>
            <td>
              <button className="services-btn">+</button>
            </td>
          </tr>
          <tr>
            <td>ASDASD Blekacemi</td>
            <td>
              <span className="badge fisica">Física</span>
            </td>
            <td>
              <button className="services-btn">+</button>
            </td>
          </tr>
          <tr>
            <td>Jose Jose</td>
            <td>
              <span className="badge fisica">Física</span>
            </td>
            <td>
              <button className="services-btn">+</button>
            </td>
          </tr>
          <tr>
            <td>CETA IT</td>
            <td>
              <span className="badge juridica">Jurídica</span>
            </td>
            <td>
              <button className="services-btn">C</button>
              <button className="services-btn ml-4" onClick={handleNavigate}>+</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Modal for adding a new client */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Client</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Full Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField margin="dense" label="Email Address" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}