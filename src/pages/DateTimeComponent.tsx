import React, { useEffect, useState } from 'react';

const DateTimeComponent: React.FC = () => {
    const [dateTime, setDateTime] = useState<Date | null>(null);

    useEffect(() => {
        setDateTime(new Date());
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!dateTime) {
        return null; // or a loading spinner
    }

    return (
        <div className='date-time'>
            {dateTime.toLocaleString()}
        </div>
    );
}

export default DateTimeComponent;
