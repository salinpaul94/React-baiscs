import React from 'react';
import Person from './Person';

function NameList() {

    const names = ['Bruce', 'Clark', 'Diana']

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 35,
            skill: 'JS'
        },
        {
            id: 2,
            name: 'Diana',
            age: 40,
            skill: 'HTML5'
        }
    ]
    const nameList = names.map(name => <h2>{name}</h2>)
    const personList = persons.map(person => (
        <Person person={person}/>
    ))

    return (
        <div>
            {personList}
            {nameList}

            {/* {
                names.map(name => <h2>{name}</h2>)
            } */}

            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
        </div>
    )
}

export default NameList