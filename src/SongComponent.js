
import './App.css';
const SongComponent =(props)=>{
  console.log(props);
  return(
    
    <div className="App">
      <h4>  {props.song.artist} </h4>
      <h4>  {props.song.title} </h4>
      <h4>  {props.song.genre} </h4>
      <h4>  {props.song.year} </h4>
      <a  target="_blank" rel="noopener noreferrer"href="https://youtu.be/iEKLFS-aKcw">  Let It Go </a>
    
     
    
    </div>
  );
}

export default SongComponent;