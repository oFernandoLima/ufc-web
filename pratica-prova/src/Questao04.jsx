import React from 'react';

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
    const sharedValue = 'Hello from Context';
    
    return (
        <MyContext.Provider value={sharedValue}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };
const MyComponent = () => {
    const sharedValue = React.useContext(MyContext);

    return (
        <div>
            <h1>{sharedValue}</h1>
        </div>
    );
};

export default MyComponent;