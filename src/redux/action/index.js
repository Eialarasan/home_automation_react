import * as Login from './LoginAction'
import * as Home from './HomeAction'
import * as Room from './RoomAction'
import * as Devices from './DeviceAction'
import * as Schedule from './ScheduleAction'

export default {
    ...Login,
    ...Home,
    ...Room,
    ...Devices,
    ...Schedule
}