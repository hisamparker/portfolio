import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/globalStyles';
import Typography from './styles/typography';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.querySelector('#root'),
);
