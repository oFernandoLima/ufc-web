import styles from "./Temperatura.module.css";

const Temperatura = ({temperaturaEmKelvin}) => {

    function celsiusParaFahrenheit(celsius) {
        const fahrenheit = (celsius * 1.8) + 32
        return fahrenheit
    }

    function fahrenheitParaCelsius(fahrenheit) {
        const celsius = (fahrenheit - 32) / 1.8
        return celsius
    }

    function kelvin(kelvin) {
        const celsius = kelvin - 273.15
        const fahrenheit = celsiusParaFahrenheit(celsius)
        return {
            celsius: celsius,
            fahrenheit: fahrenheit
        }
    }

    const {celsius, fahrenheit} = kelvin(temperaturaEmKelvin)

    // Utilizando aqui apenas para testar a função, mas não é necessário
    console.log(fahrenheitParaCelsius(fahrenheit))

    return (
        <div className={styles.card}>
            <h1 className={styles.celsius}>{celsius}°C</h1>
            <h1 className={styles.fahrenheit}>{fahrenheit}°F</h1>
            <h1 className={styles.kelvin}>{temperaturaEmKelvin}K</h1>
        </div>
    )
}

export default Temperatura;