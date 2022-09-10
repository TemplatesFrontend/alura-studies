import React from "react";

/* Refatoração*/ 
interface Props {
    type?:"button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Button ({ onClick, type, children}:Props) {
    return (
        <button 
            onClick={onClick} 
            type={type} style={{ 
            backgroundColor:'blue'
         }}>
            { children  }
        </button>
    )
}

/*class Button1 extends React.Component <{ 
        children:string;
        type?:"button" | "submit" | "reset" | undefined,
        onClick?: () => void; 
    }>{
    render() {
        const {type = "button", onClick} =this.props;
        return (
            <button onClick={onClick} type={type} style={{ 
                backgroundColor:'blue'
             }}>
                { this.props.children  }
            </button>
        )
    }
}*/

export default Button;