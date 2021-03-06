import React from 'react';
import {Field, Form, Formik} from "formik";
import axiosInstance from "../axiosAPI";
import MaterialFormikField from "../MaterialFormikField";
import {Button} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import EditTaskImages from "./EditTaskImages";



const TaskEditor = ({selectedTaskToEdit,updateTask}) => {
    const task=selectedTaskToEdit;
    console.log("TE", task);
    //todo walidacja formularza od edycji zadania
    if (!task) return <div>Wybierz zadanie</div>;
    return (
      <Box p={3} style={{minHeight:"100%"}}>
        <Formik
          enableReinitialize={true}
          initialValues={task}
          onSubmit={(values, helpers) => {
            if (!!values.imageToUpload) {
              let formData = new FormData();
              formData.append("file", values.imageToUpload);
              axiosInstance
                .post("/user/addimage/", formData, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                })
                .then((response) => {
                  let task = { ...values };
                  task.currentAnswers.image = [response.data.id];
                  updateTask({ ...task });
                });
            } else updateTask({ ...values });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            submitForm,
            setFieldValue,
          }) => {
            const handleChangeAndSubmit = (e) => {
              handleChange(e);
              submitForm();
            };
            return (
              <Form>
                <Field
                  component={MaterialFormikField}
                  name={"text"}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: handleChangeAndSubmit,
                      multiline:true,
                      rows:3,
                      rowsMax:10
                  }}
                  labelText="Tre???? zadania"
                />
                <Field
                  component={MaterialFormikField}
                  name={"maxPoints"}
                  type={"number"}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: handleChangeAndSubmit,
                  }}
                  labelText="Maksymalna ilo???? punkt??w"
                />
                <Button variant="contained" component="label">
                  Wybierz zdj??cie
                  <input
                    type="file"
                    name={"imageToUpload"}
                    style={{ display: "none" }}
                    onChange={(e) => {
                      setFieldValue("imageToUpload", e.currentTarget.files[0]);
                    }}
                  />
                </Button>
                <Button onClick={handleSubmit}>Zapisz obrazek</Button>
                  <EditTaskImages task={task} updateTask={updateTask}/>
              </Form>
            );
          }}
        </Formik>
      </Box>
    );
};

export default TaskEditor;