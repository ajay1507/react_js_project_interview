import React, { useRef,forwardRef } from 'react';

const Child =forwardRef((props, ref) => {
  return <div ref={ref}>Child Component {props.data}</div>;
});

const ForwardRef = () => {
  const childRef = useRef();

  const handleClick = () => {
    console.log(childRef.current); // Now we can access the DOM node inside Child
  };

  return (
    <div>
      <Child ref={childRef} data="child A"/>
      <button onClick={handleClick}>Log Child Ref</button>
    </div>
  );
};

export default ForwardRef;
