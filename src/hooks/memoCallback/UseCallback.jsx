import React from 'react'
import ParentComponent from './parentComponent'

function UseCallback() {
    return (
        <div>
            <ParentComponent />
        </div>
    )
}

export default React.memo(UseCallback)