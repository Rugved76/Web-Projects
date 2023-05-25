import React, { useState } from 'react'

export default function AboutUs(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        color: props.mode==='dark'?'white':'#282828',
        backgroundColor: props.mode==='dark'?'#282828':'white'
    }
    //Reack Hook 
    // const [btntext,setbtnText] = useState("Enable Dark mode")
    
    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border : '1px solid white'
    //         })
    //         setbtnText("Enable Light mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtnText("Enable Dark mode")
    //     }
    // }
    
    return (
        <div className='container' style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Hello guys
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Text utils app
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            By Rugved
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}