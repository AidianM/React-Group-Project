import React, {useState} from 'react';
import MyFirebase from './utility/MyFirebase';
import { Checkbox } from './checkbox';
// import BuyerInfo from './buyerInfo';

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

    // let clicked = false;

    let [firstName, setFirstName] = React.useState(props.firstName);
    let [lastName, setLastName] = React.useState(props.lastName);
    let [street, setStreet] = React.useState(props.street);
    let [city, setCity] = React.useState(props.city);
    let [state, setState] = React.useState(props.state);
    let [zip, setZip] = React.useState(props.zip);
    let [updatedTotal, setUpdatedTotal] = React.useState(props.total);
    let [comments, setComments] = React.useState(props.comments);
    
    let firstNameContent = React.createRef();
    let lastNameContent= React.createRef();
    let streetContent = React.createRef();
    let cityContent = React.createRef();
    let stateContent = React.createRef();
    let zipContent = React.createRef();
    let totalContent = React.createRef();
    let commentContent = React.createRef();


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
            orderTotal: TOTAL,
            comments: GENERIC_COMMENTS
        });

        newOrderArray.push(
            {
                id: pushRef.key,
                firstName: GENERIC_FIRST_NAME,
                lastName: GENERIC_LAST_NAME,
                street: GENERIC_STREET_ADDRESS,
                city: GENERIC_CITY,
                state: GENERIC_STATE,
                zip: GENERIC_ZIP,
                orderTotal: TOTAL,
                comments: GENERIC_COMMENTS
            }
        );
        setOrder(newOrderArray);
 
    }

    function handleSave(props){
        let childRef = props.firebaseDBRef.child(props.id);

        setFirstName((firstName) => {
            childRef.update({firstName: firstNameContent.current.value});
            return firstNameContent.current.value;
        });
        setLastName((lastName) => {
            childRef.update({lastName: lastNameContent.current.value});
            return lastNameContent.current.value;
        });
        setStreet((street) => {
            childRef.update({street: streetContent.current.value});
            return streetContent.current.value;
        });
        setCity((city) => {
            childRef.update({city: cityContent.current.value});
            return cityContent.current.value;
        });
        setState((state) => {
            childRef.update({state: stateContent.current.value});
            return stateContent.current.value;
        });
        setZip((zip) => {
            childRef.update({zip: zipContent.current.value});
            return zipContent.current.value;
        });
        setUpdatedTotal((updatedTotal) => {
            childRef.update({orderTotal: totalContent.current.value});
            return totalContent.current.value;
        });
        setComments((comments) => {
            childRef.update({comments: commentContent.current.value});
            return commentContent.current.value;
        });

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
                            <input type="text" className="form-control" placeholder="First name" ref={firstNameContent} />
                            </div>
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" ref={lastNameContent} />
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type='text' className="form-control" placeholder="Street Address" ref={streetContent} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="City" ref={cityContent}/>
                                </div>
                                <div className="col">
                                <input type="text" className="form-control" placeholder="State" ref={stateContent}/>
                                </div>
                                <div className="col">
                                <input type="text" className="form-control" placeholder="Zip" ref={zipContent} />
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
                                            <span className="input-group-text">Order total: <br/> ₿ {totalContent}</span>
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
                        <textarea className="form-control" aria-label="With textarea" ref={commentContent}></textarea>
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