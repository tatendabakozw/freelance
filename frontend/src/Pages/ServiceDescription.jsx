import React from 'react'
import GeneralLayout from '../Layout/GeneralLayout'
import userT from '../Images/IMG_5117_1_1.jpg'

function ServiceDescription() {
    return (
        <GeneralLayout>
            <div className="description">
                <div className="flex flex-row items-center px-8">
                    <div className="left w-1/2 flex flex-col items-center">
                        <div className="pic w-60 h-80 rounded overflow-hidden p-1 border-2 border-gray-300">
                            <img src={userT} alt="image" />
                        </div>
                    </div>
                    <div className="right w-1/2">
                        <p className="text-2xl text-gray-700 font-semibold">Business Name</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum laborum, voluptatem esse in quam ipsam,
                            nihil quis expedita aperiam sequi rerum, odio veniam! Rerum assumenda expedita nostrum facere sed.
                        </p>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default ServiceDescription
