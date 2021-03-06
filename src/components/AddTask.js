import React from 'react'
import {useState} from 'react'
import DateTimePicker from 'react-datetime-picker';



const AddTask = ({onAddTask}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        onAddTask({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder='Add task' />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <DateTimePicker
                        onChange={setDay}
                        value={day}
                        placeholder='Add day & time'
                    />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox'
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type='submit' value='Save task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
