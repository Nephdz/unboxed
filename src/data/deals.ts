import { Deal } from "../types";

export const deals: Deal[] = [
  {
    id: "backstreet-boys",
    name: "Backstreet Boys",
    playType: "Before guess. Failed previous turn.",
    description:
      "Other players each pick a card and can only see their own. Everyone stands in self-proclaimed order from highest to lowest without knowing others' cards. Players must be honest — an Ace cannot claim the lowest position.",
    abbreviation: "BSB",
    image: "images/deals/backstreet-boys.png",
    defaultCount: 2,
  },
  {
    id: "bottoms-up",
    name: "Bottoms Up",
    playType: "Before guess. Failed previous turn.",
    description:
      "Replace the top card of a stack with the bottom card. You pay a tax equal to the value of the new top card.",
    abbreviation: "BU",
    image: "images/deals/bottoms-up.png",
    defaultCount: 2,
  },
  {
    id: "student-loans",
    name: "Student Loans",
    playType: "After fail. Immediate.",
    description:
      "Delay half of your drink amount until your next turn. If you guess wrong again, drink double the stack. You cannot use another deal while paying student loans.",
    abbreviation: "SL",
    image: "images/deals/student-loans.png",
    defaultCount: 2,
  },
  {
    id: "split-post",
    name: "Split Post",
    playType: "After fail. Immediate.",
    description:
      "When you hit a post, you may instead play higher/lower on both simultaneously. Each loss is worth one stack.",
    abbreviation: "SP",
    image: "images/deals/split-post.png",
    defaultCount: 2,
  },
  {
    id: "protection",
    name: "Protection",
    playType: "After fail. Failed previous turn.",
    description: "Negate a loss. <em>Always use protection.</em>",
    abbreviation: "P",
    image: "images/deals/protection.png",
    defaultCount: 1,
  },
  {
    id: "brothers-in-arms",
    name: "Brothers In Arms",
    playType: "After fail. Immediate.",
    description:
      "Play normally until somebody fails. You drink the same as that person. Ends with a fail or it makes it back to you.",
    abbreviation: "BiA",
    image: "images/deals/brothers-in-arms.png",
    defaultCount: 2,
  },
  {
    id: "easy-w",
    name: "Easy W",
    playType: "Before guess. Anytime.",
    description:
      "Pick another player. If you guess correctly, they drink the stack. If you guess wrong, you drink double.",
    abbreviation: "EW",
    image: "images/deals/easy-w.png",
    defaultCount: 2,
  },
  {
    id: "fat-post",
    name: "Fat Post",
    playType: "Before guess. Anytime.",
    description:
      "Play anytime before you play, create a +2/-2 range (can't go below 2 or above A). The range becomes the new post values. Everybody plays 1 round with new post. Person who activates is immune to other player's posts for 1 round.",
    abbreviation: "FP",
    image: "images/deals/fat-post.png",
    defaultCount: 2,
  },
];

// export const workshopDeals: Deal[] = [];
