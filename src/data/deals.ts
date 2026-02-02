import { Deal } from "../types";

export const deals: Deal[] = [
  {
    id: "backstreet-boys",
    name: "Backstreet Boys",
    description:
      "Other players each pick a card and can only see their own. Everyone stands in self-proclaimed order from highest to lowest without knowing others' cards. Players must be honest — an Ace cannot claim the lowest position.",
    abbreviation: "BSB",
    image: "images/deals/backstreet-boys.png",
  },
  {
    id: "bottoms-up",
    name: "Bottoms Up",
    description:
      "Replace the top card of a stack with the bottom card. You pay a tax equal to the value of the new top card.",
    abbreviation: "BU",
    image: "images/deals/bottoms-up.png",
  },
  {
    id: "student-loans",
    name: "Student Loans",
    description:
      "Delay half of your drink amount until your next turn. If you guess wrong again, drink double the stack. You cannot use another deal while paying student loans.",
    abbreviation: "SL",
    image: "images/deals/student-loans.png",
  },
  {
    id: "split-post",
    name: "Split Post",
    description:
      "When you hit a post (exact match), you may instead play higher/lower on both simultaneously. Each loss is worth one stack.",
    abbreviation: "SP",
    image: "images/deals/split-post.png",
  },
];
