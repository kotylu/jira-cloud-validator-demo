 interface Transition {
  from: { id: number },
  to: { id: number }
};

interface Issue {
  id: number,
  key: string
};

export default interface validatorRequest {
  issue: Issue,
  transition: {
    from: Transition,
    to: Transition
  }
};