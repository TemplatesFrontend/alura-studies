import React from "react";

class Button extends React.Component <{ children:string;}>{
    render() {

        return (
            <button style={{ 
                backgroundColor:'blue'
             }}>
                { this.props.children  }
            </button>
        )
    }
}

export default Button;