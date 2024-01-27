import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <Header>
            <div className="logo">
                <Link to="/">
                    <h2>Akash Writes!</h2>
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <button>
                            <Link to="/">Home</Link>
                        </button>
                    </li>

                    <li>
                        <button>
                            <Link to="/blog">Blog</Link>
                        </button>
                    </li>
                    
                </ul>
            </nav>
        </Header>
    </>
  )
}

export default Header