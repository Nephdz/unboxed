import { Deal } from '../types';

export const deals: Deal[] = [
  {
    id: 'backstreet-boys',
    name: 'Backstreet Boys',
    description: 'Other players each pick a card and can only see their own. Everyone stands in self-proclaimed order from highest to lowest without knowing others\' cards. Players must be honest — an Ace cannot claim the lowest position.',
    imagePlaceholder: 'BSB',
  },
  {
    id: 'bottoms-up',
    name: 'Bottoms Up',
    description: 'Replace the top card of a stack with the bottom card. You pay a tax equal to the value of the new top card.',
    imagePlaceholder: 'BU',
  },
  {
    id: 'student-loans',
    name: 'Student Loans',
    description: 'Delay half of your drink amount until your next turn. If you guess wrong again, drink double the stack. You cannot use another deal while paying student loans.',
    imagePlaceholder: 'SL',
  },
  {
    id: 'tbd',
    name: 'TBD',
    description: 'When you hit a post (exact match), split into two different decks and play higher/lower on both simultaneously.',
    imagePlaceholder: 'TBD',
  },
];
