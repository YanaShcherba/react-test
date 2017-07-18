import { connect } from 'react-redux';
import Form from '../components/Form';
import { addItem } from '../actions';

function mapStateToProps(state) {
  return {
    contactList: state.listReducer.list,
    elem: {
      id: state.listReducer.list.length,
      name: '',
      number: '',
      image: 'http://via.placeholder.com/150x150/' } };
}

function mapDispatchToProps(dispatch) {
  return {
    setNew: (newElem) => {
      dispatch(addItem(newElem));
    },
  };
}

const Add = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Add;