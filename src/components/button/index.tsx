import React from "react";

class Button extends React.Component <{ 
        children:string;
        type?:"button" | "submit" | "reset" | undefined;
    }>{
    render() {
        const {type = "button"} =this.props;
        return (
            <button type={type} style={{ 
                backgroundColor:'blue'
             }}>
                { this.props.children  }
            </button>
        )
    }
}

export default Button;