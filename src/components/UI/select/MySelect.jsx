import React from 'react';
//select - выпадающий список-->
const MySelect = ({options, defaultValue, value, onChange }) => {
    return (
        <select style={{backgroundColor: 'black', color: 'white', marginTop: '10px' }}
            value={value}
            onChange={event =>onChange(event.target.value)}
        >
            <option disabled={true} value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;