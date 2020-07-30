import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AppConnect from './App';

const mockStore = configureStore([]);

describe('App Component', () => {
    let wrapper;
        let initialState = {
            homePageData: {
                page: 4,
                hits: [
                    {
                        hide: false,
                        created_at: "2017-02-23T13:01:08.000Z",
                        objectID: 1,
                        num_comments: 12,
                        points: 696,
                        title: 'title 1',
                        url: "www.test1.com",
                        author: "test author",

                    },
                    {
                        created_at: "2020-02-23T13:01:08.000Z",
                        objectID: 2,
                        num_comments: 12,
                        points: 696,
                        title: 'title 2',
                        url: "www.test1.com",
                        author: "test author",

                    },
                    {
                        created_at: "2020-07-23T13:01:08.000Z",
                        objectID: 3,
                        num_comments: 12,
                        points: 696,
                        title: 'title 2',
                        url: "www.test1.com",
                        author: "test author",

                    },
                    {
                        created_at: "2020-07-31T04:01:08.000Z",
                        objectID: 3,
                        num_comments: 12,
                        points: 696,
                        title: 'title 2',
                        url: "www.test1.com",
                        author: "test author",

                    }
                ]
            }
        };
        let store = mockStore({});
        beforeEach(() => {
            store = mockStore(initialState);
            wrapper = mount(
                <Provider store={store}>
                    <AppConnect store={store}/>
                </Provider>);
        });
        test("Search Cont", () => {
            expect(wrapper.find('.tableBody')).toHaveLength(4);
            wrapper.find('.paginationBtnPrevious').at(0).simulate("click");
            wrapper.find('.paginationBtnNext').at(0).simulate("click");
        });
});
describe('App Component', () => {
    let wrapper;
        let initialState = {
            homePageData: {}
        };
        let store = mockStore({});
        beforeEach(() => {
            store = mockStore(initialState);
            wrapper = mount(
                <Provider store={store}>
                    <AppConnect store={store}/>
                </Provider>);
        });
        test("Search Cont", () => {
            expect(wrapper.find('.tableBody')).toHaveLength(0);
        });
});