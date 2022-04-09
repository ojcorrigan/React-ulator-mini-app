import Output from './Output';
import Keyboard from './Keyboard';
import { useState } from 'react';

const Calc = () => {
  const [calculation, setCalculation] = useState(0);
  const [fullSum, setFullSum] = useState([]);
  return (
    <div className="calculator">
      <Output calculation={calculation} fullSum={fullSum} />
      <Keyboard
        setCalculation={setCalculation}
        setFullSum={setFullSum}
        fullSum={fullSum}
        calculation={calculation}
      />
    </div>
  );
};

export default Calc;
