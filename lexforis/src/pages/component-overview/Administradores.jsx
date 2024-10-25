import React, { useState } from 'react';
import { Box, Button, Card, } from '@mui/material';
import { MdAdminPanelSettings } from "react-icons/md";
import { LuListFilter } from "react-icons/lu";
import { RiFileSearchFill } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";

import './admini.css'

const Administradores = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>

            <div className='d-flex justify-content-between'>
                <div className="d-flex align-items-center">
                    <MdAdminPanelSettings className="me-2" size={30} />
                    <span className='fw-bold fs-4'>Administradores</span>
                </div>

                <div>
                    <Button variant="contained" className='bg-primary' onClick={toggleSidebar}>
                        <MdAdminPanelSettings className="me-2" />   Anadir</Button>
                </div>

            </div>

            {/* Right Sidebar */}
            {isSidebarOpen && (
                <div className="right-sidebar">

                    <div onClick={toggleSidebar} className='d-flex justify-content-end'>
                    <IoCloseCircle size={30} style={{ fontSize: '30px', cursor: 'pointer' }} />                    </div>

                    <div className="sidebar-content">
                        <form>
                            <div className="mb-3">
                                <label>Firstname</label>
                                <input type="text" className="form-control" placeholder="firstname *" />
                            </div>
                            <div className="mb-3">
                                <label>Lastname</label>
                                <input type="text" className="form-control" placeholder="lastname *" />
                            </div>
                            <div className="mb-3">
                                <label>phone</label>
                                <input type="text" className="form-control" placeholder="phone *" />
                            </div>
                            <div className="mb-3">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="email *" />
                            </div>
                            <Button variant="contained" type="submit" className='d-flex justify-content-center' style={{marginLeft:"20%"}}>
                                pages.employee.submit_new_employee
                            </Button>
                        </form>
                    </div>
                </div>
            )}

            <Card className='mt-2'>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID<LuListFilter /></th>
                            <th scope="col">Nombre</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td></td>
                            <td ><RiFileSearchFill size={20} /></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td></td>
                            <td ><RiFileSearchFill size={20} /></td>
                        </tr>

                    </tbody>
                </table>
            </Card>
        </div>
    )
}

export default Administradores
