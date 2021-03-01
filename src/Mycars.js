import React from "react";
import Car from "./Cars"

class Mycars extends React.Component{

    noCopy = () => {
        alert("Merci de ne pas copier le texte");
    }

    addStyle = (e) => {
        if(e.target.classList.contains("styled")){
            e.target.classList.remove("styled");
        } else {
            e.target.classList.add("styled");
        }
        
    }

    render(){
        return(
            <div>
                <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>
                <p onCopy={this.noCopy}>Cladibus motibus feris feris excursibus sane quidam adulescentem sola in.</p>
                <Car color="Rouge">Ford</Car>
                <Car color="Noir">Mercedes</Car>
                <Car color="Vert"></Car>
            </div>
        )
    }
}

export default Mycars