import  React, { useState , useEffect } from 'react';
import '../components/Current.css';

export default function Current() {
    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className="current">
            <p className="current__time"> Vrijeme : {date.toLocaleTimeString()}</p>
            <p className="current__date"> Datum : {date.toLocaleDateString()}</p>

        </div>
    )
}