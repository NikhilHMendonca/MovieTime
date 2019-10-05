import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const Container = styled.div`
  // width: calc(100vw - 32px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #141d2b;
  border: 1px solid #fff;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin: 16px 0;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  box-shadow: none;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 0 8px;
  background: transparent;

  &:focus,
  &:active {
    outline: none;
  }
`;

const SearchButton = styled.button`
	border: none;
	box-shadow: none;
	background: none;

	&:focus, &:active {
		outline: none;
	}
`;

class Header extends Component {
  state = {
    searchedValue: ""
  };

  handleOnSearch = event => {
    this.setState({ searchedValue: event.target.value });
	};
	
  handleOnSubmitSearch = () => {
    console.log(this.state.searchedValue);
  };

  render() {
    const { searchedValue } = this.state;
    return (
      <Fragment>
        <Title>MovieTime</Title>
        <Container>
          <SearchBar
            type="text"
            value={searchedValue}
            onChange={this.handleOnSearch}
            placeholder="Search for your Movie/Tv show"
          />
          <SearchButton onClick={this.handleOnSubmitSearch}>
            <FiSearch size="32px" style={{ color: "#fff", margin: "0 8px" }} />
          </SearchButton>
        </Container>
      </Fragment>
    );
  }
}

export default Header;
