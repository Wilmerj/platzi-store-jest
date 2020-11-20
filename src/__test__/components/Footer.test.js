import React from "react";
import { mount } from "enzyme";
import Footer from '../../components/Footer';
import { create } from "react-test-renderer";

describe('<Footer />', () => {
    const footer = mount(<Footer />);
    test('Render del componente footer', () => {
        expect(footer.length).toEqual(1);
    });
    test('Render del titulo', () => {
        const footer = mount(<Footer />);
        expect(footer.find(".Footer-title").text()).toEqual("Platzi Store")
    })
})

describe('Footer Snapshot' , () => {
    test('Comprobar la UI del componente Footer', () => {
        const footer = create(<Footer />);
        expect(footer.toJSON()).toMatchSnapshot(); 
    });
})
