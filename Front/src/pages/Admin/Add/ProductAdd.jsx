import React, { useContext } from 'react'
import style from "./style.module.css"
import Table from 'react-bootstrap/Table';
import { Form, Formik } from "formik"
import * as Yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router'
import { productContext } from '../../../Context/ProductsContext';
function ProductAdd() {
  const AddSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required"),
    desc: Yup.string()
      .required("Description is required"),
    image: Yup.string()
      .required("Image is required"),


  })
  const navigate = useNavigate();
  let { products, setProducts } = useContext(productContext)

  function HandleDelete(id) {
    axios.delete(`http://localhost:3000/products6/${id}`)
      .then(()=>{
        setProducts((prevProducts)=>prevProducts.filter((product)=>product.id !==id))
      })

  }
  return (

    <div>
      <div className={style.formik}>
      <Formik 
        initialValues={{
          name: '',
          desc: '',
          image: '',

        }}
        validationSchema={AddSchema}
        onSubmit={(values => {
          axios.post("http://localhost:3000/products6", values)
            .then(() =>
              navigate("/admin/add"))
        })

        }
      >
        {({ errors, handleChange, handleBlur, values }) => (
          <Form className={style.form}>
            {errors.name && <div id="feedback">{errors.name}</div>}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.desc && <div id="feedback">{errors.desc}</div>}
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              name="desc"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.desc}
            />
            {errors.image && <div id="feedback">{errors.image}</div>}
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      </div>
      <Table striped bordered hover className={style.Table}>
        <thead>
          <tr>
            <th>image</th>
            <th> Name</th>
            <th>desc</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length > 0 ? (
              products.map((req) => (
                <tr>
                  <td><img src={req.image} alt="" /></td>
                  <td>{req.name}</td>
                  <td>{req.desc}</td>
                  <td><button onClick={() => HandleDelete(req._id)}><i class="bi bi-trash"></i></button></td>
                </tr>

              ))
            ) : (
              <p>bosdur</p>
            )
          }
        </tbody>
      </Table>
    </div >
  )
}

export default ProductAdd
