import { ModalProvider } from "$components/Modal/context";

type HOCType = <T = unknown>(Component: React.ComponentType<T>) => React.ComponentType<T>;

// eslint-disable-next-line react/display-name
export const withModalProvider: HOCType = (Component) => (props) =>
  (
    <ModalProvider>
      <Component {...props} />
    </ModalProvider>
  );
