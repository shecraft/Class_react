import Input from "./Input"
import Buttons from "./Buttons"
import Icon from "./Icon"
const Hero =()=>{
  const readytobrowse =()=>{
    alert `Are you ready to browse`
  }
    return(
      <>
        <div className="lorem">
          <h1 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut veniam voluptatibus consectetur beatae ad quas fuga, cupiditate veritatis. Esse necessitatibus aperiam ipsa minus! Ad quo repudiandae autem earum ex.</h1>


          <div className="buts">
           <Buttons handleClick={readytobrowse} icon={<Icon cName={"fas fa-arrow-right"}/>}  text="Browse" />
           <Input />
          </div>
        </div>
        </>
    )
}
export default Hero