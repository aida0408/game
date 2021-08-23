import {useState,useEffect} from "react";


const Game = () => {
    const [random, setRandom] = useState(Math.round(Math.random() * 10))
    const [guess, setGuess] = useState("")
    const [message, setMessage] = useState("")
    const [freeAttempts, setFreeAttempts] = useState(3)
    const [off, setOff] = useState("")

    const add = (e) =>{
        setGuess(e.target.value)
    }
    const checkNumber = () =>{
        setFreeAttempts(freeAttempts -1)

        if(random > +guess){
            setMessage('Недобор')
        }else if(random< +guess){
            setMessage("Перебор")
        }
    }
    return (
        <div className='game'>
            <h1>Угадай число с 3х раз без подсказок</h1>
            <input value={guess} type="number" placeholder="add text" onChange={add} />
            <div className='btn'>
                <button onClick={checkNumber} disabled={!freeAttempts}>CHECK</button>
                <button>RESET</button>
            </div>
            <label htmlFor="mode">on</label>
            <input type="radio" id='mode' name='mode' defaultChecked={true} />
            <label htmlFor="mode">off</label>
            <input type="radio" id='mode' name='mode' />

            {
                Boolean(freeAttempts) &&
                <div>У вас осталось {freeAttempts} {freeAttempts === 1? 'попытка' : 'попытки'}</div>
            }
            <div>{message}</div>
        </div>
    )
}

export default Game