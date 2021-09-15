import React from 'react'

function Form() {
    return (
        <div className="Form">
            <ul>
                <li>
                    <small>2 Items Left</small>
                </li>
                <li>
                    <ul>
                        <li>
                            <small>All</small>
                        </li>
                        <li>
                            <small>Active</small>
                        </li>
                        <li>
                            <small>Completed</small>
                        </li>
                    </ul>
                </li>
                <li><small>Clear Completed</small> </li>
            </ul>
        </div>
    )
}

export default Form
