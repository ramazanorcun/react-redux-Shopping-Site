import React, { useEffect } from "react";
import Navbar from "../component/Navbar";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
// import { getAllCategories } from "../Actions/categoryAction";
// import { getALLSubCategories } from "../Actions/subCategoryAction";
import { Row, Col, Container } from "reactstrap";
import AddParentModal from "../component/AddParentModal";
import AddSubModal from "../component/AddSubModal";
import EditCategoryModal from "../component/EditCategoryModal";

function CategoryManagement() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllCategories());
  //   dispatch(getALLSubCategories());
  // }, []);
  const categories = useSelector((state) => state.categoryReducer);
  const subCategories = useSelector((state) => state.subCategoryReducer);



  return (
    <div>
      <Navbar />

      <Container>
        <div>
          <Row className="m-4">
            <Col md="6">
              <AddParentModal />
            </Col>
            <Col md="6">
              <AddSubModal />
            </Col>
          </Row>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className="row">
                  <TableCell className="col-4">
                    {" "}
                    <h4> Sub-Category Name</h4>
                  </TableCell>
                  <TableCell className="col-4" align="right">
                    <h4>Parent Category Name</h4>
                  </TableCell>
                  <TableCell className="col-4" align="right">
                    <h4> Action </h4>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((category) =>
                  subCategories.map((subCategory, i) =>
                    subCategory.category_id === category.id ? (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {subCategory.name}
                        </TableCell>
                        <TableCell align="center">{category.name}</TableCell>

                        <TableCell align="right">
                          <EditCategoryModal />
                        </TableCell>
                      </TableRow>
                    ) : null
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </div>
  );
}
export default CategoryManagement;
