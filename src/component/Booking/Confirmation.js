import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@mui/material'

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const { firstName, lastName,  country, date, message } = values
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container  component="main" maxWidth="xs">
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Date" secondary={Date}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Country of Residence" secondary={country}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="message" secondary={message}/>
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={ Previous }
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={ Continue }
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Book
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Confirmation;