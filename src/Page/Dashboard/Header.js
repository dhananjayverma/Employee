import React from 'react'

function Header({ setIsAdding }) {
    return (
        <div>
            <h1>Employee Mangement System</h1>
            <div style={{ marginTop: '30px', marginBottom: "18px" }}>
                <button onClick={() => setIsAdding(true)} className='round-button'> Add Button</button>

            </div>

        </div>
    )
}

export default Header
