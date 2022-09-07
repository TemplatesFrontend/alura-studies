import React from "react";

class Button extends React.Component <{ 
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
}

export default Button;