import React from "react";
import Navbar from "../component/Navbar";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../Actions/categoryAction";
import { getALLSubCategories } from "../Actions/subCategoryAction";
import { Row, Col, Container } from "reactstrap";
// import EditModal from "../component/EditModal";
import { getAllProducts } from "../Actions/productAction";
import AddProduct from "../component/AddProduct";

function CategoryManagement() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer);
  const subCategories = useSelector((state) => state.subCategoryReducer);
  const products = useSelector((state) => state.productReducer);
  console.log(products);

  useEffect(() => {
    if (Object.keys(categories).length === 0) {
      dispatch(getAllCategories());
    }
    if (Object.keys(subCategories).length === 0) {
      dispatch(getALLSubCategories());
    }
    if (Object.keys(products).length === 0) {
      dispatch(getAllProducts());
    }
  }, []);

  return (
    <div>
      <Navbar />

      <Container>
        <div>
          <Row className="m-4">
            <Col className="col-6">
              <AddProduct />
            </Col>
          </Row>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className="row">
                  <TableCell className="col-3">
                    <h4> Product Name</h4>
                  </TableCell>
                  <TableCell className="col-3">
                    <h4> Sub-Category Name</h4>
                  </TableCell>
                  <TableCell className="col-4" align="center">
                    <h4>Parent Category Name</h4>
                  </TableCell>
                  <TableCell className="col-2" align="right">
                    <h4> Action </h4>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((products) =>
                  categories.map((category) =>
                    subCategories.map((subCategory) =>
                        products.sub_category_id === subCategory.id && subCategory.category_id === category.id && (
                          <TableRow
                            key={products.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}>
                            <TableCell component="th" scope="row">
                              {products.name}
                            </TableCell>

                            <TableCell align="center" scope="row">
                              {subCategory.name}
                            </TableCell>

                            <TableCell align="center">
                              {category.name}
                            </TableCell>

                            <TableCell align="right">
                              {/* <EditModal /> */}
                            </TableCell>
                          </TableRow>
                        ))))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </div>
  );
}
export default CategoryManagement;
