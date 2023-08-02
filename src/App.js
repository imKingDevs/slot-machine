import logo from './logo.svg';
import './App.css';

const SlotM = (props) => {
    
    let {x, y, z} = props;

    if((x === y) && (y === z)){
        return (
            <>
                <div className='slot_inner'>
                    <h1>{' '}{x}{y}{z}{' '}</h1>
                    <h1>This is Matching!</h1>
                    <hr/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='slot_inner'>
                    <h1>{' '}{x}{y}{z}{' '}</h1>
                    <h1>This is Not Matching!</h1>
                    <hr/>
                </div>
            </>
        );
    }
}

const App = () => {
  return (
    <>
        <h1 className='heading'>
            <span style={{color: '#124bb3', fontWeight: 'bold'}}>
                🎰 Slot Machine Game 🎰
            </span>
        </h1>

        <SlotM x={'🎃'} y={'🎅🏼'} z={'🎅🏼'}/>
        <SlotM x={'🎅🏼'} y={'🎃'} z={'😊'}/>
        <SlotM x={'🎃'} y={'🎃'} z={'🎃'}/>
    </>
  )
}

export default App;