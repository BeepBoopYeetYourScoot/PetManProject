import m from './TaskWrapper.module.css'
import { TaskComponent } from './TaskComponent/TaskComponent'

export const TaskWrapper = (props) => {
    return (
        <div className={m.TaskWrapper}>
            <TaskComponent />
            <TaskComponent />
            <TaskComponent />
            <TaskComponent />
            <TaskComponent />
        </div>
    )
}
