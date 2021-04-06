import React from 'react'


class Overly extends React.Component{
    render(){
        return <div className="overlay" style = {{display:this.props.display}}></div>  

    }
}


export default Overly