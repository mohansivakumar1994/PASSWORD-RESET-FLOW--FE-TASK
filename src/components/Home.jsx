import React from 'react';

const Home = () => {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row justify-content-center">
                <ul className="nav nav-pills nav-justified mb-3 p-3 rounded shadow-sm" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active border border-primary rounded mr-2" id="tab-login" data-mdb-pill-init href="/login" role="tab"
                            aria-controls="pills-login" aria-selected="true" style={{ fontSize: '0.8rem' }}>Login</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link border border-primary rounded ml-2" id="tab-register" data-mdb-pill-init href="/signup" role="tab"
                            aria-controls="pills-register" aria-selected="false" style={{ fontSize: '0.8rem' }}>Register</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
