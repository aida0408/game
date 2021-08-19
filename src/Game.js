import {useState} from "react";


const Game = () => {
    const [number, setNumber] = useState(Math.round(Math.random() * 10))
    const [guess, setGuess] = useState("")
    const [message, setMessage] = useState("")
    const [freeAttempt, setFreeAttempt] = useState(3)

    const add = (e) =>{
        setGuess(e.target.value)
    }

    const reset = () =>{
        setNumber(Math.round(Math.random() * 10))
        setMessage("")
        setGuess("")
        setFreeAttempt(3)
    }
    const check = () =>{
        if (number === +guess){
            setMessage("Вы угадали!")
            setMessage("Вы не угадали!")
        } else {
            setFreeAttempt(freeAttempt -1)
        }
        setGuess("")
    }

    return (
        <div className="game">
            <h1>Угадай число с 3 попыток</h1>
            <input value={guess} type="number" placeholder="Введите число" onChange={add}/>
            <div className="btn">
                <button onClick={check}>CHECK</button>
                <button onClick={reset}>RESET</button>
            </div>
            <h4>{`У тебя осталось ${freeAttempt} попытки`}</h4>
            <h3>{message}</h3>
        </div>
    )
}

export default Game