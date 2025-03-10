import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./BookingForm.module.scss"; // CSS Module

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
    .typeError("Number of Guests must be a valid number")
    .integer("Number of Guests must be an integer")
    .min(1, "Number of Guests must be at least 1")
    .max(10, "Number of Guests can be maximum 10")
    .required("Number of Guests is required"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const timeOptions = [
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM"
  ];

  const occasion = [
    'Birthday',
    'Anniversary',
    'Bussiness Meeting'
  ]

  const handleSubmit = (values) => {
    submitForm(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Booking table</h2>
          <div className={styles.formGroup}>
            <label>Name</label>
            <Field type="text" name="name" className={styles.input} />
            <div className={styles.error}>
              <ErrorMessage name="name" component="div" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <Field type="email" name="email" className={styles.input} />
            <div className={styles.error}>
              <ErrorMessage name="email" component="div" />
            </div>
          </div>

          <div className={styles.dateTime}>
            <div className={styles.formGroup}>
              <label>Date</label>
              <Field type="date" name="date" className={styles.input} />
              <div className={styles.error}>
                <ErrorMessage name="date" component="div" />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Time</label>
              <Field as="select" name="time" className={styles.input}>
                <option value="">Select Time</option>
                {timeOptions.map((time, index) => (
                  <option key={index} value={time}> {time} </option>
                ))}
              </Field>
              <div className={styles.error}>
                <ErrorMessage name="time" component="div" />
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Occasion</label>
            <Field as="select" id="occasion" name="occasion" className={styles.input} >
              <option value="">Select Occasion</option>
              {occasion.map((time, index) => (
                <option key={index} value={time}> {time} </option>
              ))}
            </Field>
            <div className={styles.error}>
              <ErrorMessage name="occasion" component="div" />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
            {isSubmitting ? "Submitting..." : "Book Now"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
