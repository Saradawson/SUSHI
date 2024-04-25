import './LoginForm.css';

function LoginForm() {
    const btns1 = [1, 2, 3]
    const btns2 = [4, 5, 6]
    const btns3 = [7, 8, 9]
    const btns4 = ['CL', 0, 'GO']
  
    function btnMaker(btns) {
      return btns.map((btn) => {
        return <button value={btn}>{btn}</button>
      })
    }
  
      return(
          <div id='login-container'>
              <form>
                  <input placeholder='-  -  -  -'></input>
                  <div className='btns-container'>
                    <div className='btn-row'>{btnMaker(btns1)}</div>
                    <div className='btn-row'>{btnMaker(btns2)}</div>
                    <div className='btn-row'>{btnMaker(btns3)}</div>
                    <div className='btn-row'>{btnMaker(btns4)}</div>  
                  </div>
              </form> 
          </div>
      )
  }
  
  export default LoginForm;