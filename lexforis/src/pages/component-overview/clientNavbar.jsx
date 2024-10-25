import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import './client.css'
import TabPanel from '@mui/lab/TabPanel';
import { InfoCircleOutlined, AppstoreAddOutlined, AimOutlined } from '@ant-design/icons';
import { Box, Button, Card, grid2Classes } from '@mui/material';
import Tab from '@mui/material/Tab';
import { EditOutlined } from '@ant-design/icons';
import { EyeOutlined, EyeInvisibleOutlined, KeyOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Checkbox, Row, Col, } from 'antd';
import { Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaFilter, FaEraser } from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdSms } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";
import IncomeAreaChart from './IncomeAreaChart';
import { Modal, } from 'react-bootstrap';
import { width } from '@mui/system';


<style jsx="true">{`
  .custom-modal-height .modal-dialog {
    height: 1200px;
    
  }
  .custom-modal-height .modal-content {
    height: 100%;
  }
  .custom-modal-height .modal-body {
    overflow-y: auto;
  }
`}</style>

export default function LabTabs() {

  const [slot, setSlot] = useState('week');
  const [value, setValue] = useState('1');
  const [information, setInformation] = useState('1'); // State for the nested tabs
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [servicetab, setServicetab] = React.useState('1');
  const [show, setShow] = useState(false);

  // Handlers for opening and closing the modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeservicetab = (event, newValue) => {
    setServicetab(newValue);
  };


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleCheckboxChange = (e) => {
    setNotifyEmail(e.target.checked);
  };

  const isButtonDisabled = password === '' || confirmPassword === '' || password !== confirmPassword;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeInformation = (event, newValue) => {
    setInformation(newValue); // Update nested tab state
  };

  return (
    <Box sx={{ width: '75%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab icon={<InfoCircleOutlined />} label="Información" value="1" />
            <Tab icon={<AppstoreAddOutlined />} label="Servicios" value="2" />
            <Tab icon={<AimOutlined />} label="Exact" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <Card style={{ marginTop: "20px", width: "100%", height: "auto" }}>
            <div>
              <p className='fs-4' style={{ marginLeft: "40px" }}>
                Informacion del cliente
              </p>
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={information}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChangeInformation} aria-label="client info tabs">
                    <Tab label="Datos principales" value="1" />
                    <Tab label="Más información" value="5" />
                    <Tab label="Representantes" value="3" />
                    <Tab label="Personas físicas" value="4" />
                  </TabList>
                </Box>

                {/* Tab Panel for "Datos principales" */}
                <TabPanel value="1" style={{ height: '200px', overflowY: 'auto' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Button variant="outlined">Nombre:<br /> CETA IT</Button>
                    <Button variant="outlined">Representante 1:<br /> Represent Represent (Administrador)</Button>
                    <Button variant="outlined">Representante 2:<br /> Diego Alhama Sánchez (Apoderado)</Button>
                    <Button variant="outlined">Persona física 1:<br /> Paco Moreno</Button>
                    <Button variant="outlined">Teléfono:<br /> 111223366</Button>
                    <Button variant="outlined">Idioma:<br /> es</Button>
                    <Button variant="outlined">Compañía:<br /> Lexforis</Button>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginLeft: '70%', marginTop: '50px' }}>
                    <Button variant="contained" onClick={handleShow}>
                      <EditOutlined /> <span style={{ marginLeft: "10px" }} onClick={handleShow}> Editar información</span>
                    </Button>
                  </Box>

                 
                </TabPanel>

                {/* Tab Panel for "Más información" */}
                <TabPanel value="5" style={{ height: '200px', overflowY: 'auto' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Button variant="outlined">Representante 1:<br /> Represent Represent (Administrador)</Button>
                    <Button variant="outlined">Dirección de residencia<br /> Sin datos</Button>
                    <Button variant="outlined">Persona física 1:<br /> Paco Moreno</Button>
                    <Button variant="outlined">Teléfono:<br /> 111223366</Button>
                    <Button variant="outlined">Idioma:<br /> es</Button>
                    <Button variant="outlined">Compañía:<br /> Lexforis</Button>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-end' }}>
                    <Button variant="contained">
                      <EditOutlined /> <span style={{ marginLeft: "10px" }} onClick={handleShow}> Editar información</span>
                    </Button>
                  </Box>
                </TabPanel>

                {/* Tab Panel for "Representantes" */}
                <TabPanel value="3" style={{ height: '200px', overflowY: 'auto' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Button variant="outlined">Representante 1:<br /> Represent Represent (Administrador)</Button>
                    <Button variant="outlined">Representante 2:<br /> Diego Alhama Sánchez (Apoderado)</Button>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-end' }}>
                    <Button variant="contained">
                      <EditOutlined /> <span style={{ marginLeft: "10px" }} onClick={handleShow}> Editar información</span>
                    </Button>
                  </Box>
                </TabPanel>

                {/* Tab Panel for "Personas físicas" */}
                <TabPanel value="4" style={{ height: '200px', overflowY: 'auto' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Button variant="outlined">Persona 1:<br />Paco Moreno</Button>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-end' }}>
                    <Button variant="contained">
                      <EditOutlined /> <span style={{ marginLeft: "10px" }} onClick={handleShow}> Editar información</span>
                    </Button>
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
          </Card>

          {/* add two card */}
          <Card title="Actualizar contraseña" className='mt-4' style={{ width: "100%", height: "200px", paddingLeft: "40px", paddingTop: "20px" }}>
            <h6>Actualizar contraseña</h6>
            <div className='mt-4'>
              <Row gutter={16}>
                <Col span={11}>
                  <Input.Password
                    placeholder="Nueva contraseña *"
                    prefix={<KeyOutlined />}
                    iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                    style={{ width: '100%', padding: '10px' }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
                <Col span={11}>
                  <Input.Password
                    placeholder="Confirmar nueva contraseña *"
                    prefix={<LockOutlined />}
                    iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{ width: '100%', padding: '10px' }}
                  />
                </Col>
              </Row>
            </div>

            <Row style={{ marginTop: '20px' }}>
              <Col span={24}>
                <Checkbox onChange={handleCheckboxChange}>Notificar el cambio por correo electrónico</Checkbox>
              </Col>
            </Row>

            <Row>
              <Button variant="contained" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginLeft: "66%" }} icon={<KeyOutlined />} disabled={isButtonDisabled}>
                Cambiar contraseña
              </Button>
            </Row>
          </Card>

        </TabPanel>
        {/* //servicios tab// */}
        <TabPanel value="2">
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={servicetab}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChangeservicetab} aria-label="lab API tabs example">
                  <Tab label="pages.clients.services.accounting.tab_norma43" value="10" />
                  <Tab label="pages.clients.services.accounting.tab_invoices" value="11" />
                  <Tab label="pages.clients.services.accounting.tab_invoices" value="12" />
                </TabList>
              </Box>
              <TabPanel value="10">


                <Card style={{ height: "400px", width: "900px" }}>

                  <div className="d-flex align-items-center  p-3 bg-dark  text-white" style={{ width: "900px", gap: "60px" }}>
                    {/* Path Text with Search Icon */}
                    <div className="d-flex align-items-center">
                      <FaSearch className="me-2" />
                      <span>pages.services.accounting</span>
                    </div>

                    {/* Search Input */}
                    <InputGroup className="w-25">
                      <Form.Control
                        type="text"
                        placeholder="Buscar"
                        className="bg-dark text-white"
                      />
                      <InputGroup.Text className="bg-dark text-white">
                        <FaSearch />
                      </InputGroup.Text>
                    </InputGroup>

                    {/* Clear Filter and Filter Button */}
                    <div className="d-flex align-items-center">
                      <Button variant="outlined" className="text-white me-3">
                        <FaEraser className="me-1" /> Limpiar filtro
                      </Button>
                      <Button variant="outlined" className="d-flex align-items-center bg-primary text-white">
                        <FaFilter className="me-2" /> Filtrar
                      </Button>
                    </div>

                    <div>
                      <NavDropdown title="" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>


                  </div>

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">ID Nombre</th>
                        <th scope="col">Fetch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                       <th scope="row">1</th>
                       <td>Mark</td>
                       </tr> */}
                    </tbody>
                  </table>
                </Card>


              </TabPanel>
              <TabPanel value="11">
                <Card style={{ height: "400px", width: "900px" }}>

                  <div className="d-flex align-items-center  p-3 bg-dark  text-white" style={{ width: "900px", gap: "60px" }}>
                    {/* Path Text with Search Icon */}
                    <div className="d-flex align-items-center">
                      <FaSearch className="me-2" />
                      <span>info.upload.uploaded_files</span>
                    </div>

                    {/* Search Input */}
                    <InputGroup className="w-25">
                      <Form.Control
                        type="text"
                        placeholder="Buscar"
                        className="bg-dark text-white"
                      />
                      <InputGroup.Text className="bg-dark text-white">
                        <FaSearch />
                      </InputGroup.Text>
                    </InputGroup>

                    {/* Clear Filter and Filter Button */}
                    <div className="d-flex align-items-center">
                      <Button variant="outlined" className="text-white me-3">
                        <FaEraser className="me-1" /> Limpiar filtro
                      </Button>
                      <Button variant="outlined" className="d-flex align-items-center bg-primary text-white">
                        <FaFilter className="me-2" /> Filtrar
                      </Button>
                    </div>

                    <div>
                      <NavDropdown title="" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>


                  </div>

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">ID Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Nombre</th>

                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
     <th scope="row">1</th>
     <td>Mark</td>
     </tr> */}
                    </tbody>
                  </table>
                </Card>
              </TabPanel>




              <TabPanel value="12">


                <div className="d-flex  align-items-center " style={{ gap: "20px" }}>

                  <div >
                    <Card style={{ width: "500px", height: "200px" }}>

                      <div className=" d-flex justify-content-center align-items-center">
                        <div >
                          <label className="fs-6 fw-bold">Pages Client.Service.accounting.trifact_config</label>
                          <Form.Group controlId="validationTooltip01">
                            <InputGroup style={{ width: "400px" }} className="mt-4">
                              <InputGroup.Text>
                                <MdSms />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="pages.client.services.accounting.trifact_"
                                defaultValue="pages.client.services.accounting.trifact_"
                              />
                            </InputGroup>
                          </Form.Group>


                          <div className='mt-4'>
                            <Button variant="outlined" className="d-flex align-items-center bg-primary text-white">
                              <TbFileDownload className="me-2" />Pages Client.Service.accounting.more_config
                            </Button>
                          </div>
                        </div>
                      </div>




                    </Card>
                  </div>

                  <div >
                    <Card style={{ width: "500px", height: "200px" }}>

                      <div className=" d-flex justify-content-center align-items-center">
                        <div >
                          <label className="fs-6 fw-bold">Pages Client.Service.accounting.exact_config</label>
                          <Form.Group controlId="validationTooltip01">
                            <InputGroup style={{ width: "400px" }} className="mt-4">
                              <InputGroup.Text>
                                <RiContactsFill />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="pages.client.services.accounting.trifact_"
                                defaultValue="pages.client.services.accounting.trifact_"
                              />
                            </InputGroup>
                          </Form.Group>


                          <div className='mt-4'>
                            <Button variant="outlined" className="d-flex align-items-center bg-primary text-white">
                              <TbFileDownload className="me-2" />Pages Client.Service.accounting.more_config
                            </Button>
                          </div>
                        </div>
                      </div>



                    </Card>
                  </div>

                </div>

                <div className='mt-4'>
                  <Card style={{ width: "500px", height: "200px" }}>

                    <div className=" d-flex justify-content-center align-items-center">
                      <div >
                        <label className="fs-6 fw-bold">Pages Client.Service.accounting.more_config</label>
                        <Form.Group controlId="validationTooltip01">
                          <InputGroup style={{ width: "400px" }} className="mt-4">

                            <Form.Select aria-label="Dropdown for pages.client.services.accounting">
                              <option value="pages.client.services.accounting.trifact_1">Proveedor por defecto</option>
                              <option value="pages.client.services.accounting.trifact_2">Option 2</option>
                              <option value="pages.client.services.accounting.trifact_3">Option 3</option>
                            </Form.Select>
                          </InputGroup>
                        </Form.Group>



                        <div className='d-flex justify-content-end mt-4'>
                          <Button variant="outlined" className="d-flex align-items-center bg-primary text-white">
                            <TbFileDownload className="me-2" /> Guardar
                          </Button>
                        </div>
                      </div>
                    </div>



                  </Card>
                </div>


              </TabPanel>
            </TabContext>
          </Box>
        </TabPanel>

        <TabPanel value="3">
          {/* Content for Exact tab */}
          <div style={{ gap: "10px", display: "flex" }}>

            <Card content={false} style={{ width: "800px" }}>
              <div className='p-2 ' style={{ marginLeft: "20px" }}>
                <h5>Resumen ano actual comparado con ano anterior <br /><p>CETA IT Lex International Law S.L.P.</p></h5>
              </div >

              <div className="container">
                <div className="row justify-content-between p-4">
                  {/* First Column */}
                  <div className="col d-flex" style={{ gap: "30px" }}>
                    <div>

                      <div>2021</div>
                      <div>2020</div>
                      <div className="text-danger">period 8-2021</div>
                      <div>period 8-2021</div>
                    </div>
                    <div>
                      <div>20233231</div>
                      <div>2023433220</div>
                      <div className="text-danger">999921</div>
                      <div>00987771</div>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className="col d-flex" style={{ gap: "30px" }}>
                    <div>
                      <div>2021</div>
                      <div>2020</div>
                      <div className="text-danger">period 8-2021</div>
                      <div>period 8-2021</div>
                    </div>
                    <div>
                      <div>20233231</div>
                      <div>2023433220</div>
                      <div className="text-danger">999921</div>
                      <div>00987771</div>
                    </div>
                  </div>

                  {/* Third Column */}
                  <div className="col d-flex" style={{ gap: "30px" }}>
                    <div>
                      <div>2021</div>
                      <div>2020</div>
                      <div className="text-danger">period 8-2021</div>
                      <div>period 8-2021</div>
                    </div>
                    <div>
                      <div>20233231</div>
                      <div>2023433220</div>
                      <div className="text-danger">999921</div>
                      <div>00987771</div>
                    </div>
                  </div>
                </div>
              </div>




              <Box sx={{ pt: 1, pr: 2 }}>
                <IncomeAreaChart slot={slot} />
              </Box>
            </Card>

            <div>
              <label className='fs-6 fw-bold'>Reporting balance <br />
                Ano actual
              </label>

              <Card style={{ width: "240px" }} className='p-4 mt-2'>
                <div>Retenciones</div>
                <div className='text-danger'>Trimestre actual T3 -1.772,90</div>
                <div>Total ano     -1.772,90</div>
              </Card>

              <Card style={{ width: "240px" }} className='p-4 mt-2'>
                <div>IVA Repercutido -13.178,987</div>
                <div>IVA Soportado  -13.178,987</div>
                <div>IVA compensar 0,00</div>
                <div className='text-damger'>Resultado T3 7.426,81</div>

              </Card>

              <Card style={{ width: "240px" }} className='p-4 mt-2'>
                <div>Lunes,30 De Agosto De 2021</div>
                <div className='text-danger'>Sin eventos</div>
              </Card>
            </div>
          </div>


        </TabPanel>

      </TabContext>


       {/* Modal */}
       <Modal show={show} onHide={handleClose} style={{ marginTop: "30px" }} centered size="lg" dialogClassName="custom-modal-height">
                    <Modal.Header closeButton>
                      <Modal.Title>Información del cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                      <div style={{ height: '400px', overflowY: 'auto' }}>
                        <Form>
                          <Row className="mb-3">
                            <Col className="col-margin">
                              <Form.Group controlId="clientName" className="mb-3">
                                <Form.Label>Nombre *</Form.Label>
                                <Form.Control type="text" defaultValue="CETA IT" />
                              </Form.Group>
                            </Col>
                            <Col className="col-margin">
                              <Form.Group controlId="clientEmail" className="mb-3">
                                <Form.Label>Dirección de correo electrónico *</Form.Label>
                                <Form.Control type="email" defaultValue="ceta@ceta.com" />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Col className="col-margin">
                              <Form.Group controlId="clientPhone" className="mb-3">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="text" defaultValue="111223366" />
                              </Form.Group>
                            </Col>
                            <Col className="col-margin">
                              <Form.Group controlId="clientCompany" className="mb-3">
                                <Form.Label>Compañía *</Form.Label>
                                <Form.Control type="text" defaultValue="Lexforis" />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Col className="col-margin">
                              <Form.Group controlId="clientCountry" className="mb-3">
                                <Form.Label>País</Form.Label>
                                <Form.Control type="text" defaultValue="España" />
                              </Form.Group>
                            </Col>
                            <Col className="col-margin">
                              <Form.Group controlId="clientRegion" className="mb-3">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control type="text" defaultValue="Murcia" />
                              </Form.Group>
                            </Col>
                            <Col className="col-margin">
                              <Form.Group controlId="clientCity" className="mb-3">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" defaultValue="Cartagena" />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Col className="col-margin">
                              <Form.Group controlId="clientPostalCode" className="mb-3">
                                <Form.Label>Código Postal</Form.Label>
                                <Form.Control type="text" defaultValue="30394" />
                              </Form.Group>
                            </Col>
                            <Col className="col-margin">
                              <Form.Group controlId="clientID" className="mb-3">
                                <Form.Label>Identificación</Form.Label>
                                <Form.Control type="text" defaultValue="model.client.identification" />
                              </Form.Group>
                            </Col>
                            <Col className="col-margin">
                              <Form.Group controlId="clientIban" className="mb-3">
                                <Form.Label>IBAN</Form.Label>
                                <Form.Control type="text" defaultValue="model.client.iban" />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Form>

                      <Card title="Actualizar contraseña" className='mt-4' style={{ width: "100%", height: "200px", paddingLeft: "10px", paddingTop: "20px" }}>
                        <h6>Actualizar contraseña</h6>
                        <div className='mt-4'>
                          <Row gutter={16}>
                            <Col span={11}>
                              <Input.Password
                                placeholder="Nueva contraseña *"
                                prefix={<KeyOutlined />}
                                iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                                style={{ width: '100%', padding: '10px' }}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </Col>
                            <Col span={11}>
                              <Input.Password
                                placeholder="Confirmar nueva contraseña *"
                                prefix={<LockOutlined />}
                                iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                style={{ width: '100%', padding: '10px' }}
                              />
                            </Col>
                          </Row>
                        </div>

                        <Row style={{ marginTop: '20px' }}>
                          <Col span={24}>
                            <Checkbox onChange={handleCheckboxChange}>Notificar el cambio por correo electrónico</Checkbox>
                          </Col>
                        </Row>

                        <Row>
                          <Button variant="contained" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginLeft: "66%" }} icon={<KeyOutlined />} disabled={isButtonDisabled}>
                            Cambiar contraseña
                          </Button>
                        </Row>
                      </Card>
                      </div>


                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="contained" className='bg-danger text-white' onClick={handleClose}>
                        Cancelar
                      </Button>
                      <Button variant="contained" className='bg-primary text-white' onClick={handleClose}>
                        Actualiazar
                      </Button>
                    </Modal.Footer>
                  </Modal>
    </Box >
  );
}

