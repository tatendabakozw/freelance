import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function GeneralLayout({children}) {
    return (
        <div>
            <div className="nav">
                <Navbar/>
            </div>
            <div className="body min-h-screen mt-24 pb-16">
                {children}
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default GeneralLayout
