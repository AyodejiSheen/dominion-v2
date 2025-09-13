import React, { ReactNode, FC } from "react";

interface ShowProps {
  children: ReactNode;
}

interface ShowWhenProps {
  isTrue: boolean;
  children: ReactNode;
}

interface ShowElseProps {
  children: ReactNode;
}

const Show: FC<ShowProps> & {
  When: FC<ShowWhenProps>;
  Else: FC<ShowElseProps>;
} = ({ children }) => {
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const childElement = child as React.ReactElement<any>;
      if (childElement.props.isTrue === undefined) {
        otherwise = child;
      } else if (!when && childElement.props.isTrue === true) {
        when = child;
      }
    }
  });

  return when || otherwise;
};

const ShowWhen: FC<ShowWhenProps> = ({ isTrue, children }) =>
  isTrue ? <>{children}</> : null;
const ShowElse: FC<ShowElseProps> = ({ children }) => <>{children}</>;

Show.When = ShowWhen;
Show.Else = ShowElse;

export { Show, ShowWhen, ShowElse };
