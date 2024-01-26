import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import HomeReducers from './homeReducers';
import RoomReducers from './RoomReducers';
import DeviceReducers from './DeviceReducers';
import ScheduleReducers from './SchedulerReducers';


export const reducers = combineReducers({
    LOGIN:LoginReducers,
    HOME:HomeReducers,
    ROOM:RoomReducers,
    DEVICE:DeviceReducers,
    SCHEDULE:ScheduleReducers
});
