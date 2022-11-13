import React from 'react'

function Columns() {
    const items = [{
        id: 1,
        title: "testing"
    }]
  return (
    <>
        {
            items.map(item => (
                <React.Fragment key={item.id}>
                    Title {item.title}
                </React.Fragment>
            ))
        }
        <td>Name</td>
        <td>Salinpaul</td>
    </>
  )
}

export default Columns