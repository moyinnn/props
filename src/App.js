// import logo from './logo.svg';
import './App.css';
import Bio from './Profile/ProfileComponent/Bio';
import FullName from './Profile/ProfileComponent/Fullname';
// import HandleName from './Profile/ProfileComponent/Handlename';
import Photo from './Profile/ProfileComponent/Photo';
import Profession from './Profile/ProfileComponent/Profession';
import PropTypes from 'prop-types';

function App() {
    function handleClick() {
      alert("Oso Moyinoluwa");
    }

    FullName.defaultProps = {
      fullname: "Oso Adeola Abiola"
    };
    FullName.propTypes = {
      fullname: PropTypes.string
    }

    Bio.defaultProps = {
      bio: " I am a Professor in EKSU teaching on Crop and Pest"
    }
    Bio.propTypes = {
      bio: PropTypes.string
    }

    Profession.defaultProps={
      prof: "A Researcher and a Professor"
    }
    Profession.propTypes = {
      prof: PropTypes.string
    }

  return (
    <div className="App">
      <FullName fullname = "Oso Moyinoluwa OluwaTosin."/>
      <Bio bio = " I am a student of Babcock Univeristy studying Computer Science. I am an aspiring full stack developer. i am a Christian."/>
      <Profession prof= "I am a Learning Developer."/>

      <Photo >
        <p className='name'>
          <strong>I am Oso Moyinoluwa.</strong>
        </p>
      </Photo>

    <button className='btn' onClick={handleClick}>
      Click me
    </button>


    </div>

    
  );
}

export default App;
