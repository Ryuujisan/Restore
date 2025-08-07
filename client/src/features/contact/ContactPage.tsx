import {decrement, increment} from "./conterReducer";
import {Button, ButtonGroup, Typography } from "@mui/material";
import {useAppDispatch, useAppSelector } from "../../app/store/store";
const ContactPage = () => {
    
    const {data} = useAppSelector(state => state.conter)
    const dispatch = useAppDispatch();
    return (
        <div>
            <Typography variant={'h2'}>
                Contact Page
            </Typography>
            <Typography variant={'body1'}>
                The data is: {data}
            </Typography>
            
            <ButtonGroup>
                <Button onClick={() => dispatch(decrement(1))} color={'error'}>Decrement</Button>   
                <Button onClick={() => dispatch(increment(1))} color={'secondary'}>Decrement</Button>   
                <Button onClick={() => dispatch(increment(5))} color={'primary'}>Increment by 5</Button>   
            </ButtonGroup>
            
        </div>
    );
};

export default ContactPage;