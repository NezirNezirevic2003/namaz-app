import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function Header() {
    return (
        <div>
            <header className="header">
                <LocationOnIcon style={{color: 'white'}}/>
            </header>
        </div>

    );
}
