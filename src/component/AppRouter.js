import React, { useState, useEffect } from 'react';

// component 
import Header from './Header';
import AddChallenge from './AddChallenge';
import ShowChallenge from './ShowChallenge';
const AppRouter = () => (
    <div className="body">
        <Header />
        <ShowChallenge />
        <AddChallenge />
    </div>
)

export default AppRouter;
