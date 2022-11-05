import {FC, useState, FormEvent} from 'react'
import { Grid, Box, TextField, Button, Snackbar, Alert } from '@mui/material';
import validator from 'validator'

interface ContactFormProps {
    labelName: string;
    labelEmail: string;
    labelComment: string;
    btnSubmit: string;
    warningMessage: string;
    nameErrorMessage: string;
    emailErrorMessage: string;
    messageErrorMessage: string;
    warningMessageInput: string;
  }

export const ContactForm: FC<ContactFormProps> = ({
    labelName,
    labelEmail,
    labelComment,
    btnSubmit,
    warningMessage,
    nameErrorMessage,
    emailErrorMessage,
    messageErrorMessage,
    warningMessageInput,
}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [ openAlert, setOpenAlert ] = useState(false)
    const [errormsg, setErrormsg] = useState('')  
    const [touchedName, setTouchedName] = useState(false);
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [touchedMessage, setTouchedMessage] = useState(false);

    const data = {
        name,
        email,
        message,
    }

    const handleClose = () => {
        setOpenAlert(false)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    
        if(isFormValid()){
          setErrormsg('')
          setTouchedName( false );
          setTouchedEmail( false );
          setTouchedMessage( false );
    
          console.log('Enviando...')
          fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if(res.status === 200){
              console.log('Response succeeded')
              setName('')
              setEmail('')
              setMessage('')
              setOpenAlert(true)
            }
          }).catch((error) => {
            console.log(error)
            console.log('peto la app')
          })
        }
      }

    const isFormValid = () => {
        if(name.trim().length === 0){
          setErrormsg(nameErrorMessage)
          setOpenAlert(true)
          return false
        } else if(!validator.isEmail(email)){
          setErrormsg(emailErrorMessage)
          setOpenAlert(true)
          return false
        } else if(message.length < 10){
          setErrormsg(messageErrorMessage)
          setOpenAlert(true)
          return false
        }
        return true
      }

  return (
    <Grid container>
        <Grid item xs={12}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                autoComplete="off"
                sx={{display: 'flex', flexDirection: 'column'}}
            >
                <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={errormsg ? "error" : "success"} sx={{ width: '100%' }}>
                    {
                        errormsg
                        ? errormsg
                        : warningMessage
                    }
                    </Alert>
                </Snackbar>
                <TextField 
                    type="text"
                    label={labelName}
                    id="name-contact-form"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="filled"
                    helperText={ name.length <= 0 && touchedName && warningMessageInput }
                    error={ name.length <= 0 && touchedName }
                    onBlur={ () => setTouchedName( true ) }
                    InputLabelProps={{
                        style: {
                            color: '#eceff1',
                            fontSize: '1rem'
                        }
                    }}
                    InputProps={{
                        style: {
                            color: '#eceff1',
                            backgroundColor: '#263238'
                        }
                    }}
                    sx={{mb: 3}}
                />
                <TextField 
                    type="email"
                    label={labelEmail}
                    id="email-contact-form"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="filled"
                    helperText={ email.length <= 0 && touchedEmail && warningMessageInput }
                    error={ email.length <= 0 && touchedEmail }
                    onBlur={ () => setTouchedEmail( true ) } 
                    InputLabelProps={{
                        style: {
                            color: '#eceff1',
                            fontSize: '1rem'
                        }
                    }}
                    InputProps={{
                        style: {
                            color: '#eceff1',
                            backgroundColor: '#263238'
                        }
                    }}
                    sx={{mb:3}}
                />
                <TextField 
                    type="text"
                    label={labelComment}
                    id="message-contact-form"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    variant="filled"
                    helperText={ message.length <= 0 && touchedMessage && warningMessageInput }
                    error={ message.length <= 0 && touchedMessage }
                    onBlur={ () => setTouchedMessage( true ) }
                    InputLabelProps={{
                        style: {
                            color: '#eceff1',
                            fontSize: '1rem'
                        }
                    }}
                    InputProps={{
                        style: {
                            color: '#eceff1',
                            backgroundColor: '#263238',
                        }
                    }}
                    multiline
                    rows={3}
                    sx={{mb:3}}
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    size="large" 
                    color="secondary"
                    sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
                >{btnSubmit}</Button>
            </Box>
        </Grid>
    </Grid>
  )
}