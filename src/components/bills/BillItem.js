import React from 'react';

const BillItem = ({ bill }) => {
  return (
    <div className='row'>
      <div className='col-12'>
        <div className='card grey lighten-3'>
          <div className='card-content'>
            <span className='card-title'>{bill.short_title}</span>
            <p>
              Sponsor:
              {`  ${bill.sponsor_title} ${bill.sponsor_name} (${bill.sponsor_party}) (${bill.sponsor_state})`}
            </p>

            <p>
              Latest Major Action:
              {bill.latest_major_action
                ? '  ' + bill.latest_major_action
                : ' N/A'}
            </p>
            <p>
              Latest Major Action Date:
              {'  ' + bill.latest_major_action_date}
            </p>
            <p>
              Introduced:
              {'  ' + bill.introduced_date}
            </p>
            <p>
              Active:{'  '}
              {bill.active ? 'yes' : 'no'}
            </p>
            <p>
              Bill Type:{'  '}
              {bill.bill_type}
            </p>
            <p>
              Committees:{'  '}
              {bill.committees}
            </p>
            <p>
              Cosponsors:{'  '}
              {bill.cosponsors_by_party.D &&
                bill.cosponsors_by_party.D + ' democrat'}
              {bill.cosponsors_by_party.R &&
                bill.cosponsors_by_party.R + ' republican'}
            </p>
            <p>
              Enacted:
              {bill.enacted ? ' yes' : ' no'}
            </p>
            <p>
              Passed House:
              {bill.house_passage ? ' yes' : ' no'}
            </p>
            <p>
              Passed Senate:
              {bill.senate_passage ? ' yes' : ' no'}
            </p>
            <p>
              Last Vote:
              {bill.last_vote ? '  ' + bill.last_vote : ' N/A'}
            </p>
          </div>
          <div className='card-action'>
            <a href='#!' className='grey-text'>
              watch
            </a>
            <a href='#!' className='grey-text'>
              learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillItem;
