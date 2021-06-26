import React from "react";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import storeConfig from '``../../../Redux/store/configureStore';
import Navbar from "../index";

it('renders the component', () => {
    const tree = renderer.create(<Provider store={storeConfig}>
        <MemoryRouter><Navbar /></MemoryRouter></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
})