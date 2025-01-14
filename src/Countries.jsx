import { useEffect, useState } from "react";

const CountryCard = ({
    name, flag
}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                borderRadius: "10px",
                padding: "5px",
                height: "200px",
                width: "200px",
                textAlign: "center",
            }}
        >
            <img
                src={flag}
                alt={`Flag of ${name}`}
                style={{
                    width: "100px",
                    height: "100px",
                }}
            />
            <h2>{name}</h2>
        </div>
    )
}

const API = "https://xcountries-backend.azurewebsites.net/all";
function Countries() {
    const [data, setData] = useState([]);
    // 

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(API);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchCountries();
    }, []);

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
        }}>
            {data.map((countryData) => (
                <CountryCard key={countryData.abbr} name={countryData.name} flag={countryData.flag} />
            ))}
        </div>
    )
}

export default Countries;