const Keyboard = ({ setCalculation, setFullSum, fullSum, calculation }) => {
  const numKey = (value) => {
    if (calculation !== 0) {
      clearKey();
    } else if (
      (value === 0 && fullSum.length === 0) ||
      (typeof value !== "number" && fullSum.length === 0)
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
      let string = fullSum.join("");
      return eval(string);
    });
  };

  return (
    <form
      className="keyboard"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <button
        id="one"
        onClick={() => {
          numKey(1);
        }}
      >
        1
      </button>

      <button
        id="two"
        onClick={() => {
          numKey(2);
        }}
      >
        2
      </button>

      <button
        id="three"
        onClick={() => {
          numKey(3);
        }}
      >
        3
      </button>

      <button
        id="divide"
        onClick={() => {
          numKey("/");
        }}
      >
        %
      </button>

      <button
        id="delete"
        onClick={() => {
          deleteKey();
        }}
      >
        Del
      </button>

      <button
        id="four"
        onClick={() => {
          numKey(4);
        }}
      >
        4
      </button>

      <button
        id="five"
        onClick={() => {
          numKey(5);
        }}
      >
        5
      </button>

      <button
        id="six"
        onClick={() => {
          numKey(6);
        }}
      >
        6
      </button>

      <button
        id="multiply"
        onClick={() => {
          numKey("*");
        }}
      >
        *
      </button>

      <button
        id="seven"
        onClick={() => {
          numKey(7);
        }}
      >
        7
      </button>

      <button
        id="eight"
        onClick={() => {
          numKey(8);
        }}
      >
        8
      </button>

      <button
        id="nine"
        onClick={() => {
          numKey(9);
        }}
      >
        9
      </button>

      <button
        id="minus"
        onClick={() => {
          numKey("-");
        }}
      >
        -
      </button>

      <button
        id="clear"
        onClick={() => {
          clearKey();
        }}
      >
        C
      </button>

      <button
        id="zero"
        onClick={() => {
          numKey(0);
        }}
      >
        0
      </button>

      <button
        id="point"
        onClick={() => {
          numKey(".");
        }}
      >
        .
      </button>

      <button
        id="plus"
        onClick={() => {
          numKey("+");
        }}
      >
        +
      </button>

      <button
        id="equals"
        onClick={() => {
          equalsKey();
        }}
      >
        =
      </button>
    </form>
  );
};

export default Keyboard;
