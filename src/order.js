import React, {useState} from 'react';
import MyFirebase from './utility/MyFirebase';
import {Link} from 'react-router-dom';
import './css/order.css';
import swal from 'sweetalert';


let firebaseDBRef = MyFirebase.getFirebaseRef();


function Order(){

    //initializing for fields:
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [comments, setComments] = useState('');


    //initializing for order array format:
    let [order, setOrder] = useState([]);


    //called on Submit Order button:
    function addOrder(order){

        //make a temp array, push the items
        let newOrderArray=[];
        for(let i = 0; i<order.length; i++){
            newOrderArray.push(order[i]);
    }

        //push items to Firebase database:
        let pushRef = firebaseDBRef.push();
        pushRef.set({
            firstName : firstName,
            lastName : lastName,
            email: email,
            phone: phone,
            street : street,
            city: city,
            state: state,
            zip: zip,
            comments: comments
        })
        //promise fulfilled, confirm via SweetAlert npm
        .then(()=>{
            swal("Pre-Order Submitted", "We've received your info. Hold fast for upcoming details!", {
                button: "Praise Todd!",
            });
        })
        //tryna catch errors:
        .catch(error => {
            alert(error.message);
        });

        //set temp info to order array format:
        setOrder(newOrderArray);

        //reset fields to blank:
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setStreet('');
        setCity('');
        setState('');
        setZip('');
        setComments('');
    }



    //note: tied together via input values and onChange arrow functions:
    return (
        <div className="orderForm">
            <div className='head-title'>
                <h1 className="d-flex justify-content-center h1-title">NOW ACCEPTING PRE-ORDERS!</h1>
                <p className="d-flex justify-content-center head-description">Fill out the form below to be notified as soon as we're shipping.</p>
            </div>
            <div className="row">
                <div className="col-1">
                </div>
                <div className="col-md-10">

                    <h3 className="d-flex justify-content-center orderTitle">Pre-Order Info:</h3>
                    <div className="row">
                        <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>           
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>           
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input type='text' className="form-control" placeholder="Street Address" value={street} onChange={(e) => setStreet(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Zip" value={zip} onChange={(e) => setZip(e.target.value)} />
                        </div>
                    </div>

                    <br/>
                    <p className='orderBlurb'>Let us know below which of our <Link to= '/products'> <em>majestic</em> products </Link> you're interested in. "All of them" is an ok answer too.</p>      
                    <textarea className="form-control" aria-label="With textarea" placeholder="Send us your comments!" value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
                </div>
                <div className="col-1">
                </div>
            </div>
            <br/>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-secondary" onClick={addOrder}>Submit Order</button>
            </div>
            <br/>
        </div>
    );
}

export default Order;