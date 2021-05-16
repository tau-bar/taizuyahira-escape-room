import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Paragraph from '../paragraph.component';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './button.styles.scss';

const CustomButton = ({ passed, failPara, successPara, onClick }) => {
    const theme = createMuiTheme({
        palette: {
          primary: green,
        },
      });
    return (
        <div className = 'custom-button'>
        <ThemeProvider theme = {theme}>
        {passed ? 
            <div>
            <Paragraph content = {successPara}/>
            <Button onClick = {onClick} variant="contained" color = "primary">
            Proceed
            </Button>
            </div>
            : 
            <div>
            <Paragraph content = {failPara}/>
            <Button variant="contained" disabled>
            WRONG
            </Button>
            </div>

        }        
        </ThemeProvider>
        </div>
    )
}

export default CustomButton;
