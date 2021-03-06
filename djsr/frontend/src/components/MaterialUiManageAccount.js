import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockIcon from "@material-ui/icons/Lock";
import Paper from '@material-ui/core/Paper';
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
import Grid from '@material-ui/core/Grid';
import styles from "./assets/jss/material-kit-react/views/loginPage.js";
import { useSnackbar } from 'notistack';
import image from "./img/genesprDark.png";
import * as Yup from "yup";
import axiosInstance, { axiosInstanceNoAuth } from "./axiosAPI";
import { Formik, Field } from "formik";
import MaterialFormikField from "./MaterialFormikField";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import LoadingScreenB from "./LoadingForButtons"
const useStyles = makeStyles(styles);

const MaterialUiManageAccount = (props) => {

  const FRS = "Pole wymagane";
  const user = props.appState.user;
  const [editView, setEditView] = React.useState("email");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  
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


  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Paper
       style={bgStyles.paperContainer}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
              {editView=="email" ? (
        
        <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
          .email("Nieprawid??owy adres e-mail")
          .required("Pole wymagane"),
        })}
        onSubmit={(values, helpers) => {
            setTimeout(() => {
              
              helpers.setSubmitting(true);
              axiosInstance
                .put("/user/update/", {
                  email: values.email,
                })
                .then((response) => {
                  
                  enqueueSnackbar("Pomy??lnie zmieniono dane", { 
                    variant: 'success',
                });
                helpers.setSubmitting(false);

              
                })
                .catch((error) => {
                  // console.log("login error", error.response);
                  const errResponse = error.response;
                  enqueueSnackbar("Adres e-mail jest ju?? zaj??ty, b??d?? jest nieprawid??owy", { 
                    variant: 'error',
                });
                  helpers.setSubmitting(false);
                 
                  helpers.setValues(
                    {
                      email: "",
                    },
                    false
                  );
                  helpers.setTouched(
                    {
                      name: false,
                    },
                    false
                  );
                  helpers.setFieldError(
                    "name",
                    "Nazwa jest w u??yciu lub jest nieprawid??owa."
                  );
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
        }) => (
          <form className={classes.form}>
            {console.log(touched, errors)}
            <CardHeader
              color="primary"
              className={classes.cardHeader}
            >
              <h4>Edytuj dane</h4>
              
            </CardHeader>
            <CardBody>
            
            <Grid container justify="center">
            <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="text"
                      >
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("email")}  >
                   Zmie?? e-mail
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("name")}  >
                   Zmie?? nazw?? u??ytkownika
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("password")}  >
                   Zmie?? has??o
              </Button>
            </ButtonGroup>
            </Grid>
              

                <Field
                component={MaterialFormikField}
                name={"email"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Adres e-mail"
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
         
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button
                simple
                color="primary"
                size="lg"
                onClick={() => {
                  handleSubmit();
                }}
                disabled= {isSubmitting}
              >
                Zmie?? dane
              </Button>
              {
                            isSubmitting &&  
                           <LoadingScreenB></LoadingScreenB>
                      
                          }              
            </CardFooter>
          </form>
        )}
      </Formik>
 
        ) : (
          <>
          </>
        )}
        
         {editView=="name" ? (
        
        <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(2, "Nazwa u??ytkownika musi si?? sk??ada?? z minimum 2 znak??w!")
            .max(50, "Has??o mo??e zawiera?? maksymalnie 50 znak??w!")
            .required(FRS),
        })}
        onSubmit={(values, helpers) => {
            setTimeout(() => {
              
              helpers.setSubmitting(true);
              axiosInstance
                .put("/user/update/", {
                  username: values.name,
                })
                .then((response) => {
                  
                  enqueueSnackbar("Pomy??lnie zmieniono dane", { 
                    variant: 'success',
                });
                  helpers.setStatus("Pomyslnie zmieniono dane");
                  helpers.setSubmitting(false);

                })
                .catch((error) => {
                  // console.log("login error", error.response);
                  const errResponse = error.response;
                  enqueueSnackbar("Nazwa u??ytkownika jest ju?? zaj??ta", { 
                    variant: 'error',
                });
                  helpers.setSubmitting(false);
                  
                  helpers.setValues(
                    {
                      name: "",
                    },
                    false
                  );
                  helpers.setTouched(
                    {
                      name: false,
                    },
                    false
                  );
                  helpers.setFieldError(
                    "name",
                    "Nazwa jest w u??yciu lub jest nieprawid??owa."
                  );
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
        }) => (
          <form className={classes.form}>
            {console.log(touched, errors)}
            <CardHeader
              color="primary"
              className={classes.cardHeader}
            >
              <h4>Edytuj dane</h4>
              
            </CardHeader>
            <CardBody>
            
            <Grid container justify="center">
            <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="text"
                      >
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("email")}  >
                   Zmie?? e-mail
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("name")}  >
                   Zmie?? nazw?? u??ytkownika
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("password")}  >
                   Zmie?? has??o
              </Button>
            </ButtonGroup>
            </Grid>
              

                <Field
                component={MaterialFormikField}
                name={"name"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Nazwa u??ytkownika"
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
         
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button
                simple
                color="primary"
                size="lg"
                onClick={() => {
                  handleSubmit();
                }}
                disabled= {isSubmitting}
              >
                Zmie?? dane
              </Button>
              {
                            isSubmitting &&  
                           <LoadingScreenB></LoadingScreenB>
                      
                          } 
            </CardFooter>
          </form>
        )}
      </Formik>
 
        ) : (
          <>
          </>
        )}

{editView=="password" ? (
        
        <Formik
        initialValues={{
            password: "",
            passwordConfirm: "",
            oldPassword: "",
        }}
        validationSchema={Yup.object().shape({
            password: Yup.string()
              .min(8, "Has??o musi zawiera?? co najmniej 8 znak??w!")
              .max(50, "Has??o mo??e zawiera?? maksymalnie 50 znak??w!")
              .required("Pole wymagane")
              .oneOf(
                [Yup.ref("passwordConfirm")],
                "Has??a s?? r????ne"
              ),
            oldPassword: Yup.string()
              .min(8, "Has??o musi zawiera?? co najmniej 8 znak??w!")
              .max(50, "Has??o mo??e zawiera?? maksymalnie 50 znak??w!")
              .required("Pole wymagane"),
            passwordConfirm: Yup.string()
              .oneOf([Yup.ref("password")], "Has??a s?? r????ne")
              .required("Pole wymagane"),
          })}
          onSubmit={(values, helpers) => {
            setTimeout(() => {
              helpers.setSubmitting(true);
              axiosInstance
                .put("/user/update/", {
                  password: values.password,
                  oldpassword: values.oldPassword,
                })
                .then((response) => {

                  enqueueSnackbar("Pomy??lnie zmieniono dane", { 
                    variant: 'success',
                });
                  helpers.setStatus("Pomyslnie zmieniono has??o");
                  helpers.setSubmitting(false);
                 
                })
                .catch((error) => {
                  enqueueSnackbar("Nie uda??o si?? zmieni?? has??a, spr??buj ponownie", { 
                    variant: 'error',
                });
                  helpers.setStatus("Podano nieprawid??owe aktualne has??o")
                  console.log("chngpass error", error.response);
                  const errResponse = error.response;
                  helpers.setSubmitting(false);
                
                  helpers.setValues(
                    {
                      password: "",
                      oldPassword: "",
                      passwordConfirm:""

                    },
                    false
                  );
                  helpers.setTouched(
                    {
                      password: false,
                      oldPassword: false,
                      passwordConfirm:false
                    },
                    false
                  );
                  helpers.setFieldError(
                    "oldPassword",
                    "Podano nieprawid??owe stare has??o"
                  );

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
        }) => (
          <form className={classes.form}>
            {console.log(touched, errors)}
            <CardHeader
              color="primary"
              className={classes.cardHeader}
            >
              <h4>Edytuj dane</h4>
              
            </CardHeader>
            <CardBody>
            <Grid container justify="center">
            <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="text"
                      >
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("email")}  >
                   Zmie?? e-mail
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("name")}  >
                   Zmie?? nazw?? u??ytkownika
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("password")}  >
                   Zmie?? has??o
              </Button>
            </ButtonGroup>
            </Grid>

            
            <Field
                component={MaterialFormikField}
                name={"password"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Has??o"
                inputProps={{
                  type: "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
            <Field
                component={MaterialFormikField}
                name={"passwordConfirm"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Powt??rz has??o"
                inputProps={{
                  type: "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />

            <Field
                component={MaterialFormikField}
                name={"oldPassword"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Podaj stare has??o"
                inputProps={{
                  type: "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />


              
              
            
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button
                simple
                color="primary"
                size="lg"
                onClick={() => {
                  handleSubmit();
                }}
                disabled= {isSubmitting}
              >
                Zmie?? dane
              </Button>
              {
                            isSubmitting &&  
                           <LoadingScreenB></LoadingScreenB>
                      
                          } 
            </CardFooter>
          </form>
        )}
      </Formik>
 
        ) : (
          <>
          </>
        )}
                
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </Paper>
    </div>
  );
};

export default MaterialUiManageAccount;
