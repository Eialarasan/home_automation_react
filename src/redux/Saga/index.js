import { all,fork} from 'redux-saga/effects'
import loginWatcher from './LoginSaga'
import homeWatcher from './HomeSaga'
import roomWatcher from './RoomSaga'
import deviceWatcher from './DeviceSaga'
import  ScheduleListSaga  from './ScheduleSaga'


export default function* sagaWatchers() {
    yield all([
        fork(loginWatcher),
        fork(homeWatcher),
        fork(roomWatcher),
        fork(deviceWatcher),
        fork(ScheduleListSaga)

    ])
}