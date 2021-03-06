import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockIcon from '@material-ui/icons/Lock';
import Header from "./material_ui_components/Header/Header.js";
import HeaderLinks from "./material_ui_components/Header/HeaderLinks.js";
import Footer from "./material_ui_components/Footer/Footer.js";
import GridContainer from "./material_ui_components/Grid/GridContainer.js";
import GridItem from "./material_ui_components/Grid/GridItem.js";
import Button from "././material_ui_components/CustomButtons/Button.js";
import Card from "./material_ui_components/Card/Card.js";
import CardBody from "./material_ui_components/Card/CardBody.js";
import CardHeader from "./material_ui_components/Card/CardHeader.js";
import CardFooter from "./material_ui_components/Card/CardFooter.js";
import CustomInput from "./material_ui_components/CustomInput/CustomInput.js";
import styles from "./assets/jss/material-kit-react/views/loginPage.js";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import image from "./img/genesprDark.png";
import * as Yup from "yup";
import axiosInstance from "./axiosAPI";
import { Formik, Field } from "formik";
import FormikMdInput from "./FormikMDInput";
import Paper from '@material-ui/core/Paper';
import { useSnackbar } from 'notistack';
const useStyles = makeStyles(styles);

const MaterialUiLoginPage = (props) => {
  const user = props.appState.user;
  if (!!user) {
    props.history.push("/");
  }
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { ...rest } = props;
  const FRS = "Pole wymagane";
  const bgStyles = {
    paperContainer: {
        backgroundImage: `url(${image})`,
        
        minHeight: 1000,
  
       
       
  
  
       
    },
    examCardContainer: {
      width: 700,
      backgroundColor: '#FEFEFA',
  
      
  },
  
    cardTitle: {
      textAlign:'center'
    }
  
  };
  return (
   
      <div
       
      >
          <Paper
       style={bgStyles.paperContainer}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <Formik
                  initialValues={{
                    name: "",
                    password: "",
                  }}
                  validationSchema={Yup.object().shape({
                    password: Yup.string()
                      .min(8, "Has??o musi zawiera?? co najmniej 8 znak??w!")
                      .max(50, "Has??o mo??e zawiera?? maksymalnie 50 znak??w!")
                      .required(FRS),
                    name: Yup.string()
                      .min(2, "Has??o musi zawiera?? co najmniej 8 znak??w!")
                      .max(50, "Has??o mo??e zawiera?? maksymalnie 50 znak??w!")
                      .required(FRS),
                  })}
                  onSubmit={(values, helpers) => {
                    setTimeout(() => {
                      helpers.setSubmitting(true);
                      axiosInstance
                        .post("/token/obtain/", {
                          username: values.name,
                          password: values.password,
                        })
                        .then((response) => {
                          axiosInstance.defaults.headers["Authorization"] =
                            "JWT " + response.data.access;
                          localStorage.setItem(
                            "access_token",
                            response.data.access
                          );
                          localStorage.setItem(
                            "refresh_token",
                            response.data.refresh
                          );
                          helpers.setSubmitting(false);
                          props.checkUser();
                          props.history.push("/");
                        })
                        .catch((error) => {
                          // console.log("login error", error.response);
                          const errResponse = error.response;
                          helpers.setSubmitting(false);
                          if (
                            errResponse.status === 401 &&
                            errResponse.statusText === "Unauthorized"
                          ) {
                            enqueueSnackbar("Nieprawid??owy adres e-mail lub has??o", { 
                              variant: 'error',
                          })
                            helpers.setValues(
                              {
                                name: "",
                                password: "",
                              },
                              false
                            );
                            helpers.setTouched(
                              {
                                name: false,
                                password: false,
                              },
                              false
                            );
                            helpers.setFieldError(
                              "general",
                              "Nierpawid??owa nazwa u??ytkownika lub has??o"
                            );
                           
                          }
                        });
                    }, 400);
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
                  }) => {
                    console.log("talczed", touched, "errors", errors);
                    return (
                      <form className={classes.form}>
                        <CardHeader
                          color="primary"
                          className={classes.cardHeader}
                        >
                          <h4>Logowanie</h4>
                        </CardHeader>
                        <CardBody>
                          <CustomInput
                            labelText="Nazwa u??ytkownika"
                            id="name"
                            error={!!errors.name}
                            success={touched.name && !errors.name}
                            formControlProps={{
                              fullWidth: true,
                            }}
                            helperProps={{
                              children: errors.name,
                              error: true,
                            }}
                            inputProps={{
                              type: "text",
                              name: "name",
                              onChange: handleChange,
                              onBlur: handleBlur,
                              value: values.name,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <People className={classes.inputIconsColor} />
                                </InputAdornment>
                              ),
                            }}
                          />
                          <CustomInput
                            labelText="Has??o"
                            id="password"
                            error={!!errors.password}
                            success={touched.password && !errors.password}
                            formControlProps={{
                              fullWidth: true,
                            }}
                            helperProps={{
                              children: errors.password,
                              error: true,
                            }}
                            inputProps={{
                              type: "password",
                              name: "password",
                              onChange: handleChange,
                              onBlur: handleBlur,
                              value: values.password,
                              endAdornment: (
                                <InputAdornment position="end">
                                   <LockIcon className={classes.inputIconsColor} />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                        <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="text"
                      >
                            <Button
                          simple
                          color="primary"
                          size="lg"
                          onClick={() => {
                            handleSubmit();
                          }}
                        >
                          Zaloguj si??
                        </Button>
                        <Button
                          simple
                          color="primary"
                          size="lg"
                          onClick={() => {
                            props.history.push("/requestresetpassword");
                          }}
                        >
                          Zapomnia??em has??a
                        </Button>
                      </ButtonGroup>
                        </CardFooter>
                      </form>
                    );
                  }}
                </Formik>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        </Paper>
      </div>
                  
    
    
  );
};

export default MaterialUiLoginPage;
