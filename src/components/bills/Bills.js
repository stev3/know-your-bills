import React, { useContext } from 'react';
import BillItem from './BillItem';
import BillContext from '../../context/bill/billContext';

const Bills = () => {
  const billContext = useContext(BillContext);

  const { loading, bills } = billContext;

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        {bills.map((bill) => (
          <BillItem key={bill.bill_id} bill={bill} />
        ))}
      </div>
    );
  }
};

export default Bills;
