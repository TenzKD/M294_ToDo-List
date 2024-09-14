import logo from '../icons/note.png'
import "../styles/title.css"

export default function Title(){
    return (
        <>
        <span className='title'>
        <img src={logo} className='title__logo' alt="notepad icon" />
        <h1>TinkNote</h1>
        </span>
        </>
    )
}