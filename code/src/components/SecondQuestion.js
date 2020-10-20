import React from 'react'
import { useState} from 'react'

export const SecondQuestion = () => {
    const [location, setLocation] = useState('');

    return (
        <div className='second-question'>
        <form>
            <h2>Where are you from? (as in where did you grow up)</h2>
            <label>
                <select
            onChange={event => setLocation(event.target.value)}
            value={location}
            >
            <option value=''>Select where you are from:</option>
            <option value='sweden'>Sweden</option>
            <option value='other european country'>Other European Country</option>
            <option value='africa'>Africa</option>
            <option value='south america'>South America</option>
            <option value='north america'>North America</option>
            <option value='asia'>Asia</option>
            <option value='australia'>Australia</option>
            </select>
                </label>
        </form>
        </div>
    );
};