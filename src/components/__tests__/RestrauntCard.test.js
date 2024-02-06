import Restrauntcard, { withPromotedLabel } from "../Restrauntcard";
import { render, screen } from "@testing-library/react";
import MOCK_Data from "../mocks/resdataMock.json";
import "@testing-library/jest-dom";

// it("should load the restrauntcard component", () => {
//   render(<Restrauntcard resData={MOCK_Data} />);

//   const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
//   expect(name).toBeInTheDocument();
// });

it("should load the withpromotedlabel", () => {
  const RestrauntPromoted = withPromotedLabel(Restrauntcard);
  render(<RestrauntPromoted resData={MOCK_Data} />);

  const name = screen.getByText("Promoted");
  expect(name).toBeInTheDocument();
});
