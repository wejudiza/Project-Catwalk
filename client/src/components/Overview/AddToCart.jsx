import React from 'react';
import Select from 'react-select';
import ReactModal from 'react-modal';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'Select Size',
      quantity: 0,
      skus: [],
      selectedQ: 0,
      showError: false,
      showModal: false,
      menuIsOpen: false,
    };
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.selectedSizeMode = this.selectedSizeMode.bind(this);
    this.onAddToCartClick = this.onAddToCartClick.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    // this.changedSkuMode = this.changedSkuMode.bind(this);
  }

  handleSizeChange(e) {
    if (!e) {
      this.setState({
        size: 'Select Size',
        quantity: 0,
      });
    } else {
      this.setState({
        size: e.value,
        quantity: e.key,
        showError: false,
        menuIsOpen: false,
      });
    }
  }

  handleQuantityChange(e) {
    this.setState({
      selectedQ: e.value,
    });
  }

  handleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  onAddToCartClick() {
    if (this.state.size === 'Select Size') {
      this.setState({
        showError: true,
        menuIsOpen: true,
      });
    } else {
      this.setState({
        showModal: true,
      });
    }
  }

  openMenu() {
    this.setState({
      menuIsOpen: true,
    });
  }

  closeMenu() {
    this.setState({
      menuIsOpen: false,
    });
  }

  selectedSizeMode() {
    if (this.state.size !== 'Select Size') {
      let numbers = [...Array(16).keys()];
      numbers.shift();
      if (this.state.quantity < 15) {
        numbers = [...Array(this.state.quantity + 1).keys()];
        numbers.shift();
      }
      const quantities = numbers.map((quantity) => (
        { value: quantity, label: quantity }
      ));
      return (
        <Select
          options={quantities}
          // defaultValue={quantities[0]}
          onChange={this.handleQuantityChange}
        />
      );
    }
    return (
      <Select isDisabled placeholder="-" />
    );
  }

  render() {
    const sizes = Object.keys(this.props.skus).map((sku) => (
      { value: this.props.skus[sku].size, label: this.props.skus[sku].size, key: this.props.skus[sku].quantity }
    ));
    return (
      <div>
        <br />
        {this.state.showError && <span style={{ color: 'red' }}>Please select size</span>}
        <Select
          menuIsOpen={this.state.menuIsOpen}
          options={sizes}
          placeholder="Select Size"
          onFocus={this.openMenu}
          // autoBlur
          onBlur={this.closeMenu}
          onChange={this.handleSizeChange}
          style={{ width: '50%' }}
        />
        {this.selectedSizeMode()}
        <br />
        <button type="button" id="cart" onClick={this.onAddToCartClick}>Add to Cart</button>
        {this.state.showModal
        && (
        <ReactModal isOpen contentLabel="test" style={modalStyle} ariaHideApp={false} onRequestClose={this.handleModal}>
          <p>
            <b><u>Added to cart!</u></b>
            <br />
            <br />
            Style:
            {' '}
            {this.props.currentStyle.name}
            <br />
            Size:
            {' '}
            {this.state.size}
            <br />
            Quantity:
            {' '}
            {this.state.selectedQ}
          </p>
          <button onClick={this.handleModal}>Close</button>
        </ReactModal>
        )}
      </div>
    );
  }
}
