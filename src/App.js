import './App.css';

function App() {
  const btns1 = [1, 2, 3]
  const btns2 = [4, 5, 6]
  const btns3 = [7, 8, 9]
  const btns4 = ['CL', 0, 'GO']

  function btnMaker(btns) {
    return btns.map((btn) => {
      return <button style={{ width: '30%', height: '100%', fontSize: '3rem'}}>{btn}</button>
    })
  }

  return (
    <div className="App" >
      <header>
        <h1 style={{ 
          color: '#F9F6F6',
          fontSize: '7rem',
          }}>
          SUSHI 
        </h1>
      </header>
      <div id='middle-container'>
        <div style={{ backgroundColor: '#FFE4E4', height:'80%', width: '30%' }}>
          <form style={{ height: '100%', width: '100%' }}>
            <input placeholder='-  -  -  -' style={{ margin: '1rem', textAlign: 'center', fontSize: '2rem'}}></input>
            <div id='btns-container' style={{ height: '100%', width: '100%' }}>
              <div classname='btn-row' style={{width: '100%', height: '20%'}}>{btnMaker(btns1)}</div>
              <div classname='btn-row' style={{width: '100%', height: '20%'}}>{btnMaker(btns2)}</div>
              <div classname='btn-row' style={{width: '100%', height: '20%'}}>{btnMaker(btns3)}</div>
              <div classname='btn-row' style={{width: '100%', height: '20%'}}>{btnMaker(btns4)}</div>  
            </div>
          </form> 
        </div>
      </div>
      <footer>
        <h3 style={{ fontSize: '1rem' }}>
          ©SUSHI
        </h3>
      </footer>
    </div>
  );
}

export default App;
