import { ModalProvider } from "$components/Modal/context";

type HOCType = <T = unknown>(Component: React.FunctionComponent<T>) => React.FunctionComponent<T>;

// eslint-disable-next-line react/display-name
export const withModalProvider: HOCType = (Component) => (props) =>
  (
    <ModalProvider>
      <Component {...props} />
    </ModalProvider>
  );
