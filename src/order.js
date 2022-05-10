import React, {useState} from 'react';
import MyFirebase from './utility/MyFirebase';
import {Link} from 'react-router-dom';
import './css/order.css';



let firebaseDBRef = MyFirebase.getFirebaseRef();


// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const [street, setStreet] = useState('');
// const [city, setCity] = useState('');
// const [state, setState] = useState('');
// const [zip, setZip] = useState('');
// // const [total, setTotal] = useState('');
// const [comments, setComments] = useState('');

function Order(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    // const [total, setTotal] = useState('');
    const [comments, setComments] = useState('');


    let [order, setOrder] = useState([]);

    function addOrder(order){
        // order.preventDefault();

        let newOrderArray=[];
        for(let i = 0; i<order.length; i++){
            newOrderArray.push(order[i]);
    }
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
        
        .then(()=>{
            console.log("hit popup");
        })
        .catch(error => {
            alert(error.message);
        });

        setOrder(newOrderArray);


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


    return (
        <div className="orderForm">
            <h1 className="d-flex justify-content-center">NOW ACCEPTING PRE-ORDERS!</h1>
            <p className="d-flex justify-content-center">Fill out the form below to be notified as soon as we're shipping.</p>
            <div className="row">
                <div className="col-1">
                </div>
                <div className="col-md-10">

                    <h3 className="d-flex justify-content-center">Pre-Order Info:</h3>
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
                    <p>Let us know below which of our <Link to= '/products'> <em>majestic</em> products </Link> you're interested in. "All of them" is an ok answer too.</p>      
                    <textarea className="form-control" aria-label="With textarea" placeholder="Send us your comments!" value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
                </div>
                <div className="col-1">
                </div>
            </div>
            <br/>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-secondary" onClick={addOrder}>Submit Order</button>
            </div>
        </div>
    );
}

export default Order;