import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Signup = () => {
    const paperStyle = { padding: 20, height: 450, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Пожалуйста, заполните эту форму, чтобы создать учетную запись!</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Я принимаю правила и условия."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
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