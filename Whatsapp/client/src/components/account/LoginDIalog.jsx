import { Dialog, Typography, List as styledList, ListItem, styled, Box } from "@mui/material";
import { GoogleLogin } from '@react-oauth/google';
import { qrCodeImage } from "../../constant.js";
const LoginDialog = () => {
  const Component = styled(Box)`
    display: flex;

  `;
  const Container = styled(Box)`
    padding : 56px 0px 56px 56px;
  `; 
  const Qrcode = styled('img')(`
    width : 256px;
    height : 256px;
    marginTop : 56px 0px 56px 56px;
  `)
  const Title = styled(Typography)`
    font-size : 26px;
    color : #525252;
    font-weight : 300;
    font-family : inherit;
    margin-bottom : 25px;
  `
  const StyledList = styled(styledList)`
    font-size : 20px;
    padding : 0;
    margin-top : 15px;
    line-height : 28px;
    color : #4a4a4a
  `
  const dialogStyle = {
    height: "96%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
  };
const onSuccess =  (response)=>{
    const userData = response;
    console.log(userData)
}
const onError = (response)=>{
    console.log(response);
}

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>
              2. Tap Menu : or Settings And Select Linked device
            </ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Container>
          <Qrcode src={qrCodeImage} alt="qrCodeImage" />
          <GoogleLogin onSuccess={onSuccess} onError = {onError}/>
        </Container>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
