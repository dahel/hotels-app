import Button from '@mui/material/Button';
interface Props {
  error: Error;
  resetErrorBoundary?: () => void;
}

const  ErrorFallback = ({ error, resetErrorBoundary }: Props) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      { resetErrorBoundary ? <Button onClick={resetErrorBoundary}>Try again</Button> : null}
    </div>
  );
}

export default ErrorFallback;
