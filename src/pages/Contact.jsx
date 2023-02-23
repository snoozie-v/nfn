import React from 'react'
import Footer from './Footer'

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    // <div className="bg-slate-800 font-mono justify-center text-blue-50">
    //   <h2 className="mb-3 justify-center h-full">Contact Form</h2>
    //   <form onSubmit={onSubmit}>
    //     <div className="mb-3">
    //       <label className="form-label" htmlFor="name">
    //         Name
    //       </label>
    //       <input className="form-control text-black" type="text" id="name" required />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label" htmlFor="email">
    //         Email
    //       </label>
    //       <input className="form-control text-black"type="email" id="email" required />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label" htmlFor="message">
    //         Message
    //       </label>
    //       <textarea className="form-control text-black" id="message" required />
    //     </div>
    //     <button className="btn btn-danger" type="submit">
    //       {formStatus}
    //     </button>
    //   </form>
    // </div>
    <div>
      <div>This page is under construction</div>
      <a href="https://discord.gg/6BjRw9KyTB" className="hover:underline">Click Here for Discord Link</a><br></br>
      <a href="https://twitter.com/Not_So_Fungible" className="hover:underline">Click Here for Twitter Link</a>
      <Footer /></div>
  )
}
export default Contact