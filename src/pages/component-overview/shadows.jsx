import { Box, Button, Card, } from '@mui/material';
import { BsFilterSquareFill } from "react-icons/bs";
import { LuListFilter } from "react-icons/lu";





export default function ComponentShadow() {


  return (

    <>
      <div>

        <div className="d-flex align-items-center">
          <BsFilterSquareFill className="me-2" />
          <span className='fw-bold fs-4'>Companias</span>
        </div>
        
        <Card className='mt-2'>

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID<LuListFilter /></th>
                <th scope="col">Nombre</th>
                <th scope="col"></th>
                <th scope="col">Pages.companies.info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td></td>
                <td></td>
              </tr>

            </tbody>
          </table>
        </Card>
      </div>

    </>
  );

}

