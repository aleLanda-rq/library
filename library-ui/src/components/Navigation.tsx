import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../navigation.css';
import BookSearch from './BookSearch';
import logo from "../assets/logo.png"

function Navigation(){

    return(
        <Stack direction={"row"} justifyContent={"space-between"} className='nav' alignItems={"center"}>
            <img src={logo} className='logo'/>
            <Stack>
            <BookSearch/>
            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"} spacing={2}  marginRight={"1.2rem"}>
                <AccountCircleIcon/>
                <ShoppingCartIcon/>
            </Stack>
        </Stack>

    )

}
export default Navigation;
