import React from "react";
import { Formik, Field, Form } from "formik";
import BasicFormSchema from "./BasicFormSсhema";

const SignUp = () => (
  <div className="container">
    <h1>Cauta utilizator</h1>
    <Formik
      initialValues={{
        phone: "",
        idnp: "",
        date: ""
      }}
      validationSchema={BasicFormSchema}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={({ errors, touched }) => (
        <Form className="form-container">

          <label htmlFor="idnp">IDNP</label>
          <Field name="idnp" placeholder="snapoak" type="text" />

          {errors.idnp &&
            touched.idnp && (
              <div className="field-error">{errors.idnp}</div>
            )}

          <label htmlFor="phone">Nr.Telefon</label>
          <Field
            name="phone"
            placeholder="mtarasov777@gmail.com"
            type="phone"
          />

          {errors.phone &&
            touched.phone && <div className="field-error">{errors.phone}</div>}

          <label htmlFor="date">Data Acces</label>
          <Field name="date" type="date" />

          {errors.date &&
            touched.date && (
              <div className="field-error">{errors.date}</div>
            )}

          <button type="submit">CAUTA</button>
        </Form>
      )}
    />
  </div>
);

export default SignUp;

import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';



const Basic = () => (

  <div>

    <h1>Any place in your app!</h1>

    <Formik

        initialValues={{
            phone: "",
            idnp: "",
            date: ""
        }}

    //   validate={values => {

    //     const errors = {};

    //     if (!values.email) {

    //       errors.email = 'Required';

    //     } else if (

    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)

    //     ) {

    //       errors.email = 'Invalid email address';

    //     }

    //     return errors;

    //   }}

      onSubmit={(values, { setSubmitting }) => {

        setTimeout(() => {

          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);

        }, 400);

      }}

    >

      {({ isSubmitting }) => (

        <Form>

            <label htmlFor="idnp">IDNP</label>
            <Field name="idnp" placeholder="snapoak" type="text" />
            <ErrorMessage name="idnp" component="div" />

            <label htmlFor="phone">Nr.Telefon</label>
            <Field
                name="phone"
                placeholder=""
                type="phone"
            />
            <ErrorMessage name="phone" component="div" />

            <label htmlFor="date">Data Acces</label>
            <Field name="date" type="date" />
            <ErrorMessage name="date" component="div" />


          <button type="submit" disabled={isSubmitting}>CAUTA</button>

        </Form>

      )}

    </Formik>

  </div>

);



export default Basic;