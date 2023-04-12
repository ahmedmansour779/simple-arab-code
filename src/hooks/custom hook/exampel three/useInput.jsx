import { useState } from 'react';

const useInput = (initialValue, initial) => {
    const [value, setValue] = useState(initial);
    const reset = () => {
        setValue(initial);
    }
    const bind = {
        placeholder: initialValue,
        value,
        type: "text",
        onChange: (e) => setValue(e.target.value),
    }
    return [value, bind, reset]
}

export default useInput