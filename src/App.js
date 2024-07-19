import React from 'react'
import FormComponent from './components/form'

export default function App() {
  return (
    <>
     <h1 style={{ background: 'linear-gradient(to right, #ff9966, #ff5453)', textAlign: 'center', fontFamily : "Roboto" }}> Navgurukul Admission Form</h1>
     <p style={{ textAlign: 'center', fontFamily : "Roboto" }}> Please fill NA if you don't have any information for any field</p>
     <FormComponent />
    </>
  )
}

