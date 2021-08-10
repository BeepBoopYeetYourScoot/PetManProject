import m from './WrapperBG.module.css'
import { TaskWrapper } from './TaskWrapper/TaskWrapper'
import { MapWrapper } from './MapWrapper/MapWrapper'

export const WrapperBG = (props) => {
    return (
        <div className={m.WrapperBG}>
            <div className={m.container}>
                <TaskWrapper id={m.tasks} />
                <MapWrapper id={m.map}/>
            </div>
        </div>
    )
}
