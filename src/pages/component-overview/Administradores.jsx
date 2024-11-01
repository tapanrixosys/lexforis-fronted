import React, { useState } from 'react';
import { Box, Button, Card, } from '@mui/material';
import { MdAdminPanelSettings } from "react-icons/md";
import { LuListFilter } from "react-icons/lu";
import { RiFileSearchFill } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";
import { InputGroup, FormControl } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";


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
                        <IoCloseCircle size={30} style={{ fontSize: '30px', cursor: 'pointer' }} /></div>

                    <div className="sidebar-content">
                        <form>
                            <div className="mt-4">
                                <InputGroup  size="lg" className="mb-3">
                                    <InputGroup.Text>
                                        <FaUser />
                                    </InputGroup.Text>
                                    <FormControl placeholder=" firstname" />
                                </InputGroup>
                            </div>
                            <div className="mt-4"  >
                                <InputGroup   size="lg" className="mb-3">
                                    <InputGroup.Text>
                                        <FaUser />
                                    </InputGroup.Text>
                                    <FormControl placeholder=" last name" />
                                </InputGroup>
                            </div>
                            <div className="mt-4">
                                <InputGroup  size="lg" className="mb-3" >
                                    <InputGroup.Text>
                                        <IoCall />
                                    </InputGroup.Text>
                                    <FormControl placeholder="number" />
                                </InputGroup>
                            </div>
                            <div className="mt-4">
                                <InputGroup  size="lg" className="mb-3">
                                    <InputGroup.Text>
                                        <MdEmail />
                                    </InputGroup.Text>
                                    <FormControl placeholder="email" />
                                </InputGroup>
                            </div>
                            <Button variant="contained" type="submit" className='d-flex justify-content-center' style={{ marginLeft: "20%" }}>
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
