import {useState, useEffect} from 'react';
import axios from 'axios';
import '../components/Namaz.css';

const Namaz = () => {
    const api = 'http://api.aladhan.com/v1/timingsByCity?city=Sarajevo&country=United Arab Emirates&method=8'

    const [namaz, setNamaz] = useState(null)

    useEffect(() => {
        axios.get(api)
        .then(response => {
            setNamaz(response.data)
        })

    }, [api])

    if(namaz) {
        return (
            <div className="namazi">
                <h1>{namaz.data.timings.Fajr}</h1>
                <h1>{namaz.data.timings.Dhuhr}</h1>
                <h1>{namaz.data.timings.Asr}</h1>
                <h1>{namaz.data.timings.Maghrib}</h1>
                <h1>{namaz.data.timings.Isha}</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
}

export default Namaz
