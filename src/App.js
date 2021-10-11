import "./styles.css";

/**
 * -- Whiteboard --
 * 1. Hide description until the button is clicked
 * 2. Because of SEO we want to only hide description after page load
 * 3. Anonymize all phone numbers: first 4 numbers visible, replace following 4 with X (e.g. 8111 XXXX or 8123 XXXX)
 *    Note Singapore phone number format is always 8 numbers long.
 *    See [Number Ranges on wikipedia](https://en.wikipedia.org/wiki/Telephone_numbers_in_Singapore#Number_ranges) for precise rules.
 * 4. Line returns in the text should be displayed on page
 * 5. Clicking on phone number reveals the real number
 */

export default function ListingAd({ pic, title, address, description }) {
  return (
    <div className="App">
      <img className="mainPic" width="300" height="500" src={pic} />
      <div className="mainContent">
        <h1>{title}</h1>
        <p className="address">{address}</p>
        <button>See description</button>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
