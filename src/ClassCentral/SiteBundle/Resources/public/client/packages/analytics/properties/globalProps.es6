import Cookies from "js-cookie";
import uuid from "uuid";

if (!Cookies.get("permanentId")) {
  Cookies.set("permanentId", uuid(), { expires: 20 * 365 });
}

/* eslint-disable no-template-curly-in-string */
const globalProps = () => ({
  user: null,
  page: null,
  metadata: null,
  session_id: null,
  permanent_id: Cookies.get("permanentId"),
  raw_page_url: window.location.href,
  raw_user_agent: "${keen.user_agent}",
  referrer_url: document.referrer,
  abTests: null,
  original_referer: null
});
/* eslint-enable */

export default globalProps;
