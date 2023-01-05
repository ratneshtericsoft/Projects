import {AppBar, Toolbar, styled, Box} from '@mui/material';

import LoginDialog from './account/LoginDIalog';

const Component = styled(Box)`
    height : 100vh;
    background-color : rgb(240,242,245);

`
const Header = styled(AppBar)`
    height : 220px;
    background-color : rgb(1,168,133);
    box-shadow : none;

`

const Messanger = ()=>{
    return (
        <Component>
            <Header>
                <Toolbar>

                </Toolbar>
            <LoginDialog/>
            </Header>
        </Component>
    )
}

export {Messanger}