    import React, { Fragment, useState } from 'react';
    import { Button, Label,Field, Control, Input, Column, Section, Help } from "rbx";
    import UserService from '../../../services/users';
    import { Navigate } from "react-router-dom";
    
    function RegisterForm() {
      const [name, setName] = useState("");
      const [email, setEmail] = useState(""); 
      const [password, setPassword] = useState("");
      const [redirectToLogin, setRedirectToLogin] = useState(false);
      const [error, setError] = useState(false);

    //metodo para submisão do formulario
      const HandleSubmit = async (evt) => {
         evt.preventDefault();
         try {
          const user = await UserService.register({name: name,email: email,password: password});
            setRedirectToLogin(true);                         
          } catch (error) {
            setError(true)
          }
         }


      if(redirectToLogin == true)
        return <Navigate to={{pathname: "/login"}}/>

     return (
      <Fragment>
        <Column.Group centered>
         <form onSubmit={HandleSubmit}>
          <Column size={12}>
           <Field>
            <Label size="small">Name:</Label>
              <Control>
                <Input
                  type="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  name="name"
                  />
              </Control>
           </Field>

           <Field>
            <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  name="email"
                />
              </Control>
           </Field>

           <Field>
            <Label size="small">Password:</Label>
              <Control>
                <Input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  name="password"
                />
              </Control>
           </Field>

           <Field>
            <Control>
              <Column.Group breakpoint="mobile">
                <Column>
                  <a onClick={e => setRedirectToLogin(true)} className="button is-white has-text-custom-purple">Login or</a>
                </Column>
                <Column>
                  <Button color="custom-purple" outlined>Register</Button>
                </Column>
              </Column.Group>
            </Control>
           </Field>
           { error && <Help color="danger">Email or Password invalid</Help> }
          </Column>
         </form>
        </Column.Group>
      </Fragment>
      )
    }
    
    export default RegisterForm;
