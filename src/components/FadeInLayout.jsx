import ScrollFadeIn from './ScrollFadeIn';

const FadeInLayout = ({ children }) => {
  const wrappedChildren = Array.isArray(children)
    ? children.map((child, index) => (
        <ScrollFadeIn key={index} delay={index * 100}>
          {child}
        </ScrollFadeIn>
      ))
    : <ScrollFadeIn>{children}</ScrollFadeIn>;

  return <>{wrappedChildren}</>;
};

export default FadeInLayout;
