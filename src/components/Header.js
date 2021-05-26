import propTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log("The button got clicked!");
    }
    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button text="Add Task" color="green" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Manager!',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

//CSS IN JS! **Important to remember!**
//var headerStyle = {
//    color: "red",
//    backgroundColor: "black"
//}

export default Header
