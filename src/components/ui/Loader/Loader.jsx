import { Grid } from 'react-loader-spinner';
import 'styles.css';

export const Loader = ({ size = 'normal' }) => {
  return (
    <div className="Loader">
      <Grid
        ariaLabel="loading-indicator"
        visible={true}
        color="#3f51b599"
        height={(size = 'small' ? 25 : 50)}
        width={(size = 'small' ? 25 : 50)}
      />
    </div>
  );
};
