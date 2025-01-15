import './Dashboard.css';
import Orders from './Orders';
import { Paper } from '@mui/material';
import ProductionLine from '../ProductionLine/ProductionLine';

const Dashboard: React.FC = () => {

  return (
    <Paper className="dashboard" sx={{ marginTop: '1rem' }} elevation={0}>
      <Orders />
      <ProductionLine />
    </Paper>
  );
};

export default Dashboard;