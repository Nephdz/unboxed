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
      "When you hit a post, you may instead play higher/lower on both simultaneously. Each loss is worth one stack.",
    abbreviation: "SP",
    image: "images/deals/split-post.png",
  },
  {
    id: "protection",
    name: "Protection",
    description: "Play this to negate a loss. <em>Always use protection.</em>",
    abbreviation: "P",
    image: "images/deals/protection.png",
  },
];

export const workshopDeals: Deal[] = [
  {
    id: "camaraderie",
    name: "Camaraderie",
    description:
      "Pick another player and delay your drink until their turn. If they guess right, you don't drink. If they guess wrong, you drink double.",
    abbreviation: "C",
    image: "images/deals/camaraderie.png",
  },
  {
    id: "easy-w",
    name: "Easy W",
    description:
      "This may be played at anytime. Pick another player. If you guess correctly, they drink the stack. If you guess wrong, you drink double.",
    abbreviation: "EW",
    image: "images/deals/easy-w.png",
  },
  {
    id: "placeholder",
    name: "Placeholder",
    description:
      "Something that would benefit from playing when there's a middle card.",
    abbreviation: "PH",
    image: "images/deals/placeholder.png",
  },
];
