import {useEffect, useRef, useState} from 'react'
import {Calendar} from 'react-date-range'
import format from 'date-fns/format'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DatePick1 = () => {

    const [startCalendar, setStartCalendar] = useState('')
    const [endCalendar, setEndCalendar] = useState('')

    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)

    const refOne = useRef(null)
    const refTwo = useRef(null)

    useEffect(() => {
        setStartCalendar(format(new Date(), 'dd/MM/yyyy'))
        let now = new Date();
        if (now.getMonth() == 11) {
            setEndCalendar(format(new Date(now.getFullYear() + 1, 0, 1), 'dd/MM/yyyy'));
        } else {
            setEndCalendar(format(new Date(now.getFullYear(), now.getMonth() + 1, 1), 'dd/MM/yyyy'));
        }
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    const hideOnEscape = (e) => {
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
        if (refTwo.current && !refTwo.current.contains(e.target)) {
            setOpen1(false)
        }
    }

    const handleSelectStart = (date) => {
        setStartCalendar(format(date, 'dd/MM/yyyy'))
    }

    const handleSelectEnd = (date) => {
        setEndCalendar(format(date, 'dd/MM/yyyy'))
    }

    const getDateObj = (date) => {
        return (new Date(+date.split("/")[2], date.split("/")[1] - 1, +date.split("/")[0]))
    }

    return (
        <div className="calendarWrap">
            <div className="flex">
                <div>
                    From: <input
                    value={startCalendar}
                    readOnly
                    className={open ? "inputBox openInputBox" : "inputBox"}
                    onClick={() => setOpen(open => !open)}
                /></div>

                <div>
                    To: <input
                    value={endCalendar}
                    readOnly
                    className={open1 ? "inputBox openInputBox" : "inputBox"}
                    onClick={() => setOpen1(open1 => !open1)}
                /></div>
            </div>

            <div ref={refOne}>
                {open &&
                    <Calendar
                        date={getDateObj(startCalendar)}
                        onChange={handleSelectStart}
                        className="calendarElement"
                        color="#002cff"
                    />
                }
            </div>
            <div ref={refTwo}>
                {open1 &&
                    <Calendar
                        date={getDateObj(endCalendar)}
                        onChange={handleSelectEnd}
                        className="calendarElement"
                        color="#002cff"
                    />
                }
            </div>
        </div>
    )
}

export default DatePick1