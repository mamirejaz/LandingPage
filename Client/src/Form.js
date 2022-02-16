import { useState } from 'react';

export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [businessownershow, setbusinessownershow] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// To enable/show the business owner check
const enableBusinessOwner = () => {
    <div 
    class="form-check form-switch"
    style={{
		display: businessownershow ? '' : 'none',
		}}>
            <label class="form-check-label" for="flexSwitchCheckDefault"> Are you a brick-and-morter business owner?</label>
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
        </div>
}

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>Your community awaits. Enjoy it.</h1>
	</div>
    <div>
        <div class="form-check form-switch">
            <label class="form-check-label" for="flexSwitchCheckDefault"> Are you 18 years old or older?</label>
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={enableBusinessOwner()}/>
        </div>
        <div className='businessownership'>
            {enableBusinessOwner()}
        </div>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}

        <div class="form-row">
                <div class="col-sm-3 my-1">
                    <label class="sr-only" for="inlineFormInputName"></label>
                    <input type="text" class="form-control" id="inlineFormInputName" placeholder="Country"/>
                </div>
        </div>

        <div class="form-row">
                <div class="col-sm-3 my-1">
                    <label class="sr-only" for="inlineFormInputName"></label>
                    <input type="text" class="form-control" id="inlineFormInputName" placeholder="Postal Code" />
                </div>
        </div>
        <div class="form-row">
                <div class="col-sm-3 my-1">
                    <label class="sr-only" for="inlineFormInputName"></label>
                    <input type="text" class="form-control" id="inlineFormInputName" placeholder="Email Address" />
                </div>
        </div>
        
        <div class="form-row">
                <div class="col-sm-3 my-1">
                    <label class="sr-only" for="inlineFormInputName"></label>
                    <input type="text" class="form-control" id="inlineFormInputName" placeholder="Code" />
                </div>
                <div class="col-auto my-1">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                <div class="col-sm-3 my-1">
                    <label class="sr-only" for="inlineFormInputName1"></label>
                    <button onClick={handleSubmit} className="btn" id = "inlineFormInputName1" type="submit">
                        <div class="multi-shade btn"><b>Submit</b></div>
                    </button>
                </div>
        </div>
        {/* <label className="label">Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" /> */}
    </form>
	</div>
);
}
