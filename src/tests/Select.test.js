import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SelectZone from "../components/SelectZone";

const countries = [
    { capital: "Zurich", zone: "Europe/Zurich", id: 1 },
    { capital: "Berlin", zone: "Europe/Berlin", id: 2 }
];

test("renders select element with options for each country", () => {
    const setZone = jest.fn();
    render(<SelectZone setZone={setZone} countries={countries} />);
    const selectElement = screen.getByTestId("select-element");

    expect(selectElement).toHaveLength(countries.length);
    countries.forEach((country, index) => {
        expect(selectElement.options[index].text).toBe(country.capital);
        expect(selectElement.options[index].value).toBe(country.zone);
        //this basically means ;
        //   <option value="Europe/Zurich">
        //    Zurich
        //   </option>
    });
});

test("calls setZone with the selected option value when the select element is changed", () => {
    const setZone = jest.fn();
    render(<SelectZone setZone={setZone} countries={countries} />);
    const selectElement = screen.getByTestId("select-element");

    // Simulate a change event on a select element, setting the value to "Europe/Berlin"
    fireEvent.change(selectElement, { target: { value: "Europe/Berlin" } });
    // Assert that the setZone function was called with the argument "Europe/Berlin"
    expect(setZone).toHaveBeenCalledWith("Europe/Berlin");
});