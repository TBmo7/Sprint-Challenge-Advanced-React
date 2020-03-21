import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, getByRole, getByText} from "@testing-library/react"
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("clicking darkmode uses darkmode",()=>{
  const container = render(<App/>)
  const darkButton = container.getByText(/a button/i)
  // console.log("dark b",darkButton)
  const body = document.body;

  fireEvent.click(darkButton);

  expect(body.className).toBe("dark-mode")

})




