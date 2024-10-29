

import { Card } from '@mui/material'
import React, { useState } from 'react';
import { Button, InputGroup, Form, Badge } from 'react-bootstrap';
import { FaCloudUploadAlt, FaDownload } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown, MdContentCopy, MdDeleteOutline } from 'react-icons/md';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




const Traducciones = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const labels = ['Pages', 'Password', 'App'];
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [isPasswords, setIsPasswords] = useState(false);
    const [isPages, setIsPages] = useState(false);


    const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase());

    const handleToggle = () => {
        setIsInputVisible(!isInputVisible);
    };
    const handleTogglePassword = () => {
        setIsPasswords(!isPasswords);
    };
    const handleTogglePages = () => {
        setIsPages(!isPages);
    };
    const isMatch = (label) => label.toLowerCase().includes(searchTerm);





    return (
        <div className=''>
            <Card>
                <div className='d-flex justify-content-between align-items-center p-4'>
                    <div><p className='fs-4 fw-bold'>Pages.translations.title</p></div>
                    <span>
                        <select class="form-select" aria-label="Default select example" style={{ width: "100px" }}>
                            <option selected>select language</option>
                            <option value="ln">LN</option>
                            <option value="en">EN</option>
                            <option value="hindi">HINDI</option>
                        </select>
                    </span>
                </div>

                <div className='px-4'>
                    <form>
                        <div class="form-group">
                            {/* <label for="formGroupExampleInput">Example label</label> */}
                            <input type="text" class="form-control form-control-lg" id="formGroupExampleInput" placeholder="text" />
                        </div>
                        <div class="form-group mt-2">
                            <label for="formGroupExampleInput2" className='fw-bold'>Description:</label>
                            <textarea class="form-control mt-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                    <div className='d-flex justify-content-end mt-2'>
                        <button type="button" className=' btn btn-primary' >Enviar</button>

                    </div>
                </div>

                <div className="d-flex flex-wrap align-items-center justify-content-between mt-4 p-3 bg-dark text-white">
                    <div className="d-flex  align-items-center mb-2 mb-md-0">
                        <InputGroup className="me-3" style={{ width: '100%', maxWidth: '300px' }}>
                            <Form.Control
                                placeholder="Search"
                                aria-label="Search label name"
                                onChange={handleSearchChange}
                            />
                        </InputGroup>
                        <Badge bg="success" className="me-3 p-2">461 Traducciones</Badge>
                    </div>

                    <div className="d-flex flex-wrap">
                        <Button variant="light" className="me-2 mb-2 mb-md-0">
                            Abrir todas
                        </Button>
                        <Button variant="light" className="me-2 mb-2 mb-md-0">
                            <FaCloudUploadAlt /> Subir Excel
                        </Button>
                        <Button variant="light" className="mb-2 mb-md-0">
                            <FaDownload /> Descarga Excel
                        </Button>
                    </div>
                </div>


                <div>
                    {isMatch('app') && (
                        <div>
                            <label className='fs-bold fs-4 px-4 mt-2'>app</label>
                            <div className="app">
                                {!isInputVisible ? (
                                    <div className='d-flex justify-content-center mt-4' style={{ background: "#F0F0F0" }}>
                                        <MdOutlineKeyboardArrowDown
                                            size={40}
                                            onClick={handleToggle}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </div>
                                ) : (
                                    <Box className='px-4' >

                                        <div>
                                            {[...Array(3)].map((_, index) => (
                                                <div key={index} className="row align-items-center mb-3 gx-3">
                                                    <div className="col-12 col-md-6 d-flex align-items-center">
                                                        <TextField
                                                            id={`key-${index}`}
                                                            label="Key"
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                        <span className="mt-2 ms-2">
                                                            <MdContentCopy size={25} />
                                                        </span>
                                                    </div>
                                                    <div className="col-12 col-md-6 d-flex align-items-center mt-3 mt-md-0">
                                                        <TextField
                                                            id={`text-${index}`}
                                                            label="Text"
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                        <span className="mt-2 ms-2">
                                                            <MdDeleteOutline size={25} className="text-danger" />
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </Box>
                                )}
                            </div>
                        </div>
                    )}

                    {isMatch('passwords') && (
                        <div>
                            <label className='fs-bold fs-4 px-4 mt-2'>Passwords</label>
                            <div className="app">
                                {!isPasswords ? (
                                    <div className='d-flex justify-content-center mt-4' style={{ background: "#F0F0F0" }}>
                                        <MdOutlineKeyboardArrowDown
                                            size={40}
                                            onClick={handleTogglePassword}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </div>
                                ) : (
                                    <Box className='px-4' >

<div>
                                            {[...Array(3)].map((_, index) => (
                                                <div key={index} className="row align-items-center mb-3 gx-3">
                                                    <div className="col-12 col-md-6 d-flex align-items-center">
                                                        <TextField
                                                            id={`key-${index}`}
                                                            label="Key"
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                        <span className="mt-2 ms-2">
                                                            <MdContentCopy size={25} />
                                                        </span>
                                                    </div>
                                                    <div className="col-12 col-md-6 d-flex align-items-center mt-3 mt-md-0">
                                                        <TextField
                                                            id={`text-${index}`}
                                                            label="Text"
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                        <span className="mt-2 ms-2">
                                                            <MdDeleteOutline size={25} className="text-danger" />
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </Box>
                                )}
                            </div>
                        </div>

                    )}


                    {isMatch('pages') && (
                        <div>
                            <label className='fs-bold fs-4 px-4 mt-2'>Pages</label>
                            <div className="app">
                                {!isPages ? (
                                    <div className='d-flex justify-content-center mt-4' style={{ background: "#F0F0F0" }}>
                                        <MdOutlineKeyboardArrowDown
                                            size={40}
                                            onClick={handleTogglePages}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </div>
                                ) : (
                                    <Box className='px-4' >

<div>
                                            {[...Array(3)].map((_, index) => (
                                                <div key={index} className="row align-items-center mb-3 gx-3">
                                                    <div className="col-12 col-md-6 d-flex align-items-center">
                                                        <TextField
                                                            id={`key-${index}`}
                                                            label="Key"
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                        <span className="mt-2 ms-2">
                                                            <MdContentCopy size={25} />
                                                        </span>
                                                    </div>
                                                    <div className="col-12 col-md-6 d-flex align-items-center mt-3 mt-md-0">
                                                        <TextField
                                                            id={`text-${index}`}
                                                            label="Text"
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                        <span className="mt-2 ms-2">
                                                            <MdDeleteOutline size={25} className="text-danger" />
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </Box>
                                )}
                            </div>
                        </div>
                    )}


                </div>

            </Card>
        </div>
    )
}

export default Traducciones
