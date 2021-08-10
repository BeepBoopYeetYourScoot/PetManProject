import m from './TaskPlace.module.css'

export const TaskPlace = (props) => {
    return (
        <div className={m.TaskPlace} id={props.id}>
            <input type="search" placeholder='Место для посещения' className={m.Input}/>
        </div>
    )
}