import React from 'react';

const Card = ({ title, value, icon: Icon, children, className = '' }) => {
  return (
    <div className={`glass-card ${className}`}>
      {title && (
        <div className="card-title">
          {Icon && <Icon size={20} />}
          {title}
        </div>
      )}
      {value && <div className="card-value">{value}</div>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Card;
