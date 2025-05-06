import * as React from 'react';

function useEmployment() {
  const [isContractor, setIsContractor] = React.useState(false);
  const [isEmployee, setIsEmployee] = React.useState(false);
  function setEmployment(employmentType) {
    if (employmentType === 'contractor') {
      setIsContractor((prevState) => !prevState);
    }
    if (employmentType === 'employee') {
      setIsEmployee((prevState) => !prevState);
    }
    return new Error('Unknown employment type');
  }
  return {
    setEmployment,
    isContractor,
    isEmployee,
    employment: isContractor === isEmployee ? 'both' : isContractor ? 'contractor' : 'employee',
  };
}

export { useEmployment };
