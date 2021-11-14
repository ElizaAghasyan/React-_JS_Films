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
            axios.get.mockImplementation(() => Promise.resolve({response: { data }}));
        });
    });

    describe("when API call fails", () => {
        it("shouldn't return anything", () => {
            let response =  {
                data: {
                    page: 1,
                    results: Array(20),
                    total_pages: 500,
                    total_results: 10000
                }
            }
            axios.get.mockImplementation(() => Promise.reject(err => err.message()));
        });
    });
});
