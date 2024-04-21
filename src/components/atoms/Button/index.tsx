import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

interface ButtonRef {
  focus: () => void;
}

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      buttonRef.current?.focus();
    },
  }));

  return (
    <button ref={buttonRef} onClick={props.onClick} className={styles.button}>
      {props.children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;