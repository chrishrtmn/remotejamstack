import { useState } from 'react'

export default function FormContact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: 'Contact - RecurringCredit',
    message: '',
  })

  const [response, setResponse] = useState({
    type: '',
    message: '',
  })

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: 'e.target.value' })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`https://formspree.io/mjvaogwv`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
      })

      const json = await res.json()

      if (json.success) {
        setResponse({
          type: 'success',
          message:
            'Thank you for reaching out to us. Please allow up to 24 hours for us to respond.',
        })
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        })
      }
    } catch (e) {
      console.log('An error occurred', e)
      setResponse({
        type: 'error',
        message: 'An error occurred while submitting the form',
      })
    }
  }

  return (
    <>
      <form
        action='https://formspree.io/mjvaogwv'
        method='post'
        onSubmit={handleSubmit}
      >
        <input
          className='input'
          type='text'
          name='name'
          placeholder='Name'
          aria-label='Your name'
          onChange={handleChange}
          required
        />

        <input
          className='input'
          type='email'
          name='_replyto'
          placeholder='Email'
          aria-label='Your email'
          onChange={handleChange}
          required
        />

        <textarea
          className='textarea'
          name='message'
          placeholder='Message'
          aria-label='Your message'
          onChange={handleChange}
          required
        />

        {/*
        <input
          type='hidden'
          name='_next'
          value='https://recurringcredit.com/contact'
        />
        */}

        <button
          className='button'
          type='submit'
          /*disabled={isSubmitting}*/
          aria-label='Submit contact form'
        >
          Submit
        </button>
      </form>

      <div className={response.type === 'success' ? 'message success' : ''}>
        <p>{response.message}</p>
      </div>

      <div className={response.type === 'error' ? 'message error' : ''}>
        <p>{response.message}</p>
      </div>

      <style jsx>{`
        form {
          margin: 40px 0 0 20px;
        }

        input {
          width: calc(100% - 20px);
          margin: 0 0 20px 0;
          padding: 5px 10px;
          border: 1px solid #d9d9d9;
        }

        @media (min-width: 700px) {
          input {
            width: calc(50% - 20px);
            margin: 0 20px 20px 0;
          }
        }

        textarea {
          width: calc(100% - 20px);
          margin: 0 0 20px 0;
          padding: 5px 10px;
          border: 1px solid #d9d9d9;
        }

        button {
          display: inline-block;
          min-width: 175px;
          margin: 0 0 20px;
          padding: 10px;
          border: 2px solid var(--color-primary);
          background: var(--color-primary);
          border-radius: 5px;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          cursor: pointer;
          box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.25);
          transition: all ease-in-out 0.2s;
        }

        button:hover {
          box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  )
}
