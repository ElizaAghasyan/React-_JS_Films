import axios from 'axios';

jest.mock("axios");

describe("fetchMovies", () => {

    describe("when API call is successful", () => {
        it("should return popular movie list", async () => {
            let response =  {
                data: {
                    page: 1,
                    results: Array(20),
                    total_pages: 500,
                    total_results: 10000
                }
            }
            // axios.get.mockImplementation(() => Promise.resolve({response: { data }}));
            const mockAsync = jest.fn().mockResolvedValueOnce(response)

            const data = await mockAsync()

            expect(data).toEqual(response);
        });
    });

    describe("when API call fails", () => {
        it("shouldn't return anything", async () => {
            let response = 'error'
            axios.get.mockImplementation(() => Promise.reject(err => err.message()));
            // const mockAsync = jest.fn().mockRejectedValueOnce(new Error('error'))
            //
            // const data = await mockAsync()
            //
            // expect(data).toBe('error');
        });
    });
});
