const targetFn = require("./controller");

describe("the print function", () => {
  // standard best practice
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should respond with 'Hello world!'", () => {
    const mockReq = {};
    const mockRes = {
      send: jest.fn(),
    };

    targetFn(mockReq, mockRes);
    //if the response is different, test will fail
    expect(mockRes.send).toHaveBeenCalledWith("Hello world!!yodelayheehoo"); // If you change this value, the test will fail.
  });
});
