import React from 'react';
import styles from './Square.module.css';


export default function Square(props) {
    return (
        <button className={styles.button}>{props.value}</button>
    )
}