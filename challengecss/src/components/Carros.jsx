const Carros = ({nome, motor, potencia, toque, tempo, peso, foto}) => {
    return (
        <div>
            <h2>{nome}</h2>
            <ul>
                <li>Motor: {motor}</li> 
                <li>Potência: {potencia}</li>
                <li>Torque: {toque}</li>
                <li>Tempo de 0-100: {tempo}</li>
                <li>Peso ou massa aproximada: {peso}</li>
            </ul>
        </div>
    );
}

export default Carros;