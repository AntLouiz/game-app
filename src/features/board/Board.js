import React from 'react';
import styles from './Board.module.css';
import Square from '../square/Square';


export function Board(props) {
    let squares = [];

    function renderSquare (i) {
        return <Square value={i} />;
    }

    for (let i of Array(props.value).keys()) {
        i += 1;
        if (i%3 === 1) {
            squares.push(<br></br>);
        }
        squares.push(renderSquare(i));
    }

    return (
        <div className={styles.container}>
            <h2>Next player: {props.nextPlayer}</h2>
            {squares}
        </div>
    );
}

Board.defaultProps = {
    nextPlayer: 'X'
}