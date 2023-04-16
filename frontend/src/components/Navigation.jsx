import React from 'react'

const Navigation = () => {
  return (

      <header className="row">
            <div className="title">
                <a className="brand" href="/">ShopNow</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
  )
}

export default Navigation
