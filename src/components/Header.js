import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAddTask }) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onAddTask} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
