import React, { FunctionComponent, createContext } from "react";
import "./CompoundComponents.css";

interface Props {
  onExpanded?: (expanded: boolean) => void;
}

const ExpandableContext = createContext<{
  expanded: boolean;
  toggle: () => void;
}>(null!);

const ExpandableComponent: FunctionComponent<Props> = ({
  children,
  onExpanded,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggle = React.useCallback(
    () => setExpanded((prevValue) => !prevValue),
    []
  );

  const value = React.useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  const componentJustMounted = React.useRef(true);

  React.useEffect(() => {
    if (onExpanded && !componentJustMounted.current) {
      onExpanded(expanded);
    }
    componentJustMounted.current = false;
  }, [expanded, onExpanded]);

  return (
    <ExpandableContext.Provider value={value}>
      {children}
    </ExpandableContext.Provider>
  );
};

const Header: FunctionComponent<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = ({ children, className, ...props }) => {
  const { toggle } = React.useContext(ExpandableContext);
  return (
    <button
      onClick={toggle}
      className={`Expandable-trigger ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Body: FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const { expanded } = React.useContext(ExpandableContext);
  const divRef = React.useRef<HTMLDivElement | null>();

  return (
    <div
      className={className}
      ref={(ref) => (divRef.current = ref)}
      style={{
        maxHeight: expanded ? `${divRef.current?.scrollHeight}px` : "0",
        overflow: "hidden",
        transition: "max-height 0.3s",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const CompoundComponents: FunctionComponent = (props) => {
  return (
    <div>
      <ExpandableComponent>
        <Header>Click me I am a header!</Header>
        <Body>
          “
          <img
            src="https://i.imgur.com/qpj4Y7N.png"
            style={{ width: "250px" }}
            alt="reintroducing react book cover"
          />
          <p style={{ opacity: 0.7 }}>
            This book is so f*cking amazing! <br />
            <a
              href="https://leanpub.com/reintroducing-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go get it now.
            </a>
          </p>
        </Body>
      </ExpandableComponent>
    </div>
  );
};
