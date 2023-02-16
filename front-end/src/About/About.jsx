import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css';

/**
 * A React component that is the About page.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = () => {

  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState('')

  const fetchMessages = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true)
      })
  }

  useEffect(() => {
    fetchMessages()
  }, [])


  return (
    <>
        <div className='wrapper'>
            <h1 className="title">
            About Me!
            </h1>
            <p>
                {data.p1}
            </p>
            <div className='imgContainer'>
                <img srcSet={data.img} alt="Kai" />
            </div>
            <p>
                {data.p2}
            </p>
        </div>
    </>
  )
}

// make this component available to be imported into any other file
export default About
