import React from 'react';
import { CardColumns } from 'react-bootstrap';
import { connect } from 'react-redux';
import TypeCard from '../components/TypeCard';
import '../assets/styles/App.scss';

const Types = ({ types }) => (
  <>
    <h1>Types</h1>
    <CardColumns>
      {
        types.map((type) => (
          <TypeCard
            name={type.name}
            url={type.url}
            key={type.name}
          />
        ))
      }
    </CardColumns>
  </>
);

const mapStateToProps = (state) => ({
  types: state.types,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Types);
