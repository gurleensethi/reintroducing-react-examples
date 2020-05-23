import React, { FunctionComponent, createContext } from "react";

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

const Header: FunctionComponent = ({ children }) => {
  const { toggle } = React.useContext(ExpandableContext);
  return <div onClick={toggle}>{children}</div>;
};

const Body: FunctionComponent = ({ children }) => {
  const { expanded } = React.useContext(ExpandableContext);
  const divRef = React.useRef<HTMLDivElement | null>();

  return (
    <div
      ref={(ref) => (divRef.current = ref)}
      style={{
        maxHeight: expanded ? `${divRef.current?.scrollHeight}px` : "0",
        overflow: "hidden",
        transition: "max-height 0.3s",
      }}
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
        <Body>I am a body!</Body>
      </ExpandableComponent>
    </div>
  );
};
