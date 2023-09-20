import {Box, Grid, Button, TextField} from '@mui/material';
import customFetch from '../../utils/customFetch';
import getFormValues from '../../utils/getFormValues';



function MessageForm() {

  const onSubmit = async (e) => {
    e.preventDefault();

    const {isEmpty, instanceData} = getFormValues(e.currentTarget);
    console.log(e.currentTarget);
     
    if(isEmpty) {
      console.log('please provide all values');
      return;
    }
    
    try {
      //if async data fetch fells, the error below is an axios error
      const {data} = await customFetch.post('/messages', instanceData);
      console.log(data.success);
      // instanceData.messenger = '';
      // instanceData.email = '';
      // instanceData.phoneNumber = '';
      // instanceData.content = '';
      // console.log(instanceData);
      
    } catch (error) {
      //an axios error whose message can be overwritten
      if(error){
        //error.message = "coocoo for cocoa puffs!"
        console.log(error.message);
      }
    }
  }

  return (
    <Box width='80%' m='40px auto'>
      <Box>
        <Box m='30px auto'>
          <Box>
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box component="form" onSubmit={onSubmit} sx={{ mt: 3, display: 'flex', flexDirection: 'column' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      // autoComplete="given-name"
                      name="messenger"
                      required
                      fullWidth
                      id="messenger"
                      label="Name"
                      autoFocus
                      type='text'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      required
                      fullWidth
                      name="phoneNumber"
                      label="Phone Number"
                      type="text"
                      id="phoneNumber"
                      // autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      required
                      fullWidth
                      name="content"
                      label="Message"
                      multiline
                      rows={4}
                      defaultValue="Default Value"
                      id="content"
                      // autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send
                </Button>
              </Box>
            </Box>              
          </Box>
        </Box>
      </Box>      
    </Box>
  )
}
export default MessageForm;