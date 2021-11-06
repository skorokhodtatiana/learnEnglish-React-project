import logo from '../assets/images/logo.png'


const style={height: 100,
  width:'100%'}; 
const Header = () => {
   
return(
    <div style={style} className="headerWrapper"> 
        <img style={{maxHeight:'100%', maxWidth:'100%' }} src={logo} alt={'logo'}/>
        <button>Log In</button>
        <button>Log In</button>
        <button>Sign Up</button>
    </div>
)
}

export default Header;