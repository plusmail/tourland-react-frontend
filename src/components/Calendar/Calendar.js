import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from "uuid";
import { selectListItems } from '@/redux/crud/selectors';
import {crud} from '@/redux/crud/actions';
import * as actionTypes from './auth/types';


import {combineReducers} from "redux";
import {reducer as authReducer} from "@/redux/auth";
import {reducer as notifyReducer} from "@/redux/notify";
import {reducer as crudReducer} from "@/redux/crud";
import {reducer as erpReducer} from "@/redux/erp";
import {reducer as settingsReducer} from "@/redux/settings";

const appReducer = combineReducers({
    auth: authReducer,
    notify: notifyReducer,
    crud: crudReducer,
    erp: erpReducer,
    settings: settingsReducer,
});


export const MyCalendar = () => {
    const [events, setEvents] = useState([]);
    const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);
    let entity = "calendar"
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(crud.list({ entity }));


    }, [listResult]);




    const handleSelect = (info) => {
        console.log("88888888888->" );
        const { start, end } = info;
        const eventNamePrompt = prompt("Enter111, event name");
        if (eventNamePrompt) {
            setEvents([
                ...events,
                {
                    start,
                    end,
                    title: eventNamePrompt,
                    id: uuid(),
                },
            ]);
        }
    };

    return (
        <div>
            <FullCalendar
                editable
                selectable
                events={events}
                select={handleSelect}
                headerToolbar={{
                    start: "today prev next",
                    end: "dayGridMonth dayGridWeek dayGridDay",
                }}
                plugins={[daygridPlugin, interactionPlugin]}
                views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
            />
        </div>
    );
};

export default MyCalendar;
