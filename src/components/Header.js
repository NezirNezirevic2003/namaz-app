import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../components/Header.css';

export default function Header(props) {
    return (
        <React.Fragment>
            <header className="header">
                <LocationOnIcon className="header_icon" style={{color: 'white', fontSize: '40px'}}/>
                
            </header>
        </React.Fragment>

    );
}
