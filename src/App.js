import React from 'react';

const Header = () => (
  <div className='header grid'>
    <h1 className='title'>Jiffy</h1>
  </div>
)

function App() {


  //When we have typed more than 2 characters, change the hint
  const handleChange = event => {
    const {value} = event.target
    if(value.length > 2) {
    }
  }


  //Grab info from input and search when press enter
  const handlekeyPress = event => {
    const {value} = event.target

    if (value.length > 2 && event.key === 'Enter'){
      alert(`search for ${value}`)
    }
    console.log(value)
  }



  return (
    <div className="page">
      <Header/>
      <div className='search grid'>
        {/*images will go here*/}
        <input className='input grid-item' placeholder='Type something' onChange={handleChange} onKeyPress={handlekeyPress}/>
      </div>
    </div>
  );
}

export default App;
