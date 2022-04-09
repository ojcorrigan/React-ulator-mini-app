const Keyboard = ({ setCalculation, setFullSum, fullSum, calculation }) => {
  const numKey = (value) => {
    if (calculation !== 0) {
      clearKey();
    } else if (
      (value === 0 && fullSum.length === 0) ||
      (typeof value !== 'number' && fullSum.length === 0)
    ) {
      return fullSum;
    } else {
      setFullSum((currentSum) => {
        return [...currentSum, value];
      });
    }
  };
  const clearKey = () => {
    setFullSum(() => {
      const newArr = [];

      return newArr;
    });
    setCalculation(() => {
      return 0;
    });
  };

  const deleteKey = () => {
    setFullSum((currentSum) => {
      const newSum = [...currentSum];
      newSum.pop();
      return newSum;
    });
  };

  const equalsKey = () => {
    setCalculation(() => {
      let string = fullSum.join('');
      return eval(string);
    });
  };

  return (
    <form className="keyboard">
      <button
        id="delete"
        onClick={(event) => {
          event.preventDefault();
          deleteKey();
        }}
      >
        Del
      </button>
      <br></br>
      <button
        id="one"
        onClick={(event) => {
          event.preventDefault();
          numKey(1);
        }}
      >
        1
      </button>
      <button
        id="two"
        onClick={(event) => {
          event.preventDefault();
          numKey(2);
        }}
      >
        2
      </button>
      <button
        id="three"
        onClick={(event) => {
          event.preventDefault();
          numKey(3);
        }}
      >
        3
      </button>
      <button
        id="divide"
        onClick={(event) => {
          event.preventDefault();
          numKey('/');
        }}
      >
        %
      </button>
      <button
        id="four"
        onClick={(event) => {
          event.preventDefault();
          numKey(4);
        }}
      >
        4
      </button>
      <button
        id="five"
        onClick={(event) => {
          event.preventDefault();
          numKey(5);
        }}
      >
        5
      </button>
      <button
        id="six"
        onClick={(event) => {
          event.preventDefault();
          numKey(6);
        }}
      >
        6
      </button>
      <button
        id="multiply"
        onClick={(event) => {
          event.preventDefault();
          numKey('*');
        }}
      >
        *
      </button>
      <br></br>
      <button
        id="seven"
        onClick={(event) => {
          event.preventDefault();
          numKey(7);
        }}
      >
        7
      </button>
      <button
        id="eight"
        onClick={(event) => {
          event.preventDefault();
          numKey(8);
        }}
      >
        8
      </button>
      <button
        id="nine"
        onClick={(event) => {
          event.preventDefault();
          numKey(9);
        }}
      >
        9
      </button>
      <button
        id="minus"
        onClick={(event) => {
          event.preventDefault();
          numKey('-');
        }}
      >
        -
      </button>
      <br></br>
      <button
        id="clear"
        onClick={(event) => {
          event.preventDefault();
          clearKey();
        }}
      >
        clear
      </button>
      <button
        id="zero"
        onClick={(event) => {
          event.preventDefault();
          numKey(0);
        }}
      >
        0
      </button>
      <button
        id="point"
        onClick={(event) => {
          event.preventDefault();
          numKey('.');
        }}
      >
        .
      </button>
      <button
        id="plus"
        onClick={(event) => {
          event.preventDefault();
          numKey('+');
        }}
      >
        +
      </button>
      <br></br>
      <button
        id="equals"
        onClick={(event) => {
          event.preventDefault();
          equalsKey();
        }}
      >
        =
      </button>
    </form>
  );
};

export default Keyboard;
