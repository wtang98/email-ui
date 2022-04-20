import React from 'react'
import './filterMenu.scss'

const FilterMenu = ({filterUrgentMail, handleSortByDate}) => {

    return (
        <div className='filterMenu'>
            <div className="filterMenu__container">
                <div className="filterMenu__container-urgent">
                    <p>Urgent?</p>
                    <input type="checkbox" name="urgent" id=""  onChange={filterUrgentMail}/>
                </div>
                <div className="filterMenu__container-date">
                    <p>Sort By</p>
                    <select name="" id="" defaultValue={'1'} onChange={handleSortByDate}>
                        <option value="1">Most Recent</option>
                        <option value="2">Oldest</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu