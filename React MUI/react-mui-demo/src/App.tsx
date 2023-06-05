import './App.css';
import { createTheme, ThemeProvider } from '@mui/material'

// import MuiButton from './components/MuiButton';
// import MuiSelect from './components/MuiSelect';
// import MuiTextField from './components/MuiTextField';
// import MuiTypography from './components/MuiTypography';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiCheckbox from './components/MuiCheckbox';
// import MuiSwitch from './components/MuiSwitch';
// import MuiRating from './components/MuiRating';
// import MuiAutoComplete from './components/MuiAutoComplete';
// import MuiLayout from './components/MuiLayout';
// import MuiCard from './components/MuiCard';
// import MuiAccordion from './components/MuiAccordion';
// import MuiImageList from './components/MuiImageList';
// import MuiNavbar from './components/MuiNavbar';
// import MuiLink from './components/MuiLink';
// import MuiBreadcrumbs from './components/MuiBreadcrumbs';
// import MuiDrawer from './components/MuiDrawer';
// import MuiSpeedDial from './components/MuiSpeedDial';
// import MuiBottomNavigation from './components/MuiBottomNavigation';
// import MuiAvatar from './components/MuiAvatar';
// import MuiBadge from './components/MuiBadge';
// import MuiList from './components/MuiList';
// import MuiChip from './MuiChip';
// import MuiResponsiveness from './components/MuiResponsiveness';
// import MuiSkeleton from './components/MuiSkeleton';
// import MuiCarousel from './components/MuiCarousel';
import SwiperDemo from './components/SwiperDemo';

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Oxygen', 
                'sans-serif'  
            ].join(',')
        },
        palette:{
            primary:{
                main: '#ff8c52',
                contrastText: '#fff'
            },
            // Rarely used only if require
            // secondary:{
            //     main:'#df6c42',
            //     contrastText: '#fff'
            // }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                {/* <MuiTypography /> */}
                {/* <MuiButton /> */}
                {/* <MuiTextField/> */}
                {/* <MuiSelect/> */}
                {/* <MuiMultiSelect/> */}
                {/* <MuiRadioButton/> */}
                {/* <MuiCheckbox/> */}
                {/* <MuiSwitch/> */}
                {/* <MuiRating/> */}
                {/* <MuiAutoComplete/> */}
                {/* <MuiLayout/> */}
                {/* <MuiCard/> */}
                {/* <MuiAccordion/> */}
                {/* <MuiImageList/> */}
                {/* <MuiNavbar/> */}
                {/* <MuiLink/> */}
                {/* <MuiBreadcrumbs/> */}
                {/* <MuiDrawer/> */}
                {/* <MuiSpeedDial/> */}
                {/* <MuiBottomNavigation/> */}
                {/* <MuiAvatar/> */}
                {/* <MuiBadge/> */}
                {/* <MuiList/> */}
                {/* <MuiChip/> */}
                {/* <MuiResponsiveness/> */}
                {/* <MuiSkeleton/> */}
                {/* <MuiCarousel/> */}
                <SwiperDemo/>
            </div>
        </ThemeProvider>
    );
}

export default App;
