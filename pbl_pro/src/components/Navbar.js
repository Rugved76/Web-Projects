import React from 'react';

function Navbar() {
    return (
        <div >
            <nav className="navbar">
                About Us
            </nav>
            <div className='abstract'>
                <b>Abstract :</b>
                <p className="abs-par">
                    In Covid-19 pandemic situation it was both unsafe and
                    hectic to consult with general physicians and doctors who
                    could cater to the needs of the patients regarding body
                    check-up, physical diagnosis, analysis of lab reports.
                    Consulting the doctors virtually without any physical
                    contact would have helped a lot of patients and proved
                    convenient to doctors. Keeping this in mind we are
                    creating an application which simply skips the process of
                    reaching out to hospitals and clinics and hence avoid
                    physical contact. A system that provides an easy,
                    accurate and secured way in talking to their health
                    expertise while saving a lot of time and effort at the same
                    time would be considered as a great leap to them.
                    Specifically this chat-application aims to accomplish the
                    following objectives.
                </p>
                <ul className='unorlis'>
                    <li>
                        To provide an online-chat that will help people talk to doctors without going to their clinic.
                    </li>
                    <li>
                        To create an online consultation system that can
                        help patients find solutions in their health problems in
                        a convenient way which is proper and more
                        accurate transactions between doctors and
                        patients.
                    </li>
                    <li>
                        To also develop applications where patients can
                        check their BMI and Life Expectancy Parameters
                        through built-in calculators available on the website.
                    </li>

                </ul>
            </div>
            <div className='creaters'>
                    <div className="div1">Saif</div>
                    <div className="div2">Rugved</div>
                    <div className="div3">Rishikesh </div>
                    <div className="div4">Pranish</div>
                    <div className="div5">Tejas</div>
            </div>
            <div className="footer">
                My Fit 
            </div>
        </div>
    );
}

export default Navbar;