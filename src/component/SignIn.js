import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SigninForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const nava = useNavigate()

    const onChangedEmail = (input) => { setEmail(input.target.value) }

    const onChangedPassword = (input) => { setPassword(input.target.value) }

    const onSubmit = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        };
        fetch("http://localhost:8081/auth/sign-in", requestOptions)
            .then(response => {
                const res = response
                console.log(res);
                setToken(res)
            })
        event.preventDefault();
        nava('/')
    }

    return (
        <Form onSubmit={onSubmit} style={{ margin: 100 }}>
            <legend>Sign In</legend>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" onChange={onChangedEmail} />
                <Form.Text className="text-muted">
                    {/* {email} */}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={onChangedPassword} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default SigninForm