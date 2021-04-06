import React from 'react'
import AuthHandeler from "../utils/AuthHandler"


class  Seller extends React.Component{

    componentDidMount() {
       console.log( AuthHandeler.checkTokenExpiry())
    }
    render(){
        return  <section className="content">
        <div className="container-fluid">
            <div className="block-header">
                <h2>Manage Seller</h2>

            </div>
            <div className="col-lg-12 col-md-9 col-sm-9 col-xs-9">
                    <div className="card">
                        <div className="header">
                            <h2>
                               ADD SELLER
                            </h2>
                            
                        </div>
                        <div className="body">
                            <form>
                            {/* <div className = "col-lg-6">  */}
                                <label htmlFor="email_address">Seller_Name</label>
                                <div className="form-group">
                                    <div className="form-line ">
                                        <input type="text" id="text" name = 'name' className="form-control" placeholder="Enter name"/>
                                    </div>
                                </div>
                                {/* </div> */}
                                <label htmlFor="password">Seller_phone</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="password" name = "number" className="form-control" placeholder="Enter  phone number"/>
                                    </div>
                                </div>
                                
                                <label htmlFor="password">Seller_Email</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="email" id="password" name = "email" className="form-control" placeholder="Enter Email-id"/>
                                    </div>
                                </div>
                                <label htmlFor="password">Seller_Address</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="password" name = "address" className="form-control" placeholder="Enter Address"/>
                                    </div>
                                </div>
                                <label htmlFor="password">Seller_Payment_Done</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="number" id="password" name = "paymentdone" className="form-control" placeholder="Enter your details"/>
                                    </div>
                                </div> <label htmlFor="password">Seller_Payment_Due</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="number" id="password" name = "paymentdue" className="form-control" placeholder="Enter your details"/>
                                    </div>
                                </div>

                                 
                                <br/>
                                <button type="button" className="btn btn-primary m-t-15 waves-effect">REGISTER SELLER</button>
                            </form>
                        </div>
                    </div>
                </div>

            
             
        </div>
    </section>
    
    }
} 


export default  Seller