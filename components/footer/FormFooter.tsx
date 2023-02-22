import {FC, useState, FormEvent} from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import validator from 'validator';

interface FormProps {
  labelName: string;
  labelEmail: string;
  labelComment: string;
  btnSubmit: string;
  warningMessage: string;
  nameErrorMessage: string;
  emailErrorMessage: string;
  messageErrorMessage: string;
  warningMessageInput: string;
  variantForm: string;
}


// TODO: validar el formulario desde el backend y frontend
// TODO: las rayas de los inputs darles un color claro

export const FormFooter: FC<FormProps> = ({
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

  const data = {
    name,
    email,
    message,
  }

  const [ openAlert, setOpenAlert ] = useState(false)
  const [errormsg, setErrormsg] = useState('')
  const [touchedName, setTouchedName] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedMessage, setTouchedMessage] = useState(false);
  const [btnForm, setBtnForm] = useState(false);

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
      setBtnForm(true);

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
          setBtnForm(false)
        }
      }).catch((error) => {
        console.log(error)
        console.log('peto la app')
      })
    }
  }

  // TODO: convertir en helper
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
    <Box component="form" onSubmit={handleSubmit}>
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
          id="name" 
          label={labelName} 
          variant={'standard'}
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name" 
          helperText={ name.length <= 0 && touchedName && warningMessageInput }
          error={ name.length <= 0 && touchedName }
          onBlur={ () => setTouchedName( true ) }
          fullWidth
          InputLabelProps={{
            style: {
                color: '#263238',
                fontSize: '1rem'
            }
          }}
          InputProps={{
            style: {
                color: '#263238'
            }
          }}
          sx={{ mb:2 }}
      />
      <TextField 
          type="email"
          id="email" 
          label={labelEmail} 
          variant={'standard'} 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          helperText={ email.length <= 0 && touchedEmail && warningMessageInput }
          error={ email.length <= 0 && touchedEmail }
          onBlur={ () => setTouchedEmail( true ) } 
          fullWidth
          InputLabelProps={{
            style: {
                color: '#263238',
                fontSize: '1rem'
            }
          }}
          InputProps={{
            style: {
                color: '#263238'
            }
          }}
          sx={{ mb:2 }} 
      />
      <TextField 
          type="text"
          id="message" 
          label={labelComment} 
          variant={'standard'} 
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="message" 
          helperText={ message.length <= 0 && touchedMessage && warningMessageInput }
          error={ message.length <= 0 && touchedMessage }
          onBlur={ () => setTouchedMessage( true ) }
          multiline
          fullWidth 
          rows={3}
          InputLabelProps={{
            style: {
                color: '#263238',
                fontSize: '1rem'
            }
          }}
          InputProps={{
            style: {
                color: '#263238'
            }
          }}
          sx={{ mb:2 }} 
      />
      {
        btnForm 
        ? 
        <Box 
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <CircularProgress />
        </Box>
        :
        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          color="secondary"
          sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
        >{btnSubmit}</Button>
      }
      
      
    </Box>
  )
}
