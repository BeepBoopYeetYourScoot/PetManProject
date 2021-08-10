import m from './TaskName.module.css'

export const TaskName = (props) => {
    return (
        <div className={m.TaskName} id={props.id}>
            <input type="text" placeholder='Название задачи' className={m.Input}/>
        </div>
    )
}