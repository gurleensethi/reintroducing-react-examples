import React, { FunctionComponent, createContext } from "react";
import "./CompoundComponents.css";

interface Props {
  onExpanded?: (expanded: boolean) => void;
  shouldExpand?: boolean;
  onExpand?: () => void;
}

const ExpandableContext = createContext<{
  expanded: boolean;
  toggle: () => void;
}>(null!);

const ExpandableComponent: FunctionComponent<Props> = ({
  children,
  onExpanded,
  shouldExpand,
  onExpand,
}) => {
  const isExpandedControlled = !!shouldExpand;

  const [expanded, setExpanded] = React.useState(false);

  const toggle = React.useCallback(
    () => setExpanded((prevValue) => !prevValue),
    []
  );

  const getState: boolean = isExpandedControlled
    ? Boolean(shouldExpand)
    : expanded;

  const getToggle: () => void = isExpandedControlled
    ? onExpand || (() => {})
    : toggle;

  const value = React.useMemo(
    () => ({ expanded: getState, toggle: getToggle }),
    [getState, getToggle]
  );

  const componentJustMounted = React.useRef(true);

  React.useEffect(() => {
    if (onExpanded && !componentJustMounted.current && !isExpandedControlled) {
      onExpanded(expanded);
    }
    componentJustMounted.current = false;
  }, [expanded, onExpanded, isExpandedControlled]);

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

const useExpanded = () => {
  const [expanded, setExpanded] = React.useState(false);

  const toggle = React.useCallback(
    () => setExpanded((prevState) => !prevState),
    []
  );

  const togglerProps = React.useMemo(
    () => ({
      onClick: toggle,
      "aria-expanded": expanded,
    }),
    [toggle, expanded]
  );

  const value = React.useMemo(() => ({ expanded, toggle, togglerProps }), [
    expanded,
    toggle,
    togglerProps,
  ]);

  return value;
};

const useEffectAfterMount = (cb: any, deps: any[]) => {
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    if (!isMounted.current) {
      return cb();
    }
    isMounted.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export const CompoundComponents: FunctionComponent = (props) => {
  const { expanded, togglerProps } = useExpanded();

  useEffectAfterMount(() => {
    console.log("xClickx");
  }, [expanded]);

  return (
    <div>
      <ExpandableComponent shouldExpand={true}>
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
      <div>
        <button {...togglerProps}>Click for Awesomeness</button>
        {expanded && <div>{"x".repeat(50)}</div>}
      </div>
    </div>
  );
};
