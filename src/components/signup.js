import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
const Signup = () => {

    const initialValues = {
        username: '',
        password: '',
        number: '',
        remember: false
    }
    const phoneRegExp = '[\\+]?\\d*(\\(\\d{3}\\))?\\d*\\-?\\d*\\-?\\d*\\d$'

    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required"),
        honeNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    })
    return (
        <Grid>
            <Paper style={{ padding: 20, height: 450, width: 300, margin: "0 auto" }}>
                <Grid align='center'>
                    <Avatar style={{ backgroundColor: '#1bbd7e' }}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={{ margin: 0 }}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Пожалуйста, заполните эту форму, чтобы создать учетную запись!</Typography>
                </Grid>
               <Formik initialValues={initialValues} validationSchema={validationSchema}>
                    <Form>
                        <TextField  fullWidth label='Name' placeholder="Enter your name" name='name'/>
                        <TextField fullWidth label='Email' placeholder="Enter your email" name='email'/>
                        <TextField as={TextField} fullWidth label='Phone number' placeholder="Enter your phone number" name='phoneNumber'/>
                        <TextField fullWidth label='Password' placeholder="Enter your password" name='password'/>
                        <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="Я принимаю правила и условия."
                        />
                        <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                    </Form>
               </Formik>
            </Paper>
        </Grid>
    )
}

export default Signup;





// можно добавить есть поля гендер >>>>>>>>
                    // {/* <FormControl component="fieldset" style={marginTop}>
                    //     <FormLabel component="legend">Gender</FormLabel>
                    //     <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                    //         <FormControlLabel value="female" control={<Radio />} label="Female" />
                    //         <FormControlLabel value="male" control={<Radio />} label="Male" />
                    //     </RadioGroup>
                    // </FormControl> */}
                    // {/* <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" /> */}