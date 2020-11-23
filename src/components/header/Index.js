import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, SearchTerm, SearchIcon, SearchInput, PlayButton,  DropDown, Group, Profile, Logo, ButtonLink, Picture, Feature, FeatureCallOut, Text, TextLink} from './styles/header';


function Header({ bg = true, children, ...restProps}) {
    return   bg ?
    <Background { ...restProps } data-testid="header-bg">{children}</Background>
                :
                children;
    
}
			   
export default Header;

Header.Feature = function HeaderFeature({children, ...restProps}) {
    return (<Feature {...restProps}>{children}</Feature>)
    } 

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}) {
    return (<FeatureCallOut {...restProps}>{children}</FeatureCallOut>)
    } 
     
Header.Text = function HeaderText({children, ...restProps}) {
        return (<Text {...restProps}>{children} </ Text>)
    }  
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
return (<PlayButton {...restProps}>{children}</PlayButton>)
}    

Header.SearchTerm = function HeaderSearchTerm({searchTerm, setSearchTerm, ...restProps}) {
    const [searchActive, setSearchActive] = useState(false);    
    return (<SearchTerm {...restProps}>
           <SearchIcon onClick={() => setSearchActive( searchActive => !searchActive )} data-testid="search-click">
               <img src="/images/icons/search.png" alt="Search" />
           </SearchIcon>
           <SearchInput 
           value={searchTerm}
           onChange={({target}) => setSearchTerm(target.value)}
           placeholder="Search films and series"
           active={searchActive}
           data-testid="search-input"
           />
         </SearchTerm>)
    } 

Header.Picture = function HeaderPicture({src, ...restProps}) {
        return (<Picture {...restProps} src={`/images/users/${src}.png`} />)
    }  

Header.DropDown = function HeaderDropDown({children, ...restProps}) {
return (<DropDown {...restProps}>{children}</DropDown>)
    }      
    
Header.Profile = function HeaderProfile({children, ...restProps}) {
        return (<Profile {...restProps}>{children} </Profile>)
    }     

Header.TextLink = function HeaderTextLink({children, ...restProps}) {
        return (<TextLink {...restProps}>{children} </TextLink>)
    }     

Header.Frame = function HeaderFrame({children, ...restProps}) {
return (<Container {...restProps}>{children}</Container>)
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return (<Group {...restProps}>{children}</Group>)
    }

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
        <ReactRouterLink to = {to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
	return (<ButtonLink {...restProps}>{children}</ButtonLink>)
	}