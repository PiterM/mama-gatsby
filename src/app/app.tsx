import React from 'react';
import IndexPage from '../components/IndexPage/IndexPage';

const App: React.FC = ({ pageContext: { data } }: any) => {
  return <IndexPage data={data} />;
};

export default App;
