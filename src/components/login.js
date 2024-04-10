import './Login.css';

function Login() {
  const btns1 = [1, 2, 3]
  const btns2 = [4, 5, 6]
  const btns3 = [7, 8, 9]
  const btns4 = ['CL', 0, 'GO']

  function btnMaker(btns) {
    return btns.map((btn) => {
      return <button style={{ width: '30%', height: '100%', fontSize: '3rem'}}>{btn}</button>
    })
  }

    return(
        <div style={{ backgroundColor: '#FFE4E4', height:'95%', width: '40%', display: 'flex', justifyContent: 'center' }}>
            <form style={{ height: '95%', width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center', margin: '1rem'}}>
                <input placeholder='-  -  -  -' style={{ height: '15%', textAlign: 'center', fontSize: '2rem'}}></input>
                <div id='btns-container' style={{ height: '85%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div classname='btn-row' style={{width: '100%', height: '20%'}}>{btnMaker(btns1)}</div>
                <div classname='btn-row' style={{width: '100%', height: '20%'}}>{btnMaker(btns2)}</div>
                <div classname='btn-row' style={{width: '100%', height: '20%'}}>{btnMaker(btns3)}</div>
                <div classname='btn-row' style={{width: '100%', height: '20%'}}>{btnMaker(btns4)}</div>  
                </div>
            </form> 
        </div>
    )
}

export default Login