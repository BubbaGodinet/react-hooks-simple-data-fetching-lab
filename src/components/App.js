import React, { useEffect, useState } from 'react';

function App () {
const [dog, setDog] = useState(<p>Loading...</p>)
    
    useEffect(() => fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(dogImg => setDog(<img src = {dogImg.message} alt = "A Random Dog"/>)), [])
    

    return (
        <>
        {dog}
        </>
    )
}

export default App