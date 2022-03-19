import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


const Register = ()=>{
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [dayOfBirth, setDayOfBirth] = useState();
    const [address, setAddress] = useState();
    const [city, setCity ] = useState();
    const [zipCode, setZipCode] = useState();
    const [landLine, setLandLine] = useState();
    const [cellular, setCellular] = useState();
    const [checkBox, setCheckBox] = useState(false);
    const [other, setOther] = useState();

    const inputData = e =>{
        e.preventDefault();
        console.log(firstName)
        console.log(lastName)
        console.log(dayOfBirth)
        console.log(address)
        console.log(city)
        console.log(zipCode)
        console.log(landLine)
        console.log(cellular)
        console.log(checkBox)
        console.log(other)
    }

    const dateFix = date =>{
        const dateOfBirth = `${date.getFullYear()}-${date.getUTCMonth()+1}-${date.getUTCDate()}`;
        setDayOfBirth(dateOfBirth);
    }

    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
            <h1>Covid19 - Registration Form</h1>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <div>
                    <form onSubmit={inputData}>
                        <div>
                            <TextField className="mx-2"
                                required
                                id="outlined-required"
                                label="First Name"
                                defaultValue=""
                                onChange={e => setFirstName(e.target.value)}
                            />

                            <TextField className="mx-2"
                                required
                                id="outlined-required"
                                label="Last Name"
                                defaultValue=""
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>

                        <div className="mt-5">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date of birth"
                                value={dayOfBirth}
                                inputFormat="dd/MM/yyyy"
                                onChange={(newValue) => {
                                    dateFix(newValue);
                                }}
                                renderInput={(params) => <TextField className="mx-2 mt-3" {...params} />}
                            />
                        </LocalizationProvider>


                        </div>

                        <div className="mt-5">
                            <TextField className="mx-2"
                                required
                                id="outlined-required"
                                label="Address"
                                defaultValue=""
                                onChange={e => setAddress(e.target.value)}
                            />
                        </div>

                        <div className="mt-5">
                            <TextField className="mx-2"
                                required
                                id="outlined-required"
                                label="City"
                                defaultValue=""
                                onChange={e => setCity(e.target.value)}
                            />

                            <TextField className="mx-2"
                                required
                                id="outlined-required"
                                label="Zip Code"
                                defaultValue=""
                                onChange={e => setZipCode(e.target.value)}
                            />
                        </div>

                        <div className="mt-5">
                            <TextField className="mx-2"
                                required
                                id="outlined-required"
                                label="Land Line"
                                defaultValue=""
                                onChange={e => setLandLine(e.target.value)}
                            />

                            <TextField className="mx-2"
                                required
                                id="outlined-required"
                                label="Cellular"
                                defaultValue=""
                                onChange={e => setCellular(e.target.value)}
                            />
                        </div>

                        <div className="mt-5">
                            <FormControlLabel control={<Checkbox onChange={()=>setCheckBox(!checkBox)}
                            />} label="Have been infected by COVID-19 before"/>
                        </div >
                            
                        <div className="d-flex justify-content-center mt-5">
                            <Button type="submit" variant="outlined">Send form</Button> 
                        </div>
 
                    </form>
                </div>
            </div>
        </div>
    );   
};

export default Register;