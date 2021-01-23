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
                <p>Sabah : {namaz.data.timings.Fajr}</p>
                <p>Podne : {namaz.data.timings.Dhuhr}</p>
                <p>Ikindija : {namaz.data.timings.Asr}</p>
                <p>Akšam : {namaz.data.timings.Maghrib}</p>
                <p>Jacija : {namaz.data.timings.Isha}</p>
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
