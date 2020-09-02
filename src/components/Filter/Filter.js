import React from 'react'
import styles from './Filter.module.css'

const Filter = ({value, onChangeFilter}) =>(
    <div className={styles.filterContainer}>
    <label className={styles.filterName} htmlFor='filter'>Find contacts by name</label>
    <input
    className={styles.filterField}
    type='text'
    value={value}
    onChange={(e)=> onChangeFilter(e.target.value)}
    id='filter'/>
    </div>
)

export default Filter;