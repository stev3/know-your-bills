import React, { useEffect, useContext, Fragment } from 'react';
import BillContext from '../../context/bill/billContext';

const Bill = ({ match }) => {
  const billContext = useContext(BillContext);
  const { getBill, bill, loading } = billContext;

  useEffect(() => {
    getBill(
      `https://api.propublica.org/congress/v1/116/bills/${match.params.bill_slug}.json`
    );
    // eslint-disable-next-line
  }, []);

  const {
    bill_id,
    bill_type,
    title,
    short_title,
    sponsor_title,
    sponsor,
    sponsor_id,
    sponsor_uri,
    sponsor_party,
    sponsor_state,
    congressdotgov_url,
    introduced_date,
    active,
    last_vote,
    house_passage,
    senate_passage,
    enacted,
    vetoed,
    cosponsors,
    cosponsors_by_party,
    primary_subject,
    committees,
    latest_major_action_date,
    latest_major_action,
    house_passage_vote,
    senate_passage_vote,
    summary,
    summary_short,
    cbo_estimate_url,
    versions,
    actions,
    presidential_statements,
    votes,
  } = bill;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  // @todo - design and populate bill page

  return (
    <Fragment>
      <h1>{bill.title}</h1>
    </Fragment>
  );
};

export default Bill;
