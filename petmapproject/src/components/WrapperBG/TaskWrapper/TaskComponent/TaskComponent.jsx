import m from './TaskComponent.module.css'
import {TaskName} from './TaskName/TaskName'
import {TaskPlace} from './TaskPlace/TaskPlace'

export const TaskComponent = (props) => {
    return (
        <div className={m.TaskComponent}>
            <div className={m.container}>
                <TaskName id={m.name} />
                <TaskPlace id={m.place} />
                <div id={m.time}>Время</div>
                <div id={m.rating}>Оценка</div>
            </div>
        </div>
    )
}