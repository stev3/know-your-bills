import React, { useReducer } from 'react';
import axios from 'axios';
import BillContext from './billContext';
import BillReducer from './billReducer';

import { SEARCH_BILLS, GET_BILL, SET_LOADING } from '../types';

const BillState = (props) => {
  const initialState = {
    bills: [
      {
        active: false,
        bill_id: 'hr7284-116',
        bill_slug: 'hr7284',
        bill_type: 'hr',
        bill_uri:
          'https://api.propublica.org/congress/v1/116/bills/hr7284.json',
        committee_codes: [],
        committees: 'House Judiciary Committee',
        congressdotgov_url:
          'https://www.congress.gov/bill/116th-congress/house-bill/7284',
        cosponsors: 1,
        cosponsors_by_party: { D: 1 },
        enacted: null,
        govtrack_url: 'https://www.govtrack.us/congress/bills/116/hr7284',
        gpo_pdf_uri: null,
        house_passage: null,
        introduced_date: '2020-06-18',
        last_vote: null,
        latest_major_action:
          'Referred to the House Committee on the Judiciary.',
        latest_major_action_date: '2020-06-18',
        number: 'H.R.7284',
        primary_subject: '',
        senate_passage: null,
        short_title:
          'To authorize the Attorney General to make grants to improve the relationship between the police and the communities they serve, and for other purposes.',
        sponsor_id: 'W000797',
        sponsor_name: 'Debbie Wasserman Schultz',
        sponsor_party: 'D',
        sponsor_state: 'FL',
        sponsor_title: 'Rep.',
        sponsor_uri:
          'https://api.propublica.org/congress/v1/members/W000797.json',
        subcommittee_codes: [],
        summary: '',
        summary_short: '',
        title:
          'To authorize the Attorney General to make grants to improve the relationship between the police and the communities they serve, and for other purposes.',
        vetoed: null,
      },
    ],
    bill: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(BillReducer, initialState);

  // Search Bills
  const searchBills = async (text) => {
    setLoading();

    const res = await axios({
      method: 'get',
      baseURL: 'https://api.propublica.org/congress/v1/bills/search.json',
      headers: { 'X-API-Key': `${process.env.REACT_APP_PROPUBLICA_API}` },
      params: {
        query: text,
      },
    });

    dispatch({
      type: SEARCH_BILLS,
      payload: res.data.results[0].bills,
    });
  };

  // Get Bill
  const getBill = async (uri) => {
    setLoading();

    const res = await axios({
      method: 'get',
      baseURL: uri,
      headers: { 'X-API-Key': `${process.env.REACT_APP_PROPUBLICA_API}` },
    });

    dispatch({
      type: GET_BILL,
      payload: res.data.results[0],
    });
  };

  // Set Loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    });

  return (
    <BillContext.Provider
      value={{
        bills: state.bills,
        bill: state.bill,
        loading: state.loading,
        searchBills,
        getBill,
      }}
    >
      {props.children}
    </BillContext.Provider>
  );
};

export default BillState;
