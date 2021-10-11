// Write the function to substitute tokens with variables:

var data = {
  name: "Alex",
  messages: 3,
  url: "/my-messages"
};

var phrase1 =
  '<div>Hello {name}! You have <a href="{url}">{messages} new messages</a></div>';
var phrase2 =
  '<div>Good bye {name}! You have <a href="{url}">{messages} new messages</a></div>';

function substitute(data, str) {
  // return substitued string
}

// it("substitutes phrase #1", () => {
//   expect(substitute(data, phrase1)).toBe(
//     '<div>Hello Alex! You have <a href="/my-messages">3 new messages</a></div>'
//   );
// });

// it("substitutes phrase #2", () => {
//   expect(substitute(data, phrase2)).toBe(
//     '<div>Good bye Alex! You have <a href="/my-messages">3 new messages</a></div>'
//   );
// });
