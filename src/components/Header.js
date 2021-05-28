import propTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button text={showAdd ? 'Close' : 'Add Task'} color={showAdd ? 'red' : 'green'} onClick={onAdd} />
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
