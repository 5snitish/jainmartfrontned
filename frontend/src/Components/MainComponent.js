import React  from 'react'
 
import NavBar from './NavBar'
import Overly from './Overlay'
import Sidebar from './Sidebar'
import GoogleFontLoader from  'react-google-font-loader'
import "adminbsb-materialdesign/css/themes/all-themes.css"

export class MainComponent extends React.Component {

    state ={
        bodyClass:"theme-blue grey ls-closed",
        displayOverly:'none',
        width:window.screen.width
    }

    onBarClick = ()=>{
        if (this.state.bodyClass=='theme-blue grey ls-closed overlay-open')
        {
            this.setState({bodyClass:"theme-blue grey ls-closed  "})
            this.setState({displayOverly:"none"})
             
        }
        else if(this.state.bodyClass=='theme-blue grey ls-closed' )
        {
            this.setState({bodyClass:"theme-blue grey ls-closed overlay-open"})
            this.setState({displayOverly:"block"})
            console.log('ok')
        };
    }
     onscreenresize=()=>{
         this.setState({width:window.screen.width})
         
     }
    componentWillMount() {
        window.addEventListener("resize", this.onscreenresize)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onscreenresize)
    }
    componentDidMount(){
        var inputall = document.querySelectorAll("input")
        inputall.forEach((input)=>{
           input.addEventListener("focus",function (){
            this.parentNode.className= "form-line focused"
        })
        })
        var inputall = document.querySelectorAll("input")
        inputall.forEach((input)=>{
           input.addEventListener("blur",function (){
            this.parentNode.className= "form-line"
        })
        })
    }
     
    render() {

        

        if (this.state.width>1000){
            document.getElementById("root").className = "theme-blue grey"
        }else{

            document.getElementById("root").className = this.state.bodyClass
               }
       
        return <React.Fragment>
        <GoogleFontLoader
                    fonts={[
                        {
                        font: 'Roboto',
                        weights: [400, 700 ],
                        },
                         
                    ]}
                    subsets={['latin', 'cyrillic-ext']}
                    />
                    <GoogleFontLoader
                    fonts={[
                        {
                        font: 'Material+Icons',
                        
                        },
                         
                    ]} 
                     
                    />
 
           <Overly display= {this.state.displayOverly}/ >
           <NavBar onBarClick = {this.onBarClick}/ >
           <Sidebar activepage = {this.props.activepage}/>
           <>{this.props.page}  </>


        </React.Fragment> 
             
        
    }
}



export default MainComponent