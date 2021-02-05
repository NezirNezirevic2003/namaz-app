import { useState, useEffect } from "react";
import axios from "axios";
import "../components/Namaz.css";
import React from "react";

export default function Prijedor() {
    const api = "https://api.vaktija.ba/vaktija/v1/71";
    const [namaz, setNamaz] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    useEffect(() => {
        try {
            const fetchNamaz = async () => {
                const response = await axios.get(api);
                setNamaz(response.data);
                setIsloading(false);
            };
            fetchNamaz();
        } catch (error) {
            console.error(error);
        }
    }, []);

    if (namaz) {
        return (
            <React.Fragment>
                <div className="timezone">
                    <h2>Hidžretski datum: {namaz.datum[0]}</h2>
                </div>
                <div className="lokacija">
                    <h2>Lokacija: {namaz.lokacija}</h2>
                </div>
                <div className="namazi">
                    <div className="header">
                        <h3>Sabah</h3>
                        <div className="time">{namaz.vakat[0]}</div>
                    </div>
                    <div className="header">
                        <h3>Podne</h3>
                        <div className="time">{namaz.vakat[2]}</div>
                    </div>
                    <div className="header">
                        <h3>Ikindija</h3>
                        <div className="time">{namaz.vakat[3]}</div>
                    </div>
                    <div className="header">
                        <h3>Akšam</h3>
                        <div className="time">{namaz.vakat[4]}</div>
                    </div>
                    <div className="header">
                        <h3>Jacija</h3>
                        <div className="time">{namaz.vakat[5]}</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    return <div>{isLoading}</div>;
}