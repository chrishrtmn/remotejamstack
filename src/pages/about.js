const About = () => {
  return (
    <div className='px-4 m-auto mb-24 max-w-7xl sm:px-6 lg:px-8'>
      <h2 className='py-10 text-5xl font-bold text-gray-800'>About</h2>
      <p>About site and goals.</p>
      <h3 className='pt-10 pb-5 mt-10 text-2xl font-bold border-t-4 border-gray-300'>
        Site Technology
      </h3>
      <p>Made with Next.js, Tailwind CSS, Firebase, Vercel</p>
      <h3 className='pt-10 pb-5 mt-10 text-2xl font-bold border-t-4 border-gray-300'>
        Team
      </h3>
      <p>
        My name is Chris Hartman and I'm the sole founder and developer of
        Remote Jamstack.
      </p>
      <p className='my-4'>
        I like word play and puns. Did I go overboard with the music word play
        on the front page?
      </p>
      <p>
        Song Credits:
        <br />
        - Drop It Like It's Hot - Snoop Dogg
        <br />
        - Pump Up The Jam - Technotronic
        <br />
        - Stacks on Stacks on Stacks - Soulja Boy
        <br />
      </p>
    </div>
  )
}

export default About
