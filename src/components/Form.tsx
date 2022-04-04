import { useState } from "react"

interface FormProps {
    setName: React.Dispatch<React.SetStateAction<string>>
    name: string,
}

const Form: React.FC<FormProps> = ({setName, name}) => {

    const [newName, setNewName] = useState<string>('')

    const nameHandler = (e: any) => {
        setNewName(e.target.value)
    }

    const sendNameHandler = (e: any) => {
        e.preventDefault()
        setName(newName)
        console.log(newName)
    }

    return (
        <>
            <form >
                <input type="text" onChange={nameHandler}></input>
                <button onClick={sendNameHandler}>Send Request</button>
            </form>
        </>
    )
}

export default Form