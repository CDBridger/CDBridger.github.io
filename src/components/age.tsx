import React from "react"
import { intervalToDuration } from 'date-fns'

export const Age = () => {
    return (
        <span>{intervalToDuration({start: new Date(1994, 6, 5), end: new Date()}).years}</span>
    )
}