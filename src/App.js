import './App.css';
import React from 'react';

function App() {
  const [color, setColor] = React.useState('Click');

  let colors = ['Rojo', 'Azul', 'Morado', 'Amarillo', 'Celeste', 'Rosado', 'Gris', 
    'Naranja', 'Verde', 'Cian', 'Cafe', 'Dorado', 'Plateado'];

  function backColor(){
    if(color === 'Rojo'){
      document.getElementById('color').style.backgroundColor="red";
      document.getElementById('color').style.color="white"
    }else if (color === 'Azul'){
      document.getElementById('color').style.backgroundColor="blue";
      document.getElementById('color').style.color="white"
    }else if (color === 'Morado'){
      document.getElementById('color').style.backgroundColor="purple";
      document.getElementById('color').style.color="white"
    }else if (color === 'Amarillo'){
      document.getElementById('color').style.backgroundColor="yellow";
      document.getElementById('color').style.color="black"
    }else if (color === 'Celeste'){
      document.getElementById('color').style.backgroundColor="#00FFEA";
      document.getElementById('color').style.color="black"
    }else if (color === 'Rosado'){
      document.getElementById('color').style.backgroundColor="violet";
      document.getElementById('color').style.color="black"
    }else if (color === 'Gris'){
      document.getElementById('color').style.backgroundColor="grey";
      document.getElementById('color').style.color="black"
    }else if (color === 'Naranja'){
      document.getElementById('color').style.backgroundColor="orange";
      document.getElementById('color').style.color="black"
    }else if (color === 'Verde'){
      document.getElementById('color').style.backgroundColor="green";
      document.getElementById('color').style.color="white"
    }else if (color === 'Cian'){
      document.getElementById('color').style.backgroundColor="#8EFFFF";
      document.getElementById('color').style.color="black"
    }else if (color === 'Cafe'){
      document.getElementById('color').style.backgroundColor="brown";
      document.getElementById('color').style.color="white"
    }else if (color === 'Dorado'){
      document.getElementById('color').style.backgroundColor="#FFD700";
      document.getElementById('color').style.color="black"
    }else if (color === 'Plateado'){
      document.getElementById('color').style.backgroundColor="#BEBEBE";
      document.getElementById('color').style.color="black"
    }
  }
  
  
  function getRandomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  function randomArray(){
    let index = getRandomNumber(0, colors.length-1)
    return colors[index];
  }

  function colores(){
    setColor(randomArray());
  }

  React.useEffect (() =>{
    backColor()
  })


  return (
    <div>
      <div>
        <h1 className='H1'> Ihan Gilberto Alexander Marroquin Sequen</h1>
      </div>
      <div>
        <h1 id='color' className='App-div'>{color}</h1>
      </div>
      <div className='Center'>
      <button className='ColoresRandom' onClick={() =>{
        colores()
        }}>
          Colores random
        </button>
      </div>
    </div>
  );
}

export default App;
