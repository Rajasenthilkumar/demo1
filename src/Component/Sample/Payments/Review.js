import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import  { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';


const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));


function Review() {
  
  return (
    <div>
      <Card style={{ backgroundColor: '#F5F5F5', borderBottom: (t) => `1px solid ${t.palette.divider}` }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Acme Introduction Trivia
          </Typography>
          <Typography variant="body3" paragraph>
            Where in the World
          </Typography>
          <Typography variant="body1" paragraph>
            Drive file name
            <br />
            <a href="https://docs.google.com/spreadsheet/...." target="_blank" rel="noopener noreferrer">
              https://docs.google.com/spreadsheet/....
            </a>
          </Typography>
        </CardContent>
      </Card>
      <Grid container alignItems="right" spacing={2} sx={{ p: 1 }} >
        <React.Fragment >
          <Grid item xs={1}>
            <Avatar sx={{ backgroundColor: '#FFC900', color: '#211A00' }}>1</Avatar>
          </Grid>
          <Grid item xs={6}>
            <Typography >Validate your content</Typography>
          </Grid>
          <Grid item xs={5} container justifyContent="flex-end">
            <Button
              variant="outlined"
              color="primary"
              sx={{
                backgroundColor: 'transparent',
                borderColor: '#c4c4c4',
                color: '#212121',
                margin: 2,
              }}
            >
              VALIDATE
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Avatar sx={{ backgroundColor: '#FFC900', color: '#211A00' }}>2</Avatar>
          </Grid>
          <Grid item xs={6}>
            <Typography >Publish it</Typography>
          </Grid>
          <Grid item xs={5} container justifyContent="flex-end">
            <Button
              variant="outlined"
              color="primary"
              sx={{
                backgroundColor: 'transparent',
                borderColor: '#c4c4c4',
                color: '#212121',
                margin: 2,
              }}
            >
              PUBLISH CUSTOM THEME
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Avatar sx={{ backgroundColor: '#FFC900', color: '#211A00' }}>3</Avatar>
          </Grid>
          <Grid item xs={6}>
            <Typography>Share with other (optional)</Typography>
           

            <BootstrapTooltip title="Add" placement="right"    >
              <Button>Bootstrap</Button>

            </BootstrapTooltip>
          </Grid>
          <Grid item xs={5} container justifyContent="flex-end">
          </Grid>
        </React.Fragment>

      </Grid>



      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              label="Share with"
              fullWidth
              id="outlined-size-normal"
              defaultValue="emma@acme.com,ak@acme.com"
              helperText="Specify multiple emails by using commas as a separator."
            />
            <Button
              variant="outlined"
              color="primary"
              sx={{
                backgroundColor: 'transparent',
                borderColor: '#c4c4c4',
                color: '#212121',
                marginLeft: 2, // Adjust margin as needed
              }}
            >
              SHARE
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Review;
