import { screen, render } from "@testing-library/jest-dom";
import SummaryPage from "../SummaryPage";

describe("summaryPage", () => {
  test("check and abutton", () => {
    render(<SummaryPage />);
    const checkBox = screen.getByRole("checkbox", {
      name: "주문하려는 것을 확인했니?",
    });
    expect(checkBox.checked).toEqual(false);

    const confirmButton = screen.getByRole("button", { name: "주문 확인" });
    expect(confirmButton.disabled).toBeTruthy();
  });
});
