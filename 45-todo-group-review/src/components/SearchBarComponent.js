import React, { Component } from 'react';

export default class SearchBarComponent extends Component {
  render() {
    return (
    <div className="ui input fluid"> 
        <input autoComplete="off" placeholder="Search Term" type="text" name="searchTerm"/>
    </div>
    );
  }
}
