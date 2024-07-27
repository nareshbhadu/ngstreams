import React from 'react'


export default function ProductForm() {
  return (
    <div className='pform'>
      <div className='fheader'>
      <div className="fhead1">Intrested and want to receive more information?</div>
      <div className="fhead2">Please submit your information below, an NGStream's representative will be in touch shortly.</div>
      </div>
      <form className="form-cont">
        <div className="input-sec">
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Contact no.(without county name)' />
          <input type="text" placeholder='Company Name' />
        </div>
        <textarea name="message" id="msg" placeholder='Type your message here...'></textarea>
        <label htmlFor="subscribe">
          <input type="checkbox" id="subscribe" /><div> I consent to the processing of the personal data that I provide NGStreams 
            for this activity in accordance with and as described in the <span>Privacy Policy</span>.</div>
        </label> <button type='submit' className='submit-btn'>Submit Request</button>
      </form>
    </div>
  )
}
