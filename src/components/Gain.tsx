import React from 'react';

interface GainProps {
  value: number;
}

const Gain: React.FC<GainProps> = ({ value }) => {
  return (
    <div>
      {(value<0) 
        ? <span className="text-red-500">{value}%</span> 
        : <span className="text-green-500">{value}%</span>}
    </div>
  );
}

export default Gain;