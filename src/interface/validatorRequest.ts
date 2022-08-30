import Issue from "./issue";
import Transition from "./transition";

export default interface validatorRequest {
  issue: Issue,
  transition: {
    from: Transition,
    to: Transition
  }
};