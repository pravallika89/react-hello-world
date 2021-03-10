import HeadingComponent from './Heading.js'
import SubHeadingComponent from './SubHeading.js'
import CarComponent from './CarComponent.js'
import SongComponent from './SongComponent.js'


const App=()=>{
  //Initialize my Variables
  let headingText= 'This is heading from App component';
  let numberValue= 100;
  let car={
    model:'Sierra 1500',
    make:'GMC',
    year:2021,
    type:'AT4'
  };

  let favouriteSong={
    artist:'Idina Menzel',
    title:'Let It Go',
    genre:'Show tune',
    year:2013,
    youTubeLink:"https://youtu.be/iEKLFS-aKcw",
  };

  
  //Initialize my Functions
  const addTwoNumbers =(num1,num2)=>{
    return num1 * num2;
  };
  //render my JSX
  return(
        <div>
          <HeadingComponent h1Text={headingText} textLog={'Here is my text'} />
          <SubHeadingComponent numberToPass={numberValue} />
          <CarComponent vehicle={car}/>
          <SongComponent song={favouriteSong}/>
          {/* <h3> Sum of 50 and 70 is:{addTwoNumbers(50,70)}</h3> */}

        </div>)
};



// Create Sub heading component





export default App;
