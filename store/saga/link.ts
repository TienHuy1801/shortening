import { actions } from './../action';
import { call, put, takeEvery} from 'redux-saga/effects';
import { SUBMIT_LINK } from '../type/link';

async function getLink(longLink: string) {
  let data = {
  "domain": "bit.ly",  
  "long_url": longLink 
  };
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST", 
    headers: {
      "Authorization": "Bearer af94aed6d5dec34e97d0446b06e3c4bad9a95053",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
    return res;
  });  
  return response.link;
}

function* fetchData(action) {
  try {
    if (action.payload == "") return;
    const shortLink = yield call(getLink, action.payload);
    let longLink = action.payload;
    if (longLink.length > 40) longLink = longLink.slice(0, 40) + "...";
    const data = {
      long: longLink,
      short: shortLink
    }
    yield put(actions.link.updateData(data)); 
  } catch (e) {
    console.log(e);
  }
}

export const rootLinkSaga = [
  takeEvery( SUBMIT_LINK, fetchData)
];
