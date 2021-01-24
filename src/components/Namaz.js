import {useState, useEffect} from 'react';
import axios from 'axios';
import '../components/Namaz.css';

const Namaz = () => {

    const api = 'http://api.aladhan.com/v1/timingsByCity?city=Sarajevo&country=Bosnia and Herzegovina&method=8'

    const [namaz, setNamaz] = useState(null)

    useEffect(() => {
        axios.get(api)
        .then(response => {
            setNamaz(response.data)
        })

    }, [api])

    if(namaz) {
        return (
            <main>
                <div className="timezone">
                    <h1>{namaz.data.meta.timezone}</h1>
                </div>
                <div className="namazi">
                <div className="header">
                    <h3>Sabah</h3>
                    <div className="time">
                    {namaz.data.timings.Fajr}
                    </div>
                </div>
                <div className="header">
                    <h3>Podne</h3>
                    <div className="time">
                    {namaz.data.timings.Dhuhr}
                    </div>
                </div>
                <div className="header">
                    <h3>Ikindija</h3>
                    <div className="time">
                    {namaz.data.timings.Asr}
                    </div>
                </div>
                <div className="header">
                    <h3>Akšam</h3>
                    <div className="time">
                    {namaz.data.timings.Maghrib}
                    </div>
                </div>
                <div className="header">
                    <h3>Jacija</h3>
                    <div className="time">
                    {namaz.data.timings.Isha}
                    </div>
                </div>
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

export default Namaz
