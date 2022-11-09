import React from 'react'

function Person1({name, age, skill}: {name: string, age: number, skill: string}) {
  return (
    <div>
        <h2>
            I am {name}. I am {age} years old. I know {skill}
        </h2>
    </div>
  )
}

export default Person1