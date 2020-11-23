import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Header } from '../../components';

jest.mock('react-router-dom');

describe('<Header />', () => {
    it('renders the basic <Header /> with a background', () => {
        const { container, getByText, getByTestId } = render(
            <Header>
                <Header.Frame>
                    <Header.Logo src="/logo.s" alt="Netflix"/>
                    <Header.TextLink active="true">Hello</Header.TextLink>
                </Header.Frame>
            </Header>
        )
        expect(getByText('Hello')).toBeTruthy();
        expect(getByTestId('header-bg')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the basic <Header /> without a background', () => {
        const { container, getByText, queryByTestId } = render(
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo src="/logo.s" alt="Netflix"/>
                    <Header.ButtonLink>Sign In</Header.ButtonLink>
                    <Header.TextLink active="false">Hello</Header.TextLink>
                </Header.Frame>
            </Header>
        )
        expect(getByText('Hello')).toBeTruthy();
        expect(queryByTestId('header-bg')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the full <Header /> with a background', () => {
        const { container, getByText, getByTestId } = render(
            <Header src="joker1" dontShowOnSmallViewPort>
            <Header.Frame>
              <Header.Group>
                <Header.Logo  src="/images/logo.svg" alt="Netflix" />
                <Header.TextLink active={false} onClick={() => {}}>Series</Header.TextLink>
                <Header.TextLink active={false} onClick={ () => {}}>Films</Header.TextLink>
              </Header.Group>
              <Header.Group>
                  <Header.SearchTerm searchTerm="Joker" setSearchTerm={() => {}}></Header.SearchTerm>
                <Header.Profile>
                  <Header.Picture src="/images/ngole.png" />
                  <Header.DropDown>
                    <Header.Group>
                      <Header.Picture src="/images/ngole.png" />
                      <Header.TextLink> Ngole Lawson </Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.TextLink onClick={ () => {}}>Sign out</Header.TextLink>
                    </Header.Group>
                  </Header.DropDown>
                </Header.Profile>
              </Header.Group>
            </Header.Frame>
    
            <Header.Feature>
              <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
              <Header.Text>
                Forever alone in the crowd ...
              </Header.Text>
              <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
          </Header> 
        );
        expect(getByTestId('search-input')).toBeTruthy();
        expect(getByTestId('search-input').value).toBe('Joker');
        fireEvent.change(getByTestId('search-input'), { target:  { value: 'Simpsons'},});
        fireEvent.click(getByTestId('search-click'));

        expect(getByText('Series')).toBeTruthy();
        expect(getByText('Films')).toBeTruthy();
        expect(getByText('Ngole Lawson')).toBeTruthy();
        expect(getByText('Watch Joker Now')).toBeTruthy();
        expect(getByText('Sign out')).toBeTruthy();
        expect(getByText('Forever alone in the crowd ...')).toBeTruthy();
        expect(getByText('Play')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
    
    
});
