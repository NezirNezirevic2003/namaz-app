import axios from 'axios';
import  React, { useState , useEffect } from 'react';
import '../components/Current.css';
import '../components/Namaz.css';


export default function Current() {

    const today = new Date().toLocaleDateString()
    const api = `http://api.aladhan.com/v1/gToH?date=${today}`
    const [date, setDate] = useState(new Date());
    const [hijra, setHijra] = useState([null])
    
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    useEffect(() => {
        axios.get(api)
        .then(response => {
            setHijra(response.data.data.hijri.date)
        })

    }, [api])

    if(hijra) {
        return (
            <main>
                <div className="current">
                    <p className="current__time"> Vrijeme : {date.toLocaleTimeString()}</p>
                    <p className="current__date"> Datum : {hijra}</p>
               </div>
            </main>
        )
    }

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
}
