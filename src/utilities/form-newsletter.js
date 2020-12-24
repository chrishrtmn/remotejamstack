import { useState } from 'react'

export default function FormNewsletter() {
  const [values, setValues] = useState({
    email: '',
  })

  const [response, setResponse] = useState({
    type: '',
    message: '',
  })

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`https://formspree.io/mpzylqzk`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
      })

      const json = await res.json()

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for signing up for our newsletter.',
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
        action='https://formspree.io/mpzylqzk'
        method='post'
        onSubmit={handleSubmit}
      >
        <input
          className='input'
          type='email'
          name='_replyto'
          placeholder='Email'
          aria-label='Your email'
          onChange={handleChange}
          required
        />

        <button
          className='button'
          type='submit'
          /*disabled={isSubmitting}*/
          aria-label='Submit newsletter form'
        >
          Submit
        </button>
      </form>

      {response.type === 'error' && (
        <div className='message error'>Error: {response.message}</div>
      )}
      {response.type !== 'error' && response.message && (
        <p>Message: {response.message}</p>
      )}

      <style jsx>{`
        input {
          margin: 0 10px 0 0;
          padding: 5px 10px;
          border: 1px solid #d9d9d9;
        }

        button {
          display: inline-block;
          margin: 0 0 20px;
          padding: 5px 15px 4px;
          border: 2px solid var(--color-secondary);
          background: var(--color-secondary);
          border-radius: 5px;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
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
