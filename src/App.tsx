import { useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  const clearDisplay = () => {
    setValue('');
  };

  const deleteLast = () => {
    setValue(value.slice(0, -1));
  };

  const calculateResult = () => {
    debugger
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={clearDisplay} />
            <input type="button" value="DE" onClick={deleteLast} />
            <input type="button" value="." onClick={handleClick} />
            <input type="button" value="/" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleClick} />
            <input type="button" value="8" onClick={handleClick} />
            <input type="button" value="9" onClick={handleClick} />
            <input type="button" value="*" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleClick} />
            <input type="button" value="5" onClick={handleClick} />
            <input type="button" value="6" onClick={handleClick} />
            <input type="button" value="+" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleClick} />
            <input type="button" value="2" onClick={handleClick} />
            <input type="button" value="3" onClick={handleClick} />
            <input type="button" value="-" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="00" onClick={handleClick} />
            <input type="button" value="0" onClick={handleClick} />
            <input type="button" value="=" className="equal" onClick={calculateResult} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
