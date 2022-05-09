import React, {useState} from 'react';
import MyFirebase from './utility/MyFirebase';
import { Checkbox } from './checkbox';
import BuyerInfo from './buyerInfo';

function Order(props){
    
    let [order, setOrder] = React.useState([]);

    const GENERIC_FIRST_NAME = "First Name";
    const GENERIC_LAST_NAME = "Last Name";
    const GENERIC_STREET_ADDRESS = "Street Address";
    const GENERIC_CITY = "City";
    const GENERIC_STATE = "State";
    const GENERIC_ZIP = "Zip";
    const TOTAL = 0;
    const GENERIC_COMMENTS = 'Comments';

    let updatedTotal = 0;
    let clicked = false;

    let firebaseDBRef = MyFirebase.getFirebaseRef();


    function addOrder(order){ 
        let newOrderArray=[];

        for(let i = 0; i<order.length; i++){
                newOrderArray.push(order[i]);
        }

        let pushRef = firebaseDBRef.push(); //creates a new FBDB unique name key:value
        pushRef.set({
            firstName: GENERIC_FIRST_NAME,
            lastName: GENERIC_LAST_NAME,
            street: GENERIC_STREET_ADDRESS,
            city: GENERIC_CITY,
            state: GENERIC_STATE,
            zip: GENERIC_ZIP,
            orderTotal: {updatedTotal},
            comments: GENERIC_COMMENTS
        });

        newOrderArray.push(
            {
                id: pushRef.key,
                title: GENERIC_FIRST_NAME,
                body: GENERIC_LAST_NAME,
                street: GENERIC_STREET_ADDRESS,
                city: GENERIC_CITY,
                state: GENERIC_STATE,
                zip: GENERIC_ZIP,
                orderTotal: {updatedTotal},
                comments: GENERIC_COMMENTS
            }
        );
        setOrder(newOrderArray);
    }



    
    return (
        <div>
            <div className="row">
                <div className="col col-1">
                </div>
                <div className="col">
                    <form>
                        <h1 className="d-flex justify-content-center">Order Info:</h1>
                        <div className="row">
                            <div className="col">
                            <input type="text" className="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type='text' className="form-control" placeholder="Street Address" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="City" />
                                </div>
                                <div className="col">
                                <input type="text" className="form-control" placeholder="State" />
                                </div>
                                <div className="col">
                                <input type="text" className="form-control" placeholder="Zip" />
                            </div>

                        </div>

                    </form>

                
                    <h2 className="d-flex justify-content-center">Item Select:</h2>
                    
                    <div className="row">
                        {/* <div className="col"> */}
                            <div className="col col-1 ">
                            </div>

                            <div className='col d-flex align-items-center'>
                                <div className="col">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Order total: <br/> ₿ {TOTAL}</span>
                                        </div> 
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="col-sm-2"></div>
                                        <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1" value='4' onClick={Checkbox}/>
                                            <label className="form-check-label" htmlFor="gridCheck1">
                                            BR2 Logo Sticker $4
                                            </label>
                                            <br/>
                                            <input className="form-check-input" type="checkbox" id="gridCheck2" value='15' />
                                            <label className="form-check-label" htmlFor="gridCheck2">
                                            BR2 Logo Hat $15
                                            </label>
                                            <br/>

                                            <input className="form-check-input" type="checkbox" id="gridCheck3" value ='999.99' />
                                            <label className="form-check-label" htmlFor="gridCheck3">
                                            A Story of Todd $250.00
                                            </label>
                                            <br/>
                                            <input className="form-check-input" type="checkbox" id="gridCheck4" value='148.50'/>
                                            <label className="form-check-label" htmlFor="gridCheck4">
                                            Marble Bust of Todd $9,999.99
                                            </label>
                                            <br/>
                                            <input className="form-check-input" type="checkbox" id="gridCheck5" value='250'/>
                                            <label className="form-check-label" htmlFor="gridCheck5">
                                            SDPh# $[Market]
                                            </label>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-1">
                            </div>
                        {/* </div> */}
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Please enter any comments or requirements here:</span>
                        </div>
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
                <div className="col col-1">
                </div>
            </div>
            <br/>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary" onClick={addOrder}>Submit Order</button>
            </div>

        </div>
    );
}

export default Order;