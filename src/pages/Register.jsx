import React from 'react'


export const Register = () => {
  return (
    <div className="login">
      <h4>Register</h4>
      <form>
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="text_input"

          />
        </div>
        <div className="text_area">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            className="text_input"

          />
        </div>
        <div className="text_area">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="text_input"

          />
        </div>
        <input
          type="submit"
          value="Accept"
          className="btn-login-register"

        />
      </form>
    </div>
  )
}
