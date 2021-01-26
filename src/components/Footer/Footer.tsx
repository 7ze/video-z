import * as React from 'react';
import './Footer.sass';

export const Footer: React.FC = () => {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="content">
          <p>&copy; Black-Heart</p>
          <p className="copyright-year">2020</p>
        </div>
      </div>
    </div>
  );
};
