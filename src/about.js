import './css/about.css';

function About(props){
    return (
      <div className="bodyBlock">
        <h1 className='about-hd-title'><u>ABOUT US</u></h1>
        <br></br>
        <p>
          We here at Todd Talent South's very own Breakout Room 2 have heard your pleas, and are proud to offer fine Todd-related goods and services to our compatriots.
        </p>
        <p>
          Whether you're new to the works of the Great Todd and our ongoing collaborative efforts or an established member, TTS:BR2 is your one-stop-shop to help you look and code your best.      
        </p>
        <br></br>
        <h1><u>ABOUT TODD</u></h1>
        <br></br>
        <h4>Here are some quick factoids about Todd the Legend:</h4>
        <br></br>
        <ul className='unordered-list-container'>
          <li>All arrays Todd declares are of infinite size, because Todd knows no bounds.</li>
          <li>Todd's code optimizes itself.</li>
          <li>Todd can write infinite recursion functions…and have them return.</li>
          <li>Todd can delete the Recycling Bin.</li>
          <li>Todd doesn't write "Hello World!" programs, artificial intelligence writes "Hello Todd!" programs.</li>
          <li>Todd doesn't actually write code. He stares at the computer and intimidates it into doing what he wants.</li>
          <p>If you would like to experience the greatness of the Almighty Todd, be sure to purchase some of our high quality merchandise to get a piece of the Legend.</p>
        </ul>
      </div>
    );
  }

export default About;