import ihlogo from '../images/ironhack-logo-xs.png';
import ihmenu from '../images/menu-top-xs.png';


function Menu (){
    return (
        <div className="Menu">
            <nav>
                <img src={ihlogo} alt="ihlogo"/>
                <img src={ihmenu} alt="ihmenu"/>
            </nav>
            <div className='text'>
                <h1>Say hello to ReactJS</h1>
                <p>you will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            </div>
            <div className='square'>
                <button>Awesome!</button>
            </div>          
        </div>
    )
}
export default Menu;

/*import ironhack-logo-xs from '../images/ironhack-logo-xs.png';

function Menu (){
    return (
        <div>
        <img src={ironhack-logo-xs} alt="logoih"/>
        <p>Hello people</p>
        </div>
    )
}

export default Menu;

*/
