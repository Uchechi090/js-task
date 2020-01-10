import React from "react";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Tree from '../components/Tree';

describe("Tree class component", () => {
    test("it should make a snapshot test", () => {
        const tree = create(<Tree />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});

describe("Get parent nodes", () => {
    let wrapper;
    let mockSubmit;
    beforeEach(() => {
        mockSubmit = jest.fn();
        wrapper = shallow(<Tree submit={mockSubmit} />);
    })
    test("it should filter an array", () => {
        const input = [
            { id: 0, name: 'aaa' },
            { id: 1, name: 'bbb', parent: 0 },
            { id: 2, name: 'ccc', parent: 0 },
            { id: 3, name: 'ddd' },
            { id: 4, name: 'eee', parent: 3 },
            { id: 5, name: 'fff', parent: 3 },
            { id: 6, name: 'ggg', parent: 3 },
            { id: 7, name: 'hhh' },
            { id: 8, name: 'iii', parent: 7 },
            { id: 9, name: 'jjj', parent: 8 },
            { id: 10, name: 'kkk', parent: 9 },
            { id: 11, name: 'lll', parent: 9 },
            { id: 12, name: 'mmm', parent: 9 },
            { id: 13, name: 'nnn', parent: 8 },
            { id: 14, name: 'ooo', parent: 13 },
            { id: 15, name: 'ppp', parent: 13 },
            { id: 16, name: 'qqq', parent: 13 },
            { id: 17, name: 'rrr' },
            { id: 18, name: 'sss', parent: 17 },
            { id: 19, name: 'ttt', parent: 17 },
            { id: 20, name: 'uuu', parent: 19 },
            { id: 21, name: 'vvv', parent: 19 },
            { id: 22, name: 'www', parent: 17 },
            { id: 23, name: 'xxx', parent: 17 },
            { id: 24, name: 'yyy', parent: 23 },
            { id: 25, name: 'zzz', parent: 23 },
        ];
        const output = [{ id: 0, name: 'aaa' }, { id: 3, name: 'ddd' }, { id: 7, name: 'hhh' }, { id: 17, name: 'rrr' }];
        const tree = shallow(<Tree />);
        const getParentNodes = tree.find().getParentNodes()
        expect(getParentNodes(input)).toEqual(output);
    });
});