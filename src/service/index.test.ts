import axios from "axios";
import { getData } from ".";

jest.mock("axios");

const axiosGetMock = axios.get as jest.Mock;

const getError = async <TError>(
  fn: () => Promise<unknown>
): Promise<TError> => {
  try {
    await fn();
    throw new Error("Wrong error");
  } catch (error) {
    return error as TError;
  }
};

describe("service", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          id: 1,
          text: "test",
        },
      ],
    });
  });

  it("should return the items", async () => {
    const result = await getData();
    expect(result).toStrictEqual([
      {
        id: 1,
        text: "test",
      },
    ]);
    console.log(axiosGetMock.mock.calls);
  });

  it("should fail", async () => {
    axiosGetMock.mockRejectedValue(new Error("Network error!"));

    const expectError = await getError<Error>(() => getData());
    expect(expectError).toStrictEqual(new Error("Network error!"));
    expect(axiosGetMock).toHaveBeenCalledTimes(1);
  });
});
