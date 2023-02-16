import { Link } from 'react-router-dom';
import './About.css';
import kai from './Kai.jpg';

const aboutMeText = "Hey! I'm Kai Elwood-Dieu";

/**
 * A React component that is the About page.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = () => {

  return (
    <>
        <div className='wrapper'>
            <h1 className="title">
            About Me!
            </h1>
            <p>
                Hey! I'm Kai Elwood-Dieu, a current senior at NYU Shanghai studying Interactive Media and Business with minors in Computer Science and Chinese. My portfolio is <a href={'https://kaielwood.github.io/'}>here</a>. I'm interested in climate technology and data visualization; I look forward to bringing those my tech talents to the fight against climate change once I've graduated.
            </p>
            <div className='imgContainer'>
                <img srcSet={kai} alt="Kai" />
            </div>
            <p>
                I love to dance, rock climb, and be outside. I also love to make music, and I play the guitar and the trumpet. I'm still learning how to play the guitar :). Thanks for reading!
            </p>
        </div>
    </>
  )
}

// make this component available to be imported into any other file
export default About
